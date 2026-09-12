// ES combiner
import { pages as about } from './es-about.mjs'
import { pages as projects } from './es-projects.mjs'
import { pages as agentic } from './es-agentic.mjs'
import { pages as skills } from './es-skills.mjs'
import { pages as stories } from './es-stories.mjs'

export const pages = [...about, ...projects, ...agentic, ...skills, ...stories]
