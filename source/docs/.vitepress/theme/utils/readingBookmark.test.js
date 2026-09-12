import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  createReadingBookmark,
  createReadingBookmarkSnapshot,
  getReadingBookmarkKey,
  readReadingBookmark,
  writeReadingBookmark
} from './readingBookmark.js'

const createStorage = () => {
  const values = new Map()

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null
    },
    setItem(key, value) {
      values.set(key, String(value))
    }
  }
}

describe('reading bookmarks', () => {
  it('uses root path defaults for missing path values', () => {
    const storage = createStorage()
    const bookmark = createReadingBookmark({
      title: '  Root page  ',
      section: '  Intro  '
    })

    assert.equal(bookmark.path, '/')
    assert.equal(bookmark.title, 'Root page')
    assert.equal(bookmark.section, 'Intro')
    assert.equal(Number.isFinite(bookmark.updatedAt), true)
    assert.equal(getReadingBookmarkKey(), 'ev-reading-bookmark:/')

    assert.equal(writeReadingBookmark(storage, bookmark), true)
    assert.equal(readReadingBookmark(storage, undefined).path, '/')
  })

  it('stores bookmarks by full path so each locale is independent', () => {
    const storage = createStorage()
    const zhBookmark = createReadingBookmark({
      path: '/easy-vibe/zh-cn/stage-1/intro/',
      title: '中文标题',
      section: '小节',
      scrollY: 320,
      progress: 45,
      now: () => 123
    })
    const enBookmark = createReadingBookmark({
      path: '/easy-vibe/en/stage-1/intro/',
      title: 'English title',
      scrollY: 80,
      progress: 12,
      now: () => 456
    })

    assert.equal(writeReadingBookmark(storage, zhBookmark), true)
    assert.equal(writeReadingBookmark(storage, enBookmark), true)

    assert.deepEqual(
      readReadingBookmark(storage, '/easy-vibe/zh-cn/stage-1/intro/', 1000),
      {
        version: 1,
        path: '/easy-vibe/zh-cn/stage-1/intro/',
        title: '中文标题',
        section: '小节',
        scrollY: 320,
        progress: 45,
        updatedAt: 123
      }
    )
    assert.equal(
      readReadingBookmark(storage, '/easy-vibe/en/stage-1/intro/', 1000).title,
      'English title'
    )
  })

  it('keeps delayed saves bound to the path captured before navigation', () => {
    const storage = createStorage()
    let currentPath = '/easy-vibe/zh-cn/page-a/'

    const scheduledPath = currentPath
    currentPath = '/easy-vibe/zh-cn/page-b/'

    writeReadingBookmark(
      storage,
      createReadingBookmarkSnapshot({
        path: scheduledPath,
        getTitle: () => '页面 A',
        getSection: () => '小节 A',
        getScrollY: () => 240,
        getProgress: () => 32,
        now: () => 777
      })
    )

    assert.equal(readReadingBookmark(storage, currentPath, 1000), null)
    assert.deepEqual(readReadingBookmark(storage, scheduledPath, 1000), {
      version: 1,
      path: scheduledPath,
      title: '页面 A',
      section: '小节 A',
      scrollY: 240,
      progress: 32,
      updatedAt: 777
    })
  })

  it('normalizes invalid numeric values', () => {
    assert.deepEqual(
      createReadingBookmark({
        path: '/easy-vibe/ja-jp/page/',
        scrollY: -5,
        progress: 140,
        now: () => 1
      }),
      {
        version: 1,
        path: '/easy-vibe/ja-jp/page/',
        title: '',
        section: '',
        scrollY: 0,
        progress: 100,
        updatedAt: 1
      }
    )

    assert.deepEqual(
      createReadingBookmark({
        path: '/easy-vibe/ja-jp/page/',
        title: null,
        section: null,
        scrollY: Number.NaN,
        progress: Number.NaN,
        now: () => 2
      }),
      {
        version: 1,
        path: '/easy-vibe/ja-jp/page/',
        title: '',
        section: '',
        scrollY: 0,
        progress: 0,
        updatedAt: 2
      }
    )
  })

  it('ignores malformed or mismatched stored values', () => {
    const storage = createStorage()

    storage.setItem(getReadingBookmarkKey('/easy-vibe/ko-kr/page/'), '{bad')
    assert.equal(
      readReadingBookmark(storage, '/easy-vibe/ko-kr/page/', 1000),
      null
    )

    storage.setItem(
      getReadingBookmarkKey('/easy-vibe/ko-kr/page/'),
      JSON.stringify({
        version: 1,
        path: '/easy-vibe/zh-cn/page/',
        scrollY: 20,
        progress: 10
      })
    )
    assert.equal(
      readReadingBookmark(storage, '/easy-vibe/ko-kr/page/', 1000),
      null
    )

    storage.setItem(
      getReadingBookmarkKey('/easy-vibe/ko-kr/page/'),
      JSON.stringify(null)
    )
    assert.equal(
      readReadingBookmark(storage, '/easy-vibe/ko-kr/page/', 1000),
      null
    )

    storage.setItem(getReadingBookmarkKey('/easy-vibe/ko-kr/page/'), '42')
    assert.equal(
      readReadingBookmark(storage, '/easy-vibe/ko-kr/page/', 1000),
      null
    )

    storage.setItem(
      getReadingBookmarkKey('/easy-vibe/ko-kr/page/'),
      JSON.stringify({
        version: 2,
        path: '/easy-vibe/ko-kr/page/'
      })
    )
    assert.equal(
      readReadingBookmark(storage, '/easy-vibe/ko-kr/page/', 1000),
      null
    )
  })

  it('clamps restored scroll position to current document height', () => {
    const storage = createStorage()
    const path = '/easy-vibe/fr-fr/page/'

    writeReadingBookmark(
      storage,
      createReadingBookmark({
        path,
        scrollY: 9000,
        progress: 88,
        now: () => 99
      })
    )

    assert.equal(readReadingBookmark(storage, path, 640).scrollY, 640)
  })

  it('normalizes sparse stored bookmark values', () => {
    const storage = createStorage()
    const path = '/easy-vibe/es-es/page/'

    storage.setItem(
      getReadingBookmarkKey(path),
      JSON.stringify({
        version: 1,
        path,
        scrollY: 20,
        progress: -50
      })
    )

    assert.deepEqual(readReadingBookmark(storage, path, -1), {
      version: 1,
      path,
      title: '',
      section: '',
      scrollY: 0,
      progress: 0,
      updatedAt: 0
    })
  })

  it('returns null when storage is missing, empty, or throws', () => {
    assert.equal(readReadingBookmark(null, '/missing/'), null)
    assert.equal(readReadingBookmark(createStorage(), '/missing/'), null)
    assert.equal(
      readReadingBookmark(
        {
          getItem() {
            throw new Error('storage read failed')
          }
        },
        '/missing/'
      ),
      null
    )
  })

  it('returns false when bookmark cannot be written', () => {
    assert.equal(writeReadingBookmark(null, { path: '/x/' }), false)
    assert.equal(writeReadingBookmark(createStorage(), null), false)
    assert.equal(writeReadingBookmark(createStorage(), { path: '' }), false)
    assert.equal(
      writeReadingBookmark(
        {
          setItem() {
            throw new Error('storage write failed')
          }
        },
        createReadingBookmark({ path: '/x/' })
      ),
      false
    )
  })
})
