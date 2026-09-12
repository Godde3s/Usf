/**
 * 统一维护教程“相关文章”映射表：
 * - key: 文档相对路径（不含 /index.md）
 * - value: 该文档底部相关文章卡片数组
 * 页面只负责按 key 读取并渲染，不在页面内重复维护映射数据。
 */
const rawRelatedArticlesMap = {
  'zh-cn/stage-1/learning-map': [
    {
      href: '/zh-cn/stage-1/ai-capabilities-through-games/',
      title: 'AI 时代的编程初体验',
      description:
        '先用小游戏感受 AI 编程，快速建立手感，理解"什么问题适合交给 AI"。',
      icon: '🎮'
    },
    {
      href: '/zh-cn/stage-1/introduction-to-ai-ide/',
      title: 'AI 编程工具介绍与使用',
      description:
        '从网页试玩升级到本地 AI IDE（Trae），建立完整开发环境，学会高效与 AI 对话。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-1/clone-your-favorite-app/',
      title: '从截图复刻：第一次模仿练习',
      description: '看着截图做作品，练手巩固工具使用，不急于创造。',
      icon: '📱'
    },
    {
      href: '/zh-cn/stage-1/appendix-idea-sources/',
      title: '1. 寻找真实问题',
      description: '从真实工作和生活场景出发，找到值得继续研究的问题。',
      icon: '💡'
    },
    {
      href: '/zh-cn/stage-1/finding-great-idea/',
      title: '2. 筛选值得做的方向',
      description: '学会挖掘真实用户需求，判断什么方向值得投入时间去做。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-1/appendix-jobs-to-be-done/',
      title: '3. 看懂真实需求（JTBD）',
      description: '从用户想完成的任务出发，理解表面需求背后的真实动机。',
      icon: '🔍'
    },
    {
      href: '/zh-cn/stage-1/appendix-mom-test/',
      title: '4. 用访谈验证需求',
      description: '用正确的提问方式获取真实信息，避免把客套话当成需求。',
      icon: '🎤'
    },
    {
      href: '/zh-cn/stage-1/appendix-double-diamond/',
      title: '5. 收敛方案（双钻模型）',
      description: '把发散得到的问题和方案逐步收敛，确定接下来要做的产品。',
      icon: '💎'
    },
    {
      href: '/zh-cn/stage-1/building-prototype/',
      title: '6. 做出可交互原型',
      description:
        '从需求拆解到页面落地，用 AI IDE 生成多页面应用，完成第一版可交互 Demo。',
      icon: '🧩'
    },
    {
      href: '/zh-cn/stage-1/integrating-ai-capabilities/',
      title: '7. 接入真实 AI 能力',
      description: '接入真实 API（文本模型、文生图），让原型从"可看"变"可用"。',
      icon: '🤖'
    },
    {
      href: '/zh-cn/stage-1/complete-project-practice/',
      title: '8. 打磨并交付完整作品',
      description:
        '补齐数据、交互、异常处理，做出可展示、可交互的完整 AI 产品原型。',
      icon: '🚀'
    }
  ],
  'zh-cn/stage-1/ai-capabilities-through-games': [
    {
      href: '/zh-cn/stage-1/introduction-to-ai-ide/',
      title: 'AI 编程工具介绍与使用',
      description:
        '把网页试玩升级到本地 AI IDE（Trae），建立完整开发环境，学会高效与 AI 对话。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-1/learning-map/',
      title: '返回：如何学习本课程',
      description: '按完整路线查看每个阶段目标与推荐学习顺序。',
      icon: '🗺️'
    }
  ],
  'zh-cn/stage-1/introduction-to-ai-ide': [
    {
      href: '/zh-cn/stage-1/clone-your-favorite-app/',
      title: '从截图复刻：第一次模仿练习',
      description: '用截图复刻练手，巩固工具使用，获得更多实战经验。',
      icon: '📱'
    }
  ],
  'zh-cn/stage-1/clone-your-favorite-app': [
    {
      href: '/zh-cn/stage-1/appendix-idea-sources/',
      title: '创意灵感的来源',
      description: '工具练熟了，开始了解从哪些渠道可以找到靠谱的产品灵感。',
      icon: '💡'
    }
  ],
  'zh-cn/stage-1/appendix-idea-sources': [
    {
      href: '/zh-cn/stage-1/finding-great-idea/',
      title: '如何判断一个好点子',
      description: '有了灵感来源，学会判断什么样的点子值得做。',
      icon: '🎯'
    }
  ],
  'zh-cn/stage-1/finding-great-idea': [
    {
      href: '/zh-cn/stage-1/appendix-double-diamond/',
      title: '双钻设计模型',
      description: '用经典设计框架梳理思路，确保方向正确再动手。',
      icon: '💎'
    }
  ],
  'zh-cn/stage-1/appendix-double-diamond': [
    {
      href: '/zh-cn/stage-1/appendix-jobs-to-be-done/',
      title: 'Jobs to Be Done 需求理论',
      description: '深入理解用户需求本质，挖掘用户真正要完成的任务。',
      icon: '🎯'
    }
  ],
  'zh-cn/stage-1/appendix-jobs-to-be-done': [
    {
      href: '/zh-cn/stage-1/appendix-mom-test/',
      title: 'The Mom Test：用户访谈方法',
      description: '学会正确的用户访谈方法，避免自嗨式验证。',
      icon: '🎤'
    }
  ],
  'zh-cn/stage-1/appendix-mom-test': [
    {
      href: '/zh-cn/stage-1/building-prototype/',
      title: '构建可交互的产品原型',
      description: '需求验证清楚了，开始动手把想法变成可交互产品。',
      icon: '🧩'
    }
  ],
  'zh-cn/stage-1/building-prototype': [
    {
      href: '/zh-cn/stage-1/integrating-ai-capabilities/',
      title: '为原型接入 AI 能力',
      description:
        '接入真实 API（文本模型、文生图），把静态原型升级为可调用真实模型服务的应用。',
      icon: '🤖'
    },
    {
      href: '/zh-cn/stage-1/complete-project-practice/',
      title: '完整项目实战：从想法到作品',
      description: '补齐数据、交互与异常处理，完成可演示的完整 AI 产品原型。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/frontend/figma-mastergo/',
      title: '进阶：Figma 与 MasterGo 入门',
      description: '继续强化设计到开发的协作流程，为工程化打基础。',
      icon: '🎨'
    }
  ],
  'zh-cn/stage-1/integrating-ai-capabilities': [
    {
      href: '/zh-cn/stage-1/complete-project-practice/',
      title: '完整项目实战：从想法到作品',
      description: '把分散能力拼成完整业务链路，做出可展示的完整 AI 产品原型。',
      icon: '🧱'
    },
    {
      href: '/zh-cn/stage-2/frontend/lovart-assets/',
      title: '初中级：素材生产 Agent',
      description: '进入更真实的多模型协同流程，搭建可复用的生成系统。',
      icon: '🖼️'
    },
    {
      href: '/zh-cn/stage-2/backend/ai-interface-code/',
      title: '初中级：后端接口设计与开发',
      description: '把 AI 能力规范地接入后端接口，提升工程可维护性。',
      icon: '🔌'
    }
  ],
  'zh-cn/stage-1/complete-project-practice': [
    {
      href: '/zh-cn/stage-2/frontend/lovart-assets/',
      title: '初中级前端：素材生产 Agent',
      description: '学习更复杂的多模型素材生产流程，提升视觉资产效率。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-2/assignments/copywriting-platform-supabase/',
      title: 'Stage 2 大作业：全栈应用实战',
      description: '把原型能力升级为前后端一体化的可上线应用。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/backend/database-supabase/',
      title: '初中级后端：从数据库到 Supabase',
      description: '补齐数据建模、存储与权限能力，迈向工程化开发。',
      icon: '🗄️'
    }
  ],
  'zh-cn/stage-2/frontend/lovart-assets': [
    {
      href: '/zh-cn/stage-2/frontend/ui-design/',
      title: '前端2：AI 设计入门',
      description:
        '借助 AI 设计能力完成 Logo、图标与完整网页 UI，掌握提示词工程与一致性技巧。',
      icon: '✨'
    },
    {
      href: '/zh-cn/stage-2/frontend/figma-mastergo/',
      title: '前端3：Figma 与 MasterGo 入门',
      description: '把素材放进设计稿，建立从视觉到布局的结构化表达。',
      icon: '🎨'
    },
    {
      href: '/zh-cn/stage-2/frontend/multi-product-ui/',
      title: '前端4：UI 设计规范与多产品界面',
      description:
        '建立统一的设计系统与组件规范，完成从单个页面到多产品线布局。',
      icon: '📐'
    },
    {
      href: '/zh-cn/stage-2/frontend/llm-skills-beautiful/',
      title: '前端5：结合 Agent Skills 美化界面',
      description:
        '把设计系统封装成 Skill，让 AI 自动加载品牌规范完成页面美化。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-2/frontend/design-to-code/',
      title: '前端6：设计原型到项目代码',
      description: '把设计稿准确转成可维护的前端代码与组件结构。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/frontend/modern-component-library/',
      title: '前端7：现代组件库与界面升级',
      description: '利用组件库做工程化提效，让界面一致性更稳定。',
      icon: '🧩'
    }
  ],
  'zh-cn/stage-2/frontend/ui-design': [
    {
      href: '/zh-cn/stage-2/frontend/lovart-assets/',
      title: '前端1：NanoBanana 素材生产',
      description:
        '用文生图/图生图批量生成设计素材，并搭建可复用的生产流程，作为 AI 设计的素材来源。',
      icon: '🖼️'
    },
    {
      href: '/zh-cn/stage-2/frontend/figma-mastergo/',
      title: '前端3：Figma 与 MasterGo 入门',
      description: '把 AI 生成的素材组织进设计稿，完成从视觉到布局的落地。',
      icon: '📐'
    },
    {
      href: '/zh-cn/stage-2/frontend/multi-product-ui/',
      title: '前端4：UI 设计规范与多产品界面',
      description:
        '建立统一的设计系统与组件规范，完成从单个页面到多产品线布局。',
      icon: '🎨'
    },
    {
      href: '/zh-cn/stage-2/frontend/llm-skills-beautiful/',
      title: '前端5：结合 Agent Skills 美化界面',
      description:
        '把设计系统封装成 Skill，让 AI 自动加载你的品牌规范完成页面美化。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-2/frontend/design-to-code/',
      title: '前端6：设计原型到项目代码',
      description: '把设计稿准确转成可维护的前端代码与组件结构。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/frontend/modern-component-library/',
      title: '前端7：现代组件库与界面升级',
      description: '利用组件库做工程化提效，让界面一致性更稳定。',
      icon: '🧩'
    }
  ],
  'zh-cn/stage-2/frontend/figma-mastergo': [
    {
      href: '/zh-cn/stage-2/frontend/ui-design/',
      title: '前端2：AI 设计入门',
      description:
        '借助 AI 设计完成 Logo、图标与完整网页 UI，作为设计稿的素材来源。',
      icon: '✨'
    },
    {
      href: '/zh-cn/stage-2/frontend/multi-product-ui/',
      title: '前端4：UI 设计规范与多产品界面',
      description:
        '建立统一的设计系统与组件规范，完成从单个页面到多产品线布局。',
      icon: '📐'
    },
    {
      href: '/zh-cn/stage-2/frontend/llm-skills-beautiful/',
      title: '前端5：结合 Agent Skills 美化界面',
      description:
        '把设计系统封装成 Skill，让 AI 自动加载品牌规范完成页面美化。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-2/frontend/design-to-code/',
      title: '前端6：设计原型到项目代码',
      description: '把设计稿系统化转译为可维护的前端代码与组件结构。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/frontend/modern-component-library/',
      title: '前端7：现代组件库与界面升级',
      description: '用组件库统一 UI 规范并提升页面开发效率。',
      icon: '🧩'
    }
  ],
  'zh-cn/stage-2/backend/cloud-server-deployment': [
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：Vercel/Zeabur/CloudBase 一键发布',
      description: '最简单的发站方式，连仓库即上线，不用买服务器也不用懂运维。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/backend/modern-cli/',
      title: 'CLI Coding Agent 编程助手',
      description: '用命令行 AI Agent 直接在服务器上执行部署与运维操作。',
      icon: '⌨️'
    },
    {
      href: '/zh-cn/stage-2/backend/git-workflow/',
      title: 'Git 与 GitHub 入门指南',
      description: '代码版本管理是自动化部署的基础。',
      icon: '📚'
    },
    {
      href: '/zh-cn/stage-2/backend/database-supabase/',
      title: '数据库与 Supabase 入门',
      description: '服务器上跑项目离不开数据库，先了解数据层怎么部署。',
      icon: '🗄️'
    }
  ],
  'zh-cn/stage-1/appendix-b-common-errors': [
    {
      href: '/zh-cn/stage-1/introduction-to-ai-ide/',
      title: 'AI 编程工具介绍与使用',
      description: '重新梳理 Trae IDE 的环境配置与常见设置。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-1/building-prototype/',
      title: '6. 做出可交互原型',
      description: '从需求拆解到页面落地，学会用 AI IDE 生成多页面应用。',
      icon: '🧩'
    },
    {
      href: '/zh-cn/stage-1/learning-map/',
      title: '返回：如何学习本课程',
      description: '按完整路线查看每个阶段目标与推荐学习顺序。',
      icon: '🗺️'
    }
  ],
  'zh-cn/stage-2/frontend/multi-product-ui': [
    {
      href: '/zh-cn/stage-2/frontend/figma-mastergo/',
      title: '前端3：Figma 与 MasterGo 入门',
      description: '回顾从素材到设计稿的结构化流程，为多产品规范打基础。',
      icon: '🎨'
    },
    {
      href: '/zh-cn/stage-2/frontend/llm-skills-beautiful/',
      title: '前端5：结合 Agent Skills 美化界面',
      description:
        '把设计系统封装成 Skill，让 AI 自动加载品牌规范完成页面美化。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-2/frontend/design-to-code/',
      title: '前端6：设计原型到项目代码',
      description: '把设计稿准确转成可维护的前端代码与组件结构。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/frontend/modern-component-library/',
      title: '前端7：现代组件库与界面升级',
      description: '利用组件库做工程化提效，让界面一致性更稳定。',
      icon: '🧩'
    }
  ],
  'zh-cn/stage-2/frontend/llm-skills-beautiful': [
    {
      href: '/zh-cn/stage-2/frontend/multi-product-ui/',
      title: '前端4：UI 设计规范与多产品界面',
      description: '先建立统一的设计系统与组件规范，再用 Skills 自动化落地。',
      icon: '📐'
    },
    {
      href: '/zh-cn/stage-2/frontend/design-to-code/',
      title: '前端6：设计原型到项目代码',
      description: '把设计稿准确转成可维护的前端代码与组件结构。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/frontend/modern-component-library/',
      title: '前端7：现代组件库与界面升级',
      description: '利用组件库做工程化提效，让界面一致性更稳定。',
      icon: '🧩'
    }
  ],
  'zh-cn/stage-2/frontend/design-to-code': [
    {
      href: '/zh-cn/stage-2/frontend/llm-skills-beautiful/',
      title: '前端5：结合 Agent Skills 美化界面',
      description:
        '把设计系统封装成 Skill，让 AI 自动加载品牌规范完成页面美化。',
      icon: '🎯'
    },
    {
      href: '/zh-cn/stage-2/frontend/modern-component-library/',
      title: '前端7：现代组件库与界面升级',
      description: '利用组件库做工程化提效，让界面一致性更稳定。',
      icon: '🧩'
    },
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：一键 PaaS 部署',
      description:
        '学会把代码一键发布到 Vercel / Zeabur / CloudBase 等平台，让全世界都能访问。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/assignments/copywriting-platform-supabase/',
      title: 'Stage 2 大作业：全栈应用实战',
      description: '把前端能力升级为前后端一体化的可上线应用。',
      icon: '💻'
    }
  ],
  'zh-cn/stage-2/frontend/modern-component-library': [
    {
      href: '/zh-cn/stage-2/frontend/design-to-code/',
      title: '前端6：设计原型到项目代码',
      description: '把设计稿准确转成可维护的前端代码与组件结构。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：一键 PaaS 部署',
      description:
        '学会把代码一键发布到 Vercel / Zeabur / CloudBase 等平台，让全世界都能访问。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/backend/database-supabase/',
      title: '后端1：数据库与 Supabase 入门',
      description: '为页面加上真实数据层，补齐权限、存储、数据建模能力。',
      icon: '🗄️'
    },
    {
      href: '/zh-cn/stage-2/assignments/copywriting-platform-supabase/',
      title: 'Stage 2 大作业：全栈应用实战',
      description: '把前端能力升级为前后端一体化的可上线应用。',
      icon: '💻'
    }
  ],
  'zh-cn/stage-2/backend/database-supabase': [
    {
      href: '/zh-cn/stage-2/backend/ai-interface-code/',
      title: '后端2：大模型辅助接口开发',
      description: '把 AI 能力规范地接入后端接口，提升工程可维护性。',
      icon: '🔌'
    },
    {
      href: '/zh-cn/stage-2/backend/git-workflow/',
      title: '后端3：Git 与 GitHub 入门',
      description: '代码版本管理是协作与自动化部署的基础。',
      icon: '📚'
    },
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：一键 PaaS 部署',
      description: '把数据库 + 后端一起发布上线，形成真实可用的服务。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/assignments/copywriting-platform-supabase/',
      title: 'Stage 2 大作业：全栈应用实战',
      description: '直接用 Supabase 搭建 AI 营销文案 SaaS 平台。',
      icon: '💻'
    }
  ],
  'zh-cn/stage-2/backend/ai-interface-code': [
    {
      href: '/zh-cn/stage-2/backend/git-workflow/',
      title: '后端3：Git 与 GitHub 入门',
      description: '用版本管理把接口代码安全保存，学会协作流程。',
      icon: '📚'
    },
    {
      href: '/zh-cn/stage-2/backend/database-supabase/',
      title: '后端1：数据库与 Supabase 入门',
      description: '把接口和数据库打通，形成完整的后端链路。',
      icon: '🗄️'
    },
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：一键 PaaS 部署',
      description: '把后端接口真正部署上线，形成可公开访问的服务。',
      icon: '🚀'
    }
  ],
  'zh-cn/stage-2/backend/git-workflow': [
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：一键 PaaS 部署',
      description: '学好 Git 就能连仓库自动部署，体验 CI/CD 自动化流程。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/backend/cloud-server-deployment/',
      title: '把网站发到网上（进阶方式）：自己买 VPS 架站',
      description: '买台云服务器，从系统到 Nginx/Docker 手动搭一遍完整链路。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/backend/modern-cli/',
      title: 'CLI Coding Agent 编程助手',
      description: '用命令行 AI Agent 直接在服务器上执行部署与运维操作。',
      icon: '⌨️'
    }
  ],
  'zh-cn/stage-2/backend/zeabur-deployment': [
    {
      href: '/zh-cn/stage-2/backend/cloud-server-deployment/',
      title: '把网站发到网上（进阶方式）：自己买 VPS 架站',
      description: '买台云服务器，从系统到 Nginx/Docker 手动搭一遍完整链路。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/backend/git-workflow/',
      title: '后端3：Git 与 GitHub 入门',
      description: '学会版本管理，让部署从「手动上传」变成「连仓库自动发布」。',
      icon: '📚'
    },
    {
      href: '/zh-cn/stage-2/backend/stripe-payment/',
      title: 'Stripe 支付集成',
      description: '网站上线后，学会接入全球主流支付方式，打通商业化闭环。',
      icon: '💳'
    }
  ],
  'zh-cn/stage-2/backend/modern-cli': [
    {
      href: '/zh-cn/stage-2/backend/cloud-server-deployment/',
      title: '把网站发到网上（进阶方式）：自己买 VPS 架站',
      description: 'CLI Agent 的最佳场景——直接在服务器上执行部署与运维操作。',
      icon: '💻'
    },
    {
      href: '/zh-cn/stage-2/backend/git-workflow/',
      title: '后端3：Git 与 GitHub 入门',
      description: 'CLI 工具与 Git 命令天然配合，让协作效率更上一层。',
      icon: '📚'
    },
    {
      href: '/zh-cn/stage-2/assignments/copywriting-platform-supabase/',
      title: 'Stage 2 大作业：全栈应用实战',
      description: '把 CLI + 部署 + 后端能力串起来，真正做成可上线的全栈应用。',
      icon: '💻'
    }
  ],
  'zh-cn/stage-2/backend/stripe-payment': [
    {
      href: '/zh-cn/stage-2/backend/zeabur-deployment/',
      title: '把网站发到网上（简单方式）：一键 PaaS 部署',
      description: '支付模块需要公网可访问，先确保网站正确发布。',
      icon: '🚀'
    },
    {
      href: '/zh-cn/stage-2/backend/database-supabase/',
      title: '后端1：数据库与 Supabase 入门',
      description: '订单、订阅、用户账单都需要数据库，先把数据层打牢。',
      icon: '🗄️'
    },
    {
      href: '/zh-cn/stage-2/assignments/copywriting-platform-supabase/',
      title: 'Stage 2 大作业：全栈应用实战',
      description: '把支付能力接入营销文案 SaaS 平台，完成商业化闭环。',
      icon: '💻'
    }
  ]
}

const supportedLocales = [
  'zh-cn',
  'en',
  'zh-tw',
  'ja-jp',
  'ko-kr',
  'es-es',
  'fr-fr',
  'de-de',
  'ar-sa',
  'vi-vn'
]

const getLocaleFromKey = (key) =>
  supportedLocales.find((locale) => key.startsWith(`${locale}/`))

const getArticleSlug = (href) =>
  href
    .replace(/^\/zh-cn\//, '')
    .replace(/\/$/, '')
    .split('/')
    .at(-1)

const localizedArticleText = {
  en: {
    'ai-capabilities-through-games': {
      title: 'Beginner 1: Speak to Code in the AI Era',
      description:
        'Start with a mini game to get hands-on with AI coding, and quickly understand what problems are suitable for AI.'
    },
    'finding-great-idea': {
      title: 'Beginner 3: Find Great Ideas',
      description:
        'Move from "I have an idea" to "the right direction" — learn how to discover real user needs and find a product direction people are willing to pay for.'
    },
    'building-prototype': {
      title: 'Beginner 4: Build an Interactive Prototype',
      description:
        'From requirement breakdown to page implementation — learn how to generate multi-page apps with an AI IDE and ship your first interactive Demo fast.'
    },
    'lovart-assets': {
      title: 'Frontend 1: NanoBanana Asset Production Agent',
      description:
        'Batch-generate design assets with text-to-image / image-to-image and build a reusable production pipeline.'
    },
    'introduction-to-ai-ide': {
      title: 'Beginner 2: Master AI Coding Tools',
      description:
        'Level up from browser playground to a local AI IDE (Trae). Set up a full development environment and learn how to chat with AI productively.'
    },
    'learning-map': {
      title: 'Back to the Learning Map',
      description:
        'Review the full path, stage goals, and recommended learning order.'
    },
    'integrating-ai-capabilities': {
      title: 'Beginner 5: Add AI Capabilities to Your Prototype',
      description:
        'Integrate real APIs (text models, image generation). Turn your prototype from "view-only" into "truly usable", and learn model selection & debugging.'
    },
    'appendix-b-common-errors': {
      title: 'Appendix: Common Errors and Fixes',
      description:
        'Quickly diagnose and fix environment, dependency, and runtime issues.'
    },
    'complete-project-practice': {
      title: 'Beginner 6: Full Project Practice',
      description:
        'Fill in the gaps: data persistence, interactions, error handling. Ship a complete, showcase-ready AI product prototype.'
    },
    'figma-mastergo': {
      title: 'Frontend 3: Figma and MasterGo Basics',
      description:
        'Put AI-generated assets into design drafts and build structured expressions from visuals to layouts.'
    },
    'ai-interface-code': {
      title: 'Junior Backend: API Design and Development',
      description:
        'Connect AI capabilities through maintainable backend interfaces.'
    },
    'fullstack-app': {
      title: 'Stage 2 Assignment: Full-Stack App',
      description:
        'Upgrade prototype skills into a deployable full-stack application.'
    },
    'database-supabase': {
      title: 'Junior Backend: Database to Supabase',
      description: 'Add data modeling, storage, and permission capabilities.'
    },
    'ui-design': {
      title: 'Frontend 2: Intro to AI Design',
      description:
        'Complete Logo, icons and full webpage UI with AI design, mastering prompt engineering and consistency techniques.'
    },
    'design-to-code': {
      title: 'Frontend 6: From Design Prototype to Code',
      description:
        'Accurately turn design files into maintainable frontend code and component structures.'
    },
    'modern-component-library': {
      title: 'Frontend 7: Modern Component Libraries & UI Upgrade',
      description:
        'Use component libraries to improve engineering efficiency and UI consistency.'
    },
    'zeabur-deployment': {
      title: 'Put Your Website Online (Easy): One-Click PaaS',
      description:
        'The easiest way to publish a site — connect your repo, click to deploy, no server needed.'
    },
    'cloud-server-deployment': {
      title: 'Put Your Website Online (Advanced): Set Up Your Own VPS',
      description:
        'Buy a VPS, set up Nginx/Docker/HTTPS from scratch — full control over your services.'
    },
    'multi-product-ui': {
      title: 'Frontend 4: UI Design System & Multi-Product Interfaces',
      description:
        'Build a unified design system and component spec, scaling from single pages to multi-product layouts.'
    },
    'llm-skills-beautiful': {
      title: 'Frontend 5: Beautify UIs with LLM Skills',
      description:
        'Package design systems as Skills so AI can auto-load brand guidelines and beautify pages.'
    },
    'git-workflow': {
      title: 'Backend 3: Intro to Git & GitHub',
      description:
        'Code version control is the foundation of collaboration and automated deployment.'
    },
    'modern-cli': {
      title: 'CLI Coding Agent Assistant',
      description:
        'Use terminal-based AI Agents to run deployment and ops commands directly on servers.'
    },
    'stripe-payment': {
      title: 'Stripe Payment Integration',
      description:
        'After the site goes live, learn to integrate global mainstream payment methods and close the monetization loop.'
    }
  },
  'zh-tw': {
    'ai-capabilities-through-games': {
      title: '初級一：AI 時代，會說話就會編程',
      description:
        '先用小遊戲感受 AI 編程，快速建立手感，理解「什麼問題適合交給 AI」。'
    },
    'finding-great-idea': {
      title: '初級三：找到好點子',
      description:
        '從「我有想法」走向「做對方向」，學會挖掘真實用戶需求，找到有人願意買單的產品方向。'
    },
    'building-prototype': {
      title: '初級四：動手做出原型',
      description:
        '從需求拆解到頁面落地，學會用 AI IDE 生成多頁面應用，快速完成第一版可交互 Demo。'
    },
    'lovart-assets': {
      title: '前端1：NanoBanana 素材生產 Agent',
      description: '用文生圖/圖生圖批次生成設計素材，並建立可複用的生產流程。'
    },
    'introduction-to-ai-ide': {
      title: '初級二：學會 AI 程式設計工具',
      description:
        '從網頁試玩升級到本地 AI IDE（Trae），建立完整開發環境，學會高效與 AI 對話。'
    },
    'learning-map': {
      title: '返回學習地圖',
      description: '按完整路線查看每個階段目標與推薦學習順序。'
    },
    'integrating-ai-capabilities': {
      title: '初級五：給原型加上 AI 能力',
      description:
        '接入真實 API（文本模型、文生圖），讓原型從「可看」變「可用」，學會模型選型與除錯。'
    },
    'appendix-b-common-errors': {
      title: '附錄：常見報錯與解決方案',
      description: '遇到環境、依賴或執行異常時，快速定位並修復。'
    },
    'complete-project-practice': {
      title: '初級六：完整專案實戰',
      description:
        '補齊資料、互動、異常處理，做出可展示、可互動的完整 AI 產品原型。'
    },
    'figma-mastergo': {
      title: '前端3：Figma 與 MasterGo 入門',
      description: '把素材放進設計稿，建立從視覺到佈局的結構化表達。'
    },
    'ai-interface-code': {
      title: '後端：API 介面設計與開發',
      description: '把 AI 能力規範地接入後端介面，提升工程可維護性。'
    },
    'fullstack-app': {
      title: 'Stage 2 大作業：全端應用實戰',
      description: '把原型能力升級為前後端一體化的可上線應用。'
    },
    'database-supabase': {
      title: '後端：從資料庫到 Supabase',
      description: '補齊資料建模、儲存與權限能力，邁向工程化開發。'
    },
    'ui-design': {
      title: '前端2：AI 設計入門',
      description:
        '借助 AI 設計能力完成 Logo、圖示與完整網頁 UI，掌握提示詞工程與一致性技巧。'
    },
    'design-to-code': {
      title: '前端6：設計原型到專案程式碼',
      description: '把設計稿準確轉成可維護的前端程式碼與元件結構。'
    },
    'modern-component-library': {
      title: '前端7：現代元件庫與介面升級',
      description: '利用元件庫做工程化提效，讓介面一致性更穩定。'
    },
    'zeabur-deployment': {
      title: '把網站發到網上（簡單方式）：一鍵 PaaS 部署',
      description: '最簡單的發站方式，連倉庫即上線，不用買伺服器也不用懂維運。'
    },
    'cloud-server-deployment': {
      title: '把網站發到網上（進階方式）：自己買 VPS 架站',
      description: '買 VPS，從零開始架設 Nginx/Docker/HTTPS，完全掌控你的服務。'
    },
    'multi-product-ui': {
      title: '前端4：UI 設計規範與多產品介面',
      description:
        '建立統一的設計系統與元件規範，完成從單個頁面到多產品線佈局。'
    },
    'llm-skills-beautiful': {
      title: '前端5：結合 Agent Skills 美化介面',
      description:
        '把設計系統封裝成 Skill，讓 AI 自動載入品牌規範完成頁面美化。'
    },
    'git-workflow': {
      title: '後端3：Git 與 GitHub 入門',
      description: '程式碼版本管理是協作與自動化部署的基礎。'
    },
    'modern-cli': {
      title: 'CLI Coding Agent 程式設計助手',
      description: '用命令列 AI Agent 直接在伺服器上執行部署與維運操作。'
    },
    'stripe-payment': {
      title: 'Stripe 金流整合',
      description: '網站上線後，學會接入全球主流支付方式，打通變現閉環。'
    }
  },
  'ja-jp': {
    'ai-capabilities-through-games': {
      title: '初級一：AI 時代、話せばコードが書ける',
      description:
        'まずはミニゲームで AI プログラミングに触れ、感覚をつかみ、「どんな問題が AI に向いているか」を素早く理解します。'
    },
    'finding-great-idea': {
      title: '初級三：良いアイデアを見つける',
      description:
        '「アイデアがある」から「正しい方向へ」へ。本当のユーザーニーズを掘り起こし、お金を払ってでも使いたいと思えるプロダクトの方向性を見つけます。'
    },
    'building-prototype': {
      title: '初級四：プロトタイプを作る',
      description:
        '要件分解から画面実装まで。AI IDE で複数ページのアプリを生成し、最初のインタラクティブな Demo を素早く完成させます。'
    },
    'lovart-assets': {
      title: '前端1：NanoBanana 素材生産 Agent',
      description:
        '文生図・図生図でデザイン素材を一括生成し、再利用可能な生産フローを構築します。'
    },
    'introduction-to-ai-ide': {
      title: '初級二：AI プログラミングツールを学ぶ',
      description:
        'Web 上のお試しからローカル AI IDE（Trae）へステップアップ。完全な開発環境を整え、AI と生産的に対話するコツを習得します。'
    },
    'learning-map': {
      title: '学習ロードマップに戻る',
      description: '全体ルート、各段階の目標、推奨学習順を確認します。'
    },
    'integrating-ai-capabilities': {
      title: '初級五：プロトタイプに AI 機能を追加する',
      description:
        '本物の API（テキストモデル・画像生成）を接続し、「見た目だけ」のプロトタイプを「実際に使える」ものに。モデル選定とデバッグも学びます。'
    },
    'appendix-b-common-errors': {
      title: '付録：よくあるエラーと解決策',
      description: '環境、依存関係、実行時の問題を素早く特定して修正します。'
    },
    'complete-project-practice': {
      title: '初級六：完全プロジェクト実践',
      description:
        'データの永続化・インタラクション・エラー処理を補強し、発表可能な完全な AI プロダクト原型を作り上げます。'
    },
    'figma-mastergo': {
      title: '前端3：Figma と MasterGo 入門',
      description:
        '素材をデザイン稿に落とし込み、ビジュアルからレイアウトまでの構造化された表現を構築します。'
    },
    'ui-design': {
      title: '前端2：AI デザイン入門',
      description:
        'AI デザイン機能でロゴ、アイコン、ウェブページ UI を完成させ、プロンプトエンジニアリングと一貫性のテクニックを習得します。'
    },
    'design-to-code': {
      title: '前端6：デザインプロトタイプからプロジェクトコードへ',
      description:
        'デザイン稿を正確に保守しやすいフロントエンドコードとコンポーネント構造に変換します。'
    },
    'modern-component-library': {
      title: '前端7：モダンコンポーネントライブラリと UI アップグレード',
      description:
        'コンポーネントライブラリでエンジニアリング効率を高め、UI の一貫性をより安定させます。'
    },
    'ai-interface-code': {
      title: '初中級バックエンド：API インターフェース設計と開発',
      description:
        'AI 機能を保守しやすいバックエンドインターフェースとして規則的に接続し、エンジニアリングの保守性を高めます。'
    },
    'fullstack-app': {
      title: 'Stage 2 大課題：フルスタックアプリ実践',
      description:
        'プロトタイプ能力をフロントエンド・バックエンド一体型のリリース可能なアプリケーションへアップグレードします。'
    },
    'database-supabase': {
      title: '初中級バックエンド：データベースから Supabase へ',
      description:
        'データモデリング、ストレージ、権限管理を補い、エンジニアリング開発へステップアップします。'
    },
    'zeabur-deployment': {
      title: 'サイトをネットに公開（簡単方式）：PaaS ワンクリックデプロイ',
      description:
        '最も簡単な公開方式。リポジトリを接続すれば即リリース。サーバーを買う必要も運用の知識も不要です。'
    },
    'cloud-server-deployment': {
      title: 'サイトをネットに公開（発展方式）：VPS で自前構築',
      description:
        'VPS を購入し、Nginx・Docker・HTTPS をゼロから構築。サービスを完全に自己管理します。'
    },
    'multi-product-ui': {
      title: '前端4：UI デザイン規範とマルチプロダクトインターフェース',
      description:
        '統一されたデザインシステムとコンポーネント規範を構築し、単一ページからマルチプロダクトレイアウトへ展開します。'
    },
    'llm-skills-beautiful': {
      title: '前端5：Agent Skills を活用した UI 美化',
      description:
        'デザインシステムを Skill としてパッケージ化し、AI がブランド規範を自動的にロードしてページを美化できるようにします。'
    },
    'git-workflow': {
      title: 'バックエンド3：Git と GitHub 入門',
      description:
        'コードのバージョン管理は、チーム協働と自動デプロイの基礎です。'
    },
    'modern-cli': {
      title: 'CLI Coding Agent プログラミングアシスタント',
      description:
        'ターミナルベースの AI エージェントで、サーバー上で直接デプロイや運用コマンドを実行します。'
    },
    'stripe-payment': {
      title: 'Stripe 決済連携',
      description:
        'サイト公開後、世界の主流決済方式を接続して収益化のループを完成させます。'
    }
  },
  'ko-kr': {
    'ai-capabilities-through-games': {
      title: '초급 1: AI 시대, 말만 하면 코딩이 된다',
      description:
        '먼저 미니게임으로 AI 코딩을 체험하며 감각을 익히고, 어떤 문제를 AI에 맡기면 좋은지 빠르게 이해합니다.'
    },
    'finding-great-idea': {
      title: '초급 3: 좋은 아이디어 찾기',
      description:
        '"아이디어가 있다"에서 "올바른 방향 찾기"로. 진짜 사용자 니즈를 발굴하고, 사람들이 기꺼이 돈을 내고 쓸 제품 방향을 찾습니다.'
    },
    'building-prototype': {
      title: '초급 4: 인터랙티브 프로토타입 만들기',
      description:
        '요구사항 분해부터 화면 구현까지. AI IDE로 다중 페이지 앱을 생성하고 첫 인터랙티브 Demo를 빠르게 완성합니다.'
    },
    'lovart-assets': {
      title: '프론트엔드 1: NanoBanana 소재 생산 Agent',
      description:
        '텍스트 투 이미지·이미지 투 이미지로 디자인 소재를 일괄 생성하고, 재사용 가능한 생산 흐름을 구축합니다.'
    },
    'introduction-to-ai-ide': {
      title: '초급 2: AI 코딩 도구 익히기',
      description:
        '웹에서의 가벼운 체험에서 로컬 AI IDE(Trae)로 업그레이드. 완전한 개발 환경을 구축하고 AI와 생산적으로 대화하는 법을 배웁니다.'
    },
    'learning-map': {
      title: '학습 지도 돌아가기',
      description: '전체 경로, 단계별 목표, 추천 학습 순서를 확인합니다.'
    },
    'integrating-ai-capabilities': {
      title: '초급 5: 프로토타입에 AI 기능 추가하기',
      description:
        '실제 API(텍스트 모델, 이미지 생성)를 연결해 "보여주기만 하는" 프로토타입을 "실제 쓸 수 있는" 앱으로. 모델 선택과 디버깅도 배웁니다.'
    },
    'appendix-b-common-errors': {
      title: '부록: 자주 만나는 오류와 해결책',
      description: '환경, 의존성, 실행 오류를 빠르게 찾고 고칩니다.'
    },
    'complete-project-practice': {
      title: '초급 6: 완성 프로젝트 실습',
      description:
        '데이터 영속화, 인터랙션, 예외 처리를 보강해 발표 가능한 완전한 AI 제품 프로토타입을 만듭니다.'
    },
    'figma-mastergo': {
      title: '프론트엔드 3: Figma와 MasterGo 입문',
      description:
        'AI 생성 소재를 디자인 시안에 넣고, 비주얼부터 레이아웃까지의 구조화된 표현을 구축합니다.'
    },
    'ui-design': {
      title: '프론트엔드 2: AI 디자인 입문',
      description:
        'AI 디자인 기능으로 로고, 아이콘, 웹페이지 UI를 완성하고, 프롬프트 엔지니어링과 일관성 테크닉을 익힙니다.'
    },
    'design-to-code': {
      title: '프론트엔드 6: 디자인 프로토타입에서 프로젝트 코드로',
      description:
        '디자인 시안을 정확하게 유지보수 가능한 프런트엔드 코드와 컴포넌트 구조로 변환합니다.'
    },
    'modern-component-library': {
      title: '프론트엔드 7: 모던 컴포넌트 라이브러리와 UI 개선',
      description:
        '컴포넌트 라이브러리로 엔지니어링 효율을 높이고, UI 일관성을 더 안정적으로 유지합니다.'
    },
    'ai-interface-code': {
      title: '초중급 백엔드: API 인터페이스 설계와 개발',
      description:
        'AI 기능을 유지보수 가능한 백엔드 인터페이스로 규칙적으로 연결해 엔지니어링 유지보수성을 높입니다.'
    },
    'fullstack-app': {
      title: 'Stage 2 대과제: 풀스택 앱 실전',
      description:
        '프로토타입 역량을 프런트엔드·백엔드 일체형의 배포 가능한 애플리케이션으로 업그레이드합니다.'
    },
    'database-supabase': {
      title: '초중급 백엔드: 데이터베이스에서 Supabase까지',
      description:
        '데이터 모델링, 스토리지, 권한 관리를 보강해 엔지니어링 개발로 나아갑니다.'
    },
    'zeabur-deployment': {
      title: '사이트를 온라인에 공개(쉬운 방식): PaaS 원클릭 배포',
      description:
        '가장 쉬운 공개 방식. 리포지토리만 연결하면 바로 릴리스. 서버를 살 필요도 운영 지식도 필요 없습니다.'
    },
    'cloud-server-deployment': {
      title: '사이트를 온라인에 공개(심화 방식): VPS로 직접 구축',
      description:
        'VPS를 구매하고 Nginx·Docker·HTTPS를 제로부터 구축. 서비스를 완전히 자체 관리합니다.'
    },
    'multi-product-ui': {
      title: '프론트엔드 4: UI 디자인 규범과 멀티 제품 인터페이스',
      description:
        '통일된 디자인 시스템과 컴포넌트 규범을 구축하고, 단일 페이지에서 멀티 제품 레이아웃으로 확장합니다.'
    },
    'llm-skills-beautiful': {
      title: '프론트엔드 5: Agent Skills로 인터페이스 미화하기',
      description:
        '디자인 시스템을 Skill로 패키지화해, AI가 브랜드 규범을 자동으로 로드하고 페이지를 미화할 수 있게 합니다.'
    },
    'git-workflow': {
      title: '백엔드 3: Git & GitHub 입문',
      description: '코드 버전 관리는 협업과 자동 배포의 기초입니다.'
    },
    'modern-cli': {
      title: 'CLI Coding Agent 프로그래밍 어시스턴트',
      description:
        '터미널 기반 AI 에이전트로 서버에서 직접 배포와 운영 명령을 실행합니다.'
    },
    'stripe-payment': {
      title: 'Stripe 결제 연동',
      description:
        '사이트 출시 후 글로벌 주요 결제 수단을 연결하고 수익화 루프를 완성합니다.'
    }
  },
  'es-es': {
    'ai-capabilities-through-games': {
      title: 'Nivel inicial 1: Era de la IA, si puedes hablar puedes programar',
      description:
        'Empieza con un minijuego para experimentar la programación con IA, desarrolla intuición y entiende rápidamente qué problemas encajan bien con la IA.'
    },
    'finding-great-idea': {
      title: 'Nivel inicial 3: Encontrar buenas ideas',
      description:
        'Pasa de "tengo una idea" a "encontrar la dirección correcta". Aprende a descubrir necesidades reales de los usuarios y una dirección de producto por la que la gente estaría dispuesta a pagar.'
    },
    'building-prototype': {
      title: 'Nivel inicial 4: Crear un prototipo interactivo',
      description:
        'Desde el desglose de requisitos hasta la implementación de páginas. Aprende a generar apps multipágina con un AI IDE y a publicar rápidamente tu primera Demo interactiva.'
    },
    'lovart-assets': {
      title: 'Frontend 1: NanoBanana Agente de Producción de Recursos',
      description:
        'Genera recursos de diseño por lotes con texto a imagen / imagen a imagen y construye un flujo de producción reutilizable.'
    },
    'introduction-to-ai-ide': {
      title: 'Nivel inicial 2: Dominar las herramientas de programación con IA',
      description:
        'Pasa de las pruebas en el navegador a un AI IDE local (Trae). Configura un entorno de desarrollo completo y aprende a conversar de forma productiva con la IA.'
    },
    'learning-map': {
      title: 'Volver a la ruta de aprendizaje',
      description:
        'Revisa la ruta completa, los objetivos por etapa y el orden recomendado.'
    },
    'integrating-ai-capabilities': {
      title: 'Nivel inicial 5: Añadir capacidades de IA al prototipo',
      description:
        'Conecta APIs reales (modelos de texto, generación de imágenes). Convierte tu prototipo de "solo visual" a "realmente utilizable", y aprende la selección y depuración de modelos.'
    },
    'appendix-b-common-errors': {
      title: 'Apéndice: errores comunes y soluciones',
      description:
        'Diagnostica y corrige problemas de entorno, dependencias y ejecución.'
    },
    'complete-project-practice': {
      title: 'Nivel inicial 6: Práctica de proyecto completo',
      description:
        'Completa la persistencia de datos, las interacciones y el manejo de errores. Crea un prototipo de producto de IA completo y listo para presentar.'
    },
    'figma-mastergo': {
      title: 'Frontend 3: Introducción a Figma y MasterGo',
      description:
        'Coloca los recursos generados por IA en los diseños y construye expresiones estructuradas desde lo visual hasta los layouts.'
    },
    'ui-design': {
      title: 'Frontend 2: Introducción al Diseño con IA',
      description:
        'Completa Logotipos, iconos e interfaces web completas con diseño de IA, dominando la ingeniería de prompts y las técnicas de consistencia.'
    },
    'ai-interface-code': {
      title: 'Backend Junior: Diseño y Desarrollo de APIs',
      description:
        'Conecta capacidades de IA mediante interfaces backend mantenibles.'
    },
    'fullstack-app': {
      title: 'Tarea Stage 2: Aplicación Full-Stack',
      description:
        'Convierte las habilidades de prototipado en una aplicación desplegable full-stack.'
    },
    'database-supabase': {
      title: 'Backend Junior: De Base de Datos a Supabase',
      description:
        'Completa el modelado de datos, almacenamiento y capacidades de permisos.'
    },
    'zeabur-deployment': {
      title: 'Poner tu Sitio Web en Línea (Fácil): Despliegue PaaS con un Clic',
      description:
        'La forma más sencilla de publicar un sitio — conecta tu repositorio, haz clic para desplegar, no necesitas servidor.'
    },
    'cloud-server-deployment': {
      title: 'Poner tu Sitio Web en Línea (Avanzado): Configurar tu Propio VPS',
      description:
        'Compra un VPS, configura Nginx/Docker/HTTPS desde cero — control total sobre tus servicios.'
    },
    'multi-product-ui': {
      title: 'Frontend 4: Sistema de Diseño UI e Interfaces Multi-Producto',
      description:
        'Construye un sistema de diseño y especificación de componentes unificados, escalando de páginas individuales a layouts multi-producto.'
    },
    'llm-skills-beautiful': {
      title: 'Frontend 5: Embellecer Interfaces con Habilidades LLM',
      description:
        'Empaqueta sistemas de diseño como Skills para que la IA cargue automáticamente las directrices de marca y embellezca las páginas.'
    },
    'git-workflow': {
      title: 'Backend 3: Introducción a Git y GitHub',
      description:
        'El control de versiones es la base de la colaboración y el despliegue automatizado.'
    },
    'modern-cli': {
      title: 'Asistente CLI Coding Agent',
      description:
        'Usa agentes de IA basados en terminal para ejecutar despliegues y operaciones directamente en servidores.'
    },
    'stripe-payment': {
      title: 'Integración de pagos Stripe',
      description:
        'Cuando el sitio esté online, integra métodos de pago globales populares para cerrar el ciclo de monetización.'
    }
  },
  'fr-fr': {
    'ai-capabilities-through-games': {
      title: 'Débutant 1 : À l’ère de l’IA, parler c’est coder',
      description:
        "Commence par un mini-jeu pour découvrir la programmation IA, prendre rapidement en main et comprendre quels problèmes conviennent à l'IA."
    },
    'finding-great-idea': {
      title: 'Débutant 3 : Trouver de bonnes idées',
      description:
        'Passe de « j’ai une idée » à « la bonne direction ». Apprends à identifier les vrais besoins utilisateurs et une orientation produit pour laquelle les gens acceptent de payer.'
    },
    'building-prototype': {
      title: 'Débutant 4 : Créer un prototype interactif',
      description:
        'Du découpage des besoins à la mise en page. Apprends à générer des apps multi-pages avec un AI IDE et à sortir vite une première Demo interactive.'
    },
    'lovart-assets': {
      title: 'Frontend 1 : Agent de Production de Ressources NanoBanana',
      description:
        'Générez des ressources de design par lots avec texte vers image / image vers image et construisez un flux de production réutilisable.'
    },
    'introduction-to-ai-ide': {
      title: 'Débutant 2 : Maîtriser les outils de programmation IA',
      description:
        "Passe des tests dans le navigateur à un AI IDE local (Trae). Configure un environnement de développement complet et apprends à dialoguer efficacement avec l'IA."
    },
    'learning-map': {
      title: "Retour au parcours d'apprentissage",
      description:
        'Revois le parcours complet, les objectifs par étape et l’ordre recommandé.'
    },
    'integrating-ai-capabilities': {
      title: 'Débutant 5 : Ajouter des capacités IA au prototype',
      description:
        "Connecte de vraies APIs (modèles texte, génération d'images). Passe ton prototype de « simple affichage » à « vraiment utilisable », et apprends la sélection et le débogage de modèles."
    },
    'appendix-b-common-errors': {
      title: 'Annexe : erreurs courantes et solutions',
      description:
        "Diagnostique et corrige vite les problèmes d'environnement, de dépendances et d'exécution."
    },
    'complete-project-practice': {
      title: 'Débutant 6 : Projet complet de A à Z',
      description:
        'Complète la persistance des données, les interactions et la gestion des erreurs. Livre un prototype de produit IA complet et prêt à être présenté.'
    },
    'figma-mastergo': {
      title: 'Frontend 3 : Bases de Figma et MasterGo',
      description:
        'Placez les ressources générées par IA dans les maquettes et construisez des expressions structurées du visuel aux mises en page.'
    },
    'ui-design': {
      title: 'Frontend 2 : Introduction au Design IA',
      description:
        "Réalisez des logos, icônes et interfaces web complètes avec le design IA, en maîtrisant l'ingénierie de prompts et les techniques de cohérence."
    },
    'ai-interface-code': {
      title: 'Backend Junior : Conception et Développement d’API',
      description:
        'Intégrez les capacités IA via des interfaces backend maintenables.'
    },
    'fullstack-app': {
      title: 'Devoir Stage 2 : Application Full-Stack',
      description:
        'Transformez les compétences de prototypage en application full-stack déployable.'
    },
    'database-supabase': {
      title: 'Backend Junior : de la Base de Données à Supabase',
      description:
        'Ajoutez la modélisation de données, le stockage et les capacités de permissions.'
    },
    'zeabur-deployment': {
      title: 'Mettre son Site en Ligne (Facile) : Déploiement PaaS en un Clic',
      description:
        'La façon la plus simple de publier un site — connectez votre dépôt, cliquez pour déployer, aucun serveur nécessaire.'
    },
    'cloud-server-deployment': {
      title: 'Mettre son Site en Ligne (Avancé) : Configurer son Propre VPS',
      description:
        'Achetez un VPS, configurez Nginx/Docker/HTTPS depuis zéro — contrôle total sur vos services.'
    },
    'multi-product-ui': {
      title: 'Frontend 4 : Système de Design UI et Interfaces Multi-Produits',
      description:
        'Construisez un système de design et des spécifications de composants unifiés, passant de pages individuelles à des mises en page multi-produits.'
    },
    'llm-skills-beautiful': {
      title: 'Frontend 5 : Embellir les Interfaces avec les Compétences LLM',
      description:
        "Packagez les systèmes de design en Skills pour que l'IA charge automatiquement les directives de marque et embellisse les pages."
    },
    'git-workflow': {
      title: 'Backend 3 : Initiation à Git et GitHub',
      description:
        'Le gestionnaire de versions est la base de la collaboration et du déploiement automatisé.'
    },
    'modern-cli': {
      title: 'Assistant CLI Coding Agent',
      description:
        'Utilisez des Agents IA basés sur un terminal pour exécuter déploiements et opérations directement sur les serveurs.'
    },
    'stripe-payment': {
      title: 'Intégration de paiement Stripe',
      description:
        'Une fois le site en ligne, intégrez les paiements mondiaux pour boucler la boucle de monétisation.'
    }
  },
  'de-de': {
    'ai-capabilities-through-games': {
      title: 'Anfänger 1: KI-Zeitalter – Reden reicht zum Codieren',
      description:
        'Fang mit einem Mini-Game an, um KI-Programmierung auszuprobieren, schnell ein Gefühl dafür zu entwickeln und zu verstehen, welche Probleme gut zur KI passen.'
    },
    'finding-great-idea': {
      title: 'Anfänger 3: Gute Ideen finden',
      description:
        'Geh von "ich habe eine Idee" zu "die richtige Richtung". Lerne echte Nutzerbedürfnisse aufzudecken und eine Produktrichtung zu finden, für die Menschen gerne zahlen.'
    },
    'building-prototype': {
      title: 'Anfänger 4: Interaktiven Prototyp bauen',
      description:
        'Vom Anforderungszuschnitt bis zur Seitenimplementierung. Lerne mit einer AI IDE mehrseitige Apps zu generieren und die erste interaktive Demo schnell fertigzustellen.'
    },
    'lovart-assets': {
      title: 'Frontend 1: NanoBanana Asset-Produktionsagent',
      description:
        'Generieren Sie Design-Assets stapelweise mit Text-to-Image / Image-to-Image und bauen Sie einen wiederverwendbaren Produktionsprozess auf.'
    },
    'introduction-to-ai-ide': {
      title: 'Anfänger 2: KI-Programmierwerkzeuge beherrschen',
      description:
        'Upgrade von Browser-Spielereien zu einer lokalen AI IDE (Trae). Richte eine vollständige Entwicklungsumgebung ein und lerne produktiv mit der KI zu chatten.'
    },
    'learning-map': {
      title: 'Zurück zum Lernpfad',
      description:
        'Prüfen Sie den Gesamtpfad, die Etappenziele und die empfohlene Reihenfolge.'
    },
    'integrating-ai-capabilities': {
      title: 'Anfänger 5: KI-Fähigkeiten in den Prototyp einbauen',
      description:
        'Binde echte APIs an (Textmodelle, Bildgenerierung). Mach deinen Prototypen von "nur ansehbar" zu "wirklich nutzbar" und lerne Modellauswahl & Debugging.'
    },
    'appendix-b-common-errors': {
      title: 'Anhang: häufige Fehler und Lösungen',
      description:
        'Finden und beheben Sie Umgebungs-, Abhängigkeits- und Laufzeitprobleme schnell.'
    },
    'complete-project-practice': {
      title: 'Anfänger 6: Vollständige Projektpraxis',
      description:
        'Ergänze Datenpersistenz, Interaktionen und Fehlerbehandlung. Erstelle einen kompletten, präsentationsreifen KI-Produktprototyp.'
    },
    'figma-mastergo': {
      title: 'Frontend 3: Figma und MasterGo Grundlagen',
      description:
        'Fügen Sie KI-generierte Assets in Designentwürfe ein und erstellen Sie strukturierte Ausdrücke von Visuals bis zu Layouts.'
    },
    'zeabur-deployment': {
      title: 'Website online stellen (einfach): One-Click PaaS',
      description:
        'Der einfachste Weg, eine Website zu veröffentlichen – Repo verbinden, klicken und deployen, kein Server nötig.'
    },
    'cloud-server-deployment': {
      title: 'Website online stellen (fortgeschritten): Eigenen VPS einrichten',
      description:
        'Kaufen Sie einen VPS, richten Sie Nginx/Docker/HTTPS von Grund auf ein – volle Kontrolle über Ihre Dienste.'
    },
    'multi-product-ui': {
      title: 'Frontend 4: UI-Designsystem & Multi-Produkt-Oberflächen',
      description:
        'Erstellen Sie ein einheitliches Designsystem und Komponentenspezifikation, skalieren Sie von einzelnen Seiten zu Multi-Produkt-Layouts.'
    },
    'llm-skills-beautiful': {
      title: 'Frontend 5: Oberflächen mit LLM-Skills verschönern',
      description:
        'Verpacken Sie Designsysteme als Skills, damit KI Markenrichtlinien automatisch lädt und Seiten verschönert.'
    },
    'git-workflow': {
      title: 'Backend 3: Einführung in Git und GitHub',
      description:
        'Versionsverwaltung ist die Grundlage für Zusammenarbeit und automatisierte Bereitstellung.'
    },
    'modern-cli': {
      title: 'CLI Coding Agent Assistent',
      description:
        'Nutze terminalbasierte KI-Agenten, um Deployments und Serveroperationen direkt auszuführen.'
    },
    'stripe-payment': {
      title: 'Stripe-Zahlungsintegration',
      description:
        'Nach dem Live-Gang der Seite integriere globale Zahlungsmethoden und schließe die Monetarisierungslücke.'
    }
  },
  'ar-sa': {
    'ai-capabilities-through-games': {
      title: 'المستوى الأول: عصر الذكاء الاصطناعي – الكلام كفيل بالبرمجة',
      description:
        'ابدأ بلعبة صغيرة لتجربة برمجة الذكاء الاصطناعي، واكسب إحساساً عملياً بسرعة، وافهم أي المشكلات تناسب الذكاء الاصطناعي.'
    },
    'finding-great-idea': {
      title: 'المستوى الثالث: إيجاد أفكار ممتازة',
      description:
        'انتقل من "لدي فكرة" إلى "الاتجاه الصحيح". تعلم كيفية كشف الاحتياجات الحقيقية للمستخدمين وإيجاد اتجاه منتج مستعد الناس لدفع ثمنه.'
    },
    'building-prototype': {
      title: 'المستوى الرابع: بناء نموذج أولي تفاعلي',
      description:
        'من تحليل المتطلبات إلى تنفيذ الصفحات. تعلم استخدام AI IDE لإنشاء تطبيقات متعددة الصفحات وإنجاز أول Demo تفاعلي بسرعة.'
    },
    'lovart-assets': {
      title: 'الواجهة الأمامية 1: وكيل إنتاج المواد NanoBanana',
      description:
        'أنشئ مواد التصميم بشكل مجمّع باستخدام النص إلى صورة / الصورة إلى صورة، وابنِ سير إنتاج قابل لإعادة الاستخدام.'
    },
    'introduction-to-ai-ide': {
      title: 'المستوى الثاني: إتقان أدوات البرمجة بالذكاء الاصطناعي',
      description:
        'انتقل من التجارب في المتصفح إلى AI IDE محلي (Trae). أنشئ بيئة تطوير كاملة وتعلم الحديث بشكل منتج مع الذكاء الاصطناعي.'
    },
    'learning-map': {
      title: 'العودة إلى خريطة التعلم',
      description: 'راجع المسار الكامل وأهداف كل مرحلة وترتيب التعلم المقترح.'
    },
    'integrating-ai-capabilities': {
      title: 'المستوى الخامس: إضافة قدرات الذكاء الاصطناعي إلى النموذج الأولي',
      description:
        'اربط واجهات API حقيقية (نماذج نصية، توليد صور). حوّل نموذجك من "مجرد عرض" إلى "قابل للاستخدام الفعلي"، وتعلم اختيار النماذج وتصحيح الأخطاء.'
    },
    'appendix-b-common-errors': {
      title: 'ملحق: الأخطاء الشائعة والحلول',
      description: 'شخّص مشكلات البيئة والاعتماديات والتشغيل وأصلحها بسرعة.'
    },
    'complete-project-practice': {
      title: 'المستوى السادس: مشروع عملي كامل',
      description:
        'أكمل استمرارية البيانات والتفاعلات ومعالجة الاستثناءات. أنشئ نموذجاً أولياً لمنتج ذكاء اصطناعي كاملاً وجاهزاً للعرض.'
    },
    'figma-mastergo': {
      title: 'الواجهة الأمامية 3: أساسيات Figma و MasterGo',
      description:
        'ضع المواد المولدة بالذكاء الاصطناعي في مسودات التصميم، وأنشئ تعبيرات منظمة من العناصر البصرية إلى التخطيطات.'
    },
    'zeabur-deployment': {
      title: 'ضع موقعك على الإنترنت (سهل): PaaS بنقرة واحدة',
      description:
        'أبسط طريقة لنشر الموقع – اربط مستودعك، وانقر للنشر، ولا حاجة لخادم.'
    },
    'cloud-server-deployment': {
      title: 'ضع موقعك على الإنترنت (متقدم): إعداد VPS خاص بك',
      description:
        'اشترِ VPS، وأعد ضبط Nginx/Docker/HTTPS من الصفر – تحكم كامل في خدماتك.'
    },
    'multi-product-ui': {
      title: 'الواجهة الأمامية 4: نظام تصميم الواجهة وواجهات المنتجات المتعددة',
      description:
        'أنشئ نظام تصميم ومواصفات مكونات موحدة، وتوسّع من صفحات منفردة إلى تخطيطات منتجات متعددة.'
    },
    'llm-skills-beautiful': {
      title: 'الواجهة الأمامية 5: تجميل الواجهات باستخدام مهارات LLM',
      description:
        'تغليف أنظمة التصميم كمهارات (Skills) ليقوم الذكاء الاصطناعي بتحميل إرشادات العلامة التجارية تلقائياً وتجميل الصفحات.'
    },
    'git-workflow': {
      title: 'الواجهة الخلفية 3: مقدمة إلى Git و GitHub',
      description: 'إدارة نسخ الكود هي أساس التعاون والنشر الآلي.'
    },
    'modern-cli': {
      title: 'مساعد البرمجة CLI Coding Agent',
      description:
        'استخدم وكلاء ذكاء اصطناعي قائمين على الطرفية لتنفيذ عمليات النشر والتشغيل مباشرة على الخوادم.'
    },
    'stripe-payment': {
      title: 'تكامل مدفوعات Stripe',
      description:
        'بعد إطلاق الموقع، تعلم كيفية ربط طرق الدفع العالمية الرائدة وإكمال حلقة التمويل.'
    }
  },
  'vi-vn': {
    'ai-capabilities-through-games': {
      title: 'Sơ cấp 1: Thời đại AI – nói là có code',
      description:
        'Bắt đầu với trò chơi nhỏ để trải nghiệm lập trình AI, nhanh chóng tạo cảm giác thực hành và hiểu vấn đề nào phù hợp để giao cho AI.'
    },
    'finding-great-idea': {
      title: 'Sơ cấp 3: Tìm ý tưởng hay',
      description:
        'Từ "tôi có ý tưởng" đến "đúng hướng". Học cách khám phá nhu cầu thật của người dùng và tìm ra hướng sản phẩm mà người dùng sẵn sàng chi trả.'
    },
    'building-prototype': {
      title: 'Sơ cấp 4: Làm nguyên mẫu tương tác',
      description:
        'Từ tách yêu cầu đến dựng trang. Học dùng AI IDE tạo ứng dụng nhiều trang và hoàn thành nhanh bản Demo tương tác đầu tiên.'
    },
    'lovart-assets': {
      title: 'Giao diện 1: NanoBanana Agent sản xuất tài nguyên',
      description:
        'Sinh tài nguyên thiết kế hàng loạt bằng văn bản sang ảnh / ảnh sang ảnh, và xây dựng quy trình sản xuất có thể tái sử dụng.'
    },
    'introduction-to-ai-ide': {
      title: 'Sơ cấp 2: học công cụ lập trình AI',
      description:
        'Nâng cấp từ thử nghiệm trên trình duyệt lên AI IDE cục bộ (Trae). Thiết lập môi trường phát triển đầy đủ và học cách đối thoại hiệu quả với AI.'
    },
    'learning-map': {
      title: 'Quay lại lộ trình học tập',
      description:
        'Xem lại toàn bộ lộ trình, mục tiêu từng giai đoạn và thứ tự học đề xuất.'
    },
    'integrating-ai-capabilities': {
      title: 'Sơ cấp 5: thêm năng lực AI vào nguyên mẫu',
      description:
        'Kết nối API thật (mô hình văn bản, sinh ảnh). Biến nguyên mẫu từ "chỉ xem được" thành "dùng được thật", và học cách lựa chọn mô hình & debug.'
    },
    'appendix-b-common-errors': {
      title: 'Phụ lục: lỗi thường gặp và cách xử lý',
      description:
        'Nhanh chóng xác định và sửa lỗi môi trường, phụ thuộc hoặc khi chạy.'
    },
    'complete-project-practice': {
      title: 'Sơ cấp 6: thực chiến dự án hoàn chỉnh',
      description:
        'Hoàn thiện lưu trữ dữ liệu, tương tác và xử lý ngoại lệ. Tạo ra một nguyên mẫu sản phẩm AI hoàn chỉnh, sẵn sàng để trình bày.'
    },
    'figma-mastergo': {
      title: 'Giao diện 3: nhập môn Figma và MasterGo',
      description:
        'Đặt tài nguyên sinh bởi AI vào bản thiết kế, xây dựng biểu diễn có cấu trúc từ hình ảnh đến bố cục.'
    },
    'zeabur-deployment': {
      title: 'Đưa website lên mạng (cách dễ): PaaS một cú nhấp',
      description:
        'Cách đăng tải website đơn giản nhất – kết nối repo, nhấp chuột là deploy, không cần mua máy chủ.'
    },
    'cloud-server-deployment': {
      title: 'Đưa website lên mạng (nâng cao): tự cài VPS riêng',
      description:
        'Mua VPS, cài đặt Nginx/Docker/HTTPS từ đầu – toàn quyền kiểm soát dịch vụ của bạn.'
    },
    'multi-product-ui': {
      title: 'Giao diện 4: hệ thống thiết kế UI & giao diện đa sản phẩm',
      description:
        'Xây dựng hệ thống thiết kế và quy cách component thống nhất, mở rộng từ trang đơn lẻ đến bố cục đa sản phẩm.'
    },
    'llm-skills-beautiful': {
      title: 'Giao diện 5: làm đẹp giao diện với LLM Skills',
      description:
        'Đóng gói hệ thống thiết kế thành Skills để AI tự động tải quy cách thương hiệu và làm đẹp trang.'
    },
    'git-workflow': {
      title: 'Back-end 3: Nhập môn Git và GitHub',
      description:
        'Quản lý phiên bản mã nguồn là nền tảng cho cộng tác và triển khai tự động.'
    },
    'modern-cli': {
      title: 'Trợ lý lập trình CLI Coding Agent',
      description:
        'Sử dụng các tác nhân AI dựa trên terminal để thực thi triển khai và vận hành trực tiếp trên máy chủ.'
    },
    'stripe-payment': {
      title: 'Tích hợp thanh toán Stripe',
      description:
        'Sau khi trang web lên mạng, học cách kết nối các phương thức thanh toán toàn cầu phổ biến và hoàn thành vòng thu tiền.'
    }
  }
}

const localizedStage2ArticleText = {
  en: {
    'ai-interface-code': {
      title: 'Junior Backend: API Design and Development',
      description:
        'Connect AI capabilities through maintainable backend interfaces.'
    },
    'fullstack-app': {
      title: 'Stage 2 Assignment: Full-Stack App',
      description:
        'Upgrade prototype skills into a deployable full-stack application.'
    },
    'database-supabase': {
      title: 'Junior Backend: Database to Supabase',
      description: 'Add data modeling, storage, and permission capabilities.'
    },
    'ui-design': {
      title: '2.2 Build a Modern App: UI Design',
      description:
        'Complete page hierarchy, components, and layout under a unified visual system.'
    },
    'design-to-code': {
      title: '2.6 From Design Prototype to Code',
      description:
        'Convert design files into maintainable frontend code and components.'
    },
    'modern-component-library': {
      title: '2.7 Upgrade UI with Modern Component Libraries',
      description:
        'Use component libraries to improve consistency and development speed.'
    }
  },
  'zh-tw': {
    'ai-interface-code': {
      title: '初中級：後端介面設計與開發',
      description: '把 AI 能力規範地接入後端介面，提升工程可維護性。'
    },
    'fullstack-app': {
      title: 'Stage 2 大作業：全端應用實戰',
      description: '把原型能力升級為前後端一體化的可上線應用。'
    },
    'database-supabase': {
      title: '初中級後端：從資料庫到 Supabase',
      description: '補齊資料建模、儲存與權限能力，邁向工程化開發。'
    },
    'ui-design': {
      title: '2.2 建構第一個現代應用程式 - UI 設計',
      description: '在統一視覺規範下，完成頁面層級、元件和版面設計。'
    },
    'design-to-code': {
      title: '2.6 從設計原型到專案程式碼',
      description: '把設計稿準確轉成可維護的前端程式碼與元件結構。'
    },
    'modern-component-library': {
      title: '2.7 使用現代元件庫更新你的介面',
      description: '利用元件庫提升工程效率，讓介面一致性更穩定。'
    }
  },
  'ja-jp': {
    'ai-interface-code': {
      title: '初中級バックエンド：API インターフェース設計と開発',
      description:
        'AI 機能を保守しやすいバックエンドインターフェースとして規則的に接続し、エンジニアリングの保守性を高めます。'
    },
    'fullstack-app': {
      title: 'Stage 2 大課題：フルスタックアプリ実践',
      description:
        'プロトタイプ能力をフロントエンド・バックエンド一体型のリリース可能なアプリケーションへアップグレードします。'
    },
    'database-supabase': {
      title: '初中級バックエンド：データベースから Supabase へ',
      description:
        'データモデリング、ストレージ、権限管理を補い、エンジニアリング開発へステップアップします。'
    },
    'ui-design': {
      title: '前端2：AI デザイン入門',
      description:
        'AI デザイン機能でロゴ、アイコン、ウェブページ UI を完成させ、プロンプトエンジニアリングと一貫性のテクニックを習得します。'
    },
    'design-to-code': {
      title: '前端6：デザインプロトタイプからプロジェクトコードへ',
      description:
        'デザイン稿を正確に保守しやすいフロントエンドコードとコンポーネント構造に変換します。'
    },
    'modern-component-library': {
      title: '前端7：モダンコンポーネントライブラリと UI アップグレード',
      description:
        'コンポーネントライブラリでエンジニアリング効率を高め、UI の一貫性をより安定させます。'
    },
    'zeabur-deployment': {
      title: 'サイトをネットに公開（簡単方式）：PaaS ワンクリックデプロイ',
      description:
        '最も簡単な公開方式。リポジトリを接続すれば即リリース。サーバーを買う必要も運用の知識も不要です。'
    },
    'cloud-server-deployment': {
      title: 'サイトをネットに公開（発展方式）：VPS で自前構築',
      description:
        'VPS を購入し、Nginx・Docker・HTTPS をゼロから構築。サービスを完全に自己管理します。'
    },
    'multi-product-ui': {
      title: '前端4：UI デザイン規範とマルチプロダクトインターフェース',
      description:
        '統一されたデザインシステムとコンポーネント規範を構築し、単一ページからマルチプロダクトレイアウトへ展開します。'
    },
    'llm-skills-beautiful': {
      title: '前端5：Agent Skills を活用した UI 美化',
      description:
        'デザインシステムを Skill としてパッケージ化し、AI がブランド規範を自動的にロードしてページを美化できるようにします。'
    }
  },
  'ko-kr': {
    'ai-interface-code': {
      title: '초중급 백엔드: API 인터페이스 설계와 개발',
      description:
        'AI 기능을 유지보수 가능한 백엔드 인터페이스로 규칙적으로 연결해 엔지니어링 유지보수성을 높입니다.'
    },
    'fullstack-app': {
      title: 'Stage 2 대과제: 풀스택 앱 실전',
      description:
        '프로토타입 역량을 프런트엔드·백엔드 일체형의 배포 가능한 애플리케이션으로 업그레이드합니다.'
    },
    'database-supabase': {
      title: '초중급 백엔드: 데이터베이스에서 Supabase까지',
      description:
        '데이터 모델링, 스토리지, 권한 관리를 보강해 엔지니어링 개발로 나아갑니다.'
    },
    'ui-design': {
      title: '프론트엔드 2: AI 디자인 입문',
      description:
        'AI 디자인 기능으로 로고, 아이콘, 웹페이지 UI를 완성하고, 프롬프트 엔지니어링과 일관성 테크닉을 익힙니다.'
    },
    'design-to-code': {
      title: '프론트엔드 6: 디자인 프로토타입에서 프로젝트 코드로',
      description:
        '디자인 시안을 정확하게 유지보수 가능한 프런트엔드 코드와 컴포넌트 구조로 변환합니다.'
    },
    'modern-component-library': {
      title: '프론트엔드 7: 모던 컴포넌트 라이브러리와 UI 개선',
      description:
        '컴포넌트 라이브러리로 엔지니어링 효율을 높이고, UI 일관성을 더 안정적으로 유지합니다.'
    },
    'zeabur-deployment': {
      title: '사이트를 온라인에 공개(쉬운 방식): PaaS 원클릭 배포',
      description:
        '가장 쉬운 공개 방식. 리포지토리만 연결하면 바로 릴리스. 서버를 살 필요도 운영 지식도 필요 없습니다.'
    },
    'cloud-server-deployment': {
      title: '사이트를 온라인에 공개(심화 방식): VPS로 직접 구축',
      description:
        'VPS를 구매하고 Nginx·Docker·HTTPS를 제로부터 구축. 서비스를 완전히 자체 관리합니다.'
    },
    'multi-product-ui': {
      title: '프론트엔드 4: UI 디자인 규범과 멀티 제품 인터페이스',
      description:
        '통일된 디자인 시스템과 컴포넌트 규범을 구축하고, 단일 페이지에서 멀티 제품 레이아웃으로 확장합니다.'
    },
    'llm-skills-beautiful': {
      title: '프론트엔드 5: Agent Skills로 인터페이스 미화하기',
      description:
        '디자인 시스템을 Skill로 패키지화해, AI가 브랜드 규범을 자동으로 로드하고 페이지를 미화할 수 있게 합니다.'
    }
  },
  'es-es': {
    'ai-interface-code': {
      title: 'Backend Junior: Diseño y Desarrollo de APIs',
      description:
        'Conecta capacidades de IA mediante interfaces backend mantenibles.'
    },
    'fullstack-app': {
      title: 'Tarea Stage 2: Aplicación Full-Stack',
      description:
        'Convierte las habilidades de prototipado en una aplicación desplegable full-stack.'
    },
    'database-supabase': {
      title: 'Backend Junior: De Base de Datos a Supabase',
      description:
        'Completa el modelado de datos, almacenamiento y capacidades de permisos.'
    },
    'ui-design': {
      title: 'Frontend 2: Introducción al Diseño con IA',
      description:
        'Completa Logotipos, iconos e interfaces web completas con diseño de IA, dominando la ingeniería de prompts y las técnicas de consistencia.'
    },
    'design-to-code': {
      title: 'Frontend 6: Del Prototipo de Diseño al Código',
      description:
        'Convierte con precisión los archivos de diseño en código frontend y estructuras de componentes mantenibles.'
    },
    'modern-component-library': {
      title:
        'Frontend 7: Librerías de Componentes Modernas y Actualización de UI',
      description:
        'Usa librerías de componentes para mejorar la eficiencia de ingeniería y la consistencia de la interfaz.'
    }
  },
  'fr-fr': {
    'ai-interface-code': {
      title: 'Backend Junior : Conception et Développement d’API',
      description:
        'Intégrez les capacités IA via des interfaces backend maintenables.'
    },
    'fullstack-app': {
      title: 'Devoir Stage 2 : Application Full-Stack',
      description:
        'Transformez les compétences de prototypage en application full-stack déployable.'
    },
    'database-supabase': {
      title: 'Backend Junior : de la Base de Données à Supabase',
      description:
        'Ajoutez la modélisation de données, le stockage et les capacités de permissions.'
    },
    'ui-design': {
      title: 'Frontend 2 : Introduction au Design IA',
      description:
        "Réalisez des logos, icônes et interfaces web complètes avec le design IA, en maîtrisant l'ingénierie de prompts et les techniques de cohérence."
    },
    'design-to-code': {
      title: 'Frontend 6 : Du Prototype de Design au Code',
      description:
        'Transformez avec précision les fichiers de design en code frontend et structures de composants maintenables.'
    },
    'modern-component-library': {
      title:
        'Frontend 7 : Bibliothèques de Composants Modernes et Mise à Niveau UI',
      description:
        "Utilisez des bibliothèques de composants pour améliorer l'efficacité d'ingénierie et la cohérence de l'interface."
    }
  },
  'de-de': {
    'ai-interface-code': {
      title: 'Junior Backend: API-Design und Entwicklung',
      description:
        'Binden Sie KI-Fähigkeiten über wartbare Backend-Schnittstellen ein.'
    },
    'fullstack-app': {
      title: 'Stage 2 Aufgabe: Full-Stack-App',
      description:
        'Entwickeln Sie Prototyping-Fähigkeiten zu einer deploybaren Anwendung weiter.'
    },
    'database-supabase': {
      title: 'Junior Backend: von Datenbank zu Supabase',
      description:
        'Ergänzen Sie Datenmodellierung, Speicherung und Berechtigungen.'
    },
    'ui-design': {
      title: 'Frontend 2: Einführung in KI-Design',
      description:
        'Erstellen Sie Logo, Icons und komplette Webseiten-UI mit KI-Design, und beherrschen Sie Prompt-Engineering sowie Konsistenztechniken.'
    },
    'design-to-code': {
      title: 'Frontend 6: vom Designprototyp zum Projektcode',
      description:
        'Überführen Sie Designvorlagen präzise in wartbaren Frontend-Code und Komponentenstrukturen.'
    },
    'modern-component-library': {
      title: 'Frontend 7: moderne Komponentenbibliotheken & UI-Upgrade',
      description:
        'Nutzen Sie Komponentenbibliotheken zur Steigerung der Engineering-Effizienz und UI-Konsistenz.'
    }
  },
  'ar-sa': {
    'ai-interface-code': {
      title: 'الخلفية للمستوى المتوسط: تصميم وتطوير الواجهات',
      description: 'اربط قدرات الذكاء الاصطناعي عبر واجهات خلفية قابلة للصيانة.'
    },
    'fullstack-app': {
      title: 'مهمة Stage 2: تطبيق Full-Stack',
      description: 'طوّر مهارات النمذجة إلى تطبيق كامل قابل للنشر.'
    },
    'database-supabase': {
      title: 'الخلفية للمستوى المتوسط: من قاعدة البيانات إلى Supabase',
      description: 'أكمل نمذجة البيانات والتخزين والصلاحيات.'
    },
    'ui-design': {
      title: 'الواجهة الأمامية 2: مقدمة في تصميم الذكاء الاصطناعي',
      description:
        'أنجز الشعارات والأيقونات وواجهة الويب الكاملة باستخدام تصميم الذكاء الاصطناعي، وأتقن هندسة الموجهات وتقنيات الاتساق.'
    },
    'design-to-code': {
      title: 'الواجهة الأمامية 6: من نموذج التصميم إلى كود المشروع',
      description:
        'حوّل قوالب التصميم بدقة إلى كود واجهة أمامية وهياكل مكونات قابلة للصيانة.'
    },
    'modern-component-library': {
      title: 'الواجهة الأمامية 7: مكتبات المكونات الحديثة وترقية الواجهة',
      description: 'استخدم مكتبات المكونات لتحسين كفاءة الهندسة واتساق الواجهة.'
    }
  },
  'vi-vn': {
    'ai-interface-code': {
      title: 'Backend sơ-trung cấp: thiết kế và phát triển API',
      description: 'Kết nối năng lực AI qua các API backend dễ bảo trì.'
    },
    'fullstack-app': {
      title: 'Bài tập Stage 2: ứng dụng full-stack',
      description:
        'Nâng kỹ năng nguyên mẫu thành ứng dụng full-stack có thể triển khai.'
    },
    'database-supabase': {
      title: 'Backend sơ-trung cấp: từ cơ sở dữ liệu đến Supabase',
      description: 'Bổ sung mô hình dữ liệu, lưu trữ và phân quyền.'
    },
    'ui-design': {
      title: 'Giao diện 2: nhập môn thiết kế AI',
      description:
        'Hoàn thiện Logo, icon và giao diện web đầy đủ bằng thiết kế AI, làm chủ kỹ thuật Prompt engineering và tính nhất quán.'
    },
    'design-to-code': {
      title: 'Giao diện 6: từ prototype thiết kế đến code dự án',
      description:
        'Chuyển bản mẫu thiết kế chính xác thành code frontend và cấu trúc component dễ bảo trì.'
    },
    'modern-component-library': {
      title: 'Giao diện 7: thư viện component hiện đại & nâng cấp giao diện',
      description:
        'Sử dụng thư viện component để tăng hiệu quả engineering và tính nhất quán giao diện.'
    }
  }
}

for (const locale of Object.keys(localizedStage2ArticleText)) {
  localizedArticleText[locale] = {
    ...localizedStage2ArticleText[locale],
    ...localizedArticleText[locale]
  }
}

const localizedStage1LearningMapOrder = [
  'ai-capabilities-through-games',
  'introduction-to-ai-ide',
  'clone-your-favorite-app',
  'appendix-idea-sources',
  'finding-great-idea',
  'appendix-double-diamond',
  'appendix-jobs-to-be-done',
  'appendix-mom-test',
  'building-prototype',
  'integrating-ai-capabilities',
  'complete-project-practice'
]

// Keep learning-map cards identical to each locale's Stage 1 sidebar labels.
// These overrides also remove the obsolete "Beginner 1–6" naming wherever a
// Stage 1 article is reused in a related-article card.
const localizedStage1LearningMapTitles = {
  en: [
    'First Programming Experience in the AI Era',
    'Introduction to AI Programming Tools',
    'Clone from Screenshots: First Imitation Practice',
    'Sources of Creative Inspiration',
    'How to Identify a Great Idea',
    'Double Diamond Design Model',
    'Jobs to Be Done Theory',
    'The Mom Test: User Interview Method',
    'Building Interactive Product Prototypes',
    'Integrating AI Capabilities into Prototypes',
    'Complete Project Practice: From Idea to Product'
  ],
  'zh-tw': [
    'AI 時代的程式設計初體驗',
    'AI 程式設計工具介紹與使用',
    '從截圖复刻：第一次模仿練習',
    '創意靈感的來源',
    '如何判斷一個好點子',
    '雙鑽設計模型',
    'Jobs to Be Done 需求理論',
    'The Mom Test：使用者訪談方法',
    '構建可互動的產品原型',
    '為原型接入 AI 能力',
    '完整專案實戰：從想法到作品'
  ],
  'ja-jp': [
    'AI時代のプログラミング初体験',
    'AIプログラミングツールの紹介と使い方',
    'スクリーンショットから複製：初めての模倣練習',
    'クリエイティブな発想の源',
    '良いアイデアを見極める方法',
    'ダブルダイヤモンドデザインモデル',
    'Jobs to Be Done 要求理論',
    'The Mom Test：ユーザーインタビュー手法',
    'インタラクティブなプロダクトプロトタイプの構築',
    'プロトタイプへのAI機能の統合',
    '完全プロジェクト実践：アイデアから作品まで'
  ],
  'ko-kr': [
    'AI 시대의 프로그래밍 첫 경험',
    'AI 프로그래밍 도구 소개와 사용',
    '스크린샷으로 복제하기: 첫 모방 연습',
    '창의적 영감의 원천',
    '좋은 아이디어 판별 방법',
    '더블 다이아몬드 디자인 모델',
    'Jobs to Be Done 요구 이론',
    'The Mom Test: 사용자 인터뷰 방법',
    '인터랙티브한 제품 프로토타입 구축',
    '프로토타입에 AI 기능 통합하기',
    '완성 프로젝트 실전: 아이디어에서 작품까지'
  ],
  'es-es': [
    'Primera experiencia de programación en la era de la IA',
    'Introducción y uso de herramientas de programación con IA',
    'Clonar desde capturas de pantalla: primer ejercicio de imitación',
    'Fuentes de inspiración creativa',
    'Cómo identificar una gran idea',
    'Modelo de diseño Double Diamond',
    'Teoría Jobs to Be Done',
    'The Mom Test: método de entrevistas a usuarios',
    'Construcción de prototipos de producto interactivos',
    'Integración de capacidades de IA en prototipos',
    'Práctica completa de proyecto: de idea a producto'
  ],
  'fr-fr': [
    "Première expérience de programmation à l'ère de l'IA",
    'Présentation et utilisation des outils de programmation IA',
    "Cloner depuis des captures d'écran : premier exercice d'imitation",
    "Sources d'inspiration créative",
    'Comment identifier une bonne idée',
    'Modèle de conception Double Diamond',
    'Théorie Jobs to Be Done',
    "The Mom Test : méthode d'entretiens utilisateurs",
    'Construction de prototypes de produit interactifs',
    'Intégration de capacités IA dans les prototypes',
    "Projet complet pratique : de l'idée au produit"
  ],
  'de-de': [
    'Erste Programmiererfahrung im KI-Zeitalter',
    'Einführung und Nutzung von KI-Programmierwerkzeugen',
    'Klonen aus Screenshots: Erste Imitationsübung',
    'Quellen kreativer Inspiration',
    'Wie man eine großartige Idee erkennt',
    'Double Diamond Design-Modell',
    'Jobs to Be Done-Theorie',
    'The Mom Test: Benutzerinterviewmethode',
    'Erstellung interaktiver Produktprototypen',
    'Integration von KI-Fähigkeiten in Prototypen',
    'Vollständige Projektpraxis: Von der Idee zum Produkt'
  ],
  'ar-sa': [
    'أول تجربة برمجة في عصر الذكاء الاصطناعي',
    'مقدمة واستخدام أدوات البرمجة بالذكاء الاصطناعي',
    'الاستنساخ من لقطات الشاشة: أول تمرين محاكاة',
    'مصادر الإلهام الإبداعي',
    'كيف تحدد فكرة رائعة',
    'نموذج التصميم الماسي المزدوج',
    'نظرية Jobs to Be Done',
    'اختبار الأم: طريقة مقابلات المستخدم',
    'بناء نماذج أولية تفاعلية للمنتج',
    'دمج قدرات الذكاء الاصطناعي في النماذج الأولية',
    'مشروع عملي كامل: من الفكرة إلى المنتج'
  ],
  'vi-vn': [
    'Trải nghiệm lập trình đầu tiên trong thời đại AI',
    'Giới thiệu và sử dụng công cụ lập trình AI',
    'Sao chép từ ảnh chụp màn hình: bài tập bắt chước đầu tiên',
    'Nguồn cảm hứng sáng tạo',
    'Cách xác định một ý tưởng hay',
    'Mô hình thiết kế Double Diamond',
    'Lý thuyết Jobs to Be Done',
    'The Mom Test: phương pháp phỏng vấn người dùng',
    'Xây dựng nguyên mẫu sản phẩm tương tác',
    'Tích hợp năng lực AI vào nguyên mẫu',
    'Thực chiến dự án hoàn chỉnh: từ ý tưởng đến sản phẩm'
  ]
}

const localizedStage1NewArticleDescriptions = {
  en: {
    'clone-your-favorite-app':
      'Practice with a screenshot-based recreation and become comfortable with your AI programming tools.',
    'appendix-idea-sources':
      'Find promising product ideas in real work, daily life, communities, and public feedback.',
    'appendix-double-diamond':
      'Use the Double Diamond to explore problems and converge on a solution worth building.',
    'appendix-jobs-to-be-done':
      'Understand the real job users are trying to accomplish behind their stated requests.',
    'appendix-mom-test':
      'Validate demand through interviews without mistaking compliments for evidence.'
  },
  'zh-tw': {
    'clone-your-favorite-app':
      '從截圖模仿開始練習，熟悉 AI 程式設計工具與完整操作流程。',
    'appendix-idea-sources':
      '從真實工作、日常生活、社群與公開回饋中尋找值得研究的產品問題。',
    'appendix-double-diamond':
      '用雙鑽模型發散問題與方案，再收斂到值得實作的方向。',
    'appendix-jobs-to-be-done':
      '從使用者想完成的任務出發，理解表面需求背後的真實動機。',
    'appendix-mom-test': '用正確的訪談方式驗證需求，避免把客套話誤當成證據。'
  },
  'ja-jp': {
    'clone-your-favorite-app':
      'スクリーンショットの再現から練習し、AIプログラミングツールの操作に慣れます。',
    'appendix-idea-sources':
      '実際の仕事、日常生活、コミュニティ、公開フィードバックから価値ある課題を探します。',
    'appendix-double-diamond':
      'ダブルダイヤモンドで問題と解決策を広げ、作る価値のある方向へ絞り込みます。',
    'appendix-jobs-to-be-done':
      'ユーザーの言葉の背後にある、本当に達成したいジョブを理解します。',
    'appendix-mom-test':
      '社交辞令を証拠と取り違えないインタビュー方法で、ニーズを検証します。'
  },
  'ko-kr': {
    'clone-your-favorite-app':
      '스크린샷을 따라 만들어 보며 AI 프로그래밍 도구와 전체 작업 흐름에 익숙해집니다.',
    'appendix-idea-sources':
      '실제 업무, 일상생활, 커뮤니티와 공개 피드백에서 탐구할 가치가 있는 문제를 찾습니다.',
    'appendix-double-diamond':
      '더블 다이아몬드로 문제와 해결책을 확장한 뒤 만들 가치가 있는 방향으로 수렴합니다.',
    'appendix-jobs-to-be-done':
      '사용자가 말한 요구 뒤에 있는, 실제로 완수하려는 과업을 이해합니다.',
    'appendix-mom-test':
      '칭찬을 증거로 착각하지 않는 인터뷰 방법으로 수요를 검증합니다.'
  },
  'es-es': {
    'clone-your-favorite-app':
      'Practica recreando una captura de pantalla y familiarízate con las herramientas de programación con IA.',
    'appendix-idea-sources':
      'Encuentra problemas valiosos en el trabajo real, la vida cotidiana, las comunidades y los comentarios públicos.',
    'appendix-double-diamond':
      'Usa el Double Diamond para explorar problemas y soluciones y converger en una dirección que valga la pena construir.',
    'appendix-jobs-to-be-done':
      'Comprende la tarea real que el usuario intenta completar detrás de lo que pide.',
    'appendix-mom-test':
      'Valida la demanda mediante entrevistas sin confundir los cumplidos con evidencia.'
  },
  'fr-fr': {
    'clone-your-favorite-app':
      "Entraînez-vous en reproduisant une capture d'écran et maîtrisez progressivement les outils de programmation IA.",
    'appendix-idea-sources':
      'Repérez des problèmes utiles dans le travail réel, la vie quotidienne, les communautés et les retours publics.',
    'appendix-double-diamond':
      'Utilisez le Double Diamond pour explorer problèmes et solutions, puis converger vers une piste à construire.',
    'appendix-jobs-to-be-done':
      "Comprenez la tâche réelle que l'utilisateur cherche à accomplir derrière sa demande.",
    'appendix-mom-test':
      'Validez le besoin par des entretiens sans confondre compliments et preuves.'
  },
  'de-de': {
    'clone-your-favorite-app':
      'Üben Sie anhand eines Screenshot-Nachbaus und machen Sie sich mit den KI-Programmierwerkzeugen vertraut.',
    'appendix-idea-sources':
      'Finden Sie relevante Probleme in echter Arbeit, Alltag, Communities und öffentlichem Feedback.',
    'appendix-double-diamond':
      'Nutzen Sie den Double Diamond, um Probleme und Lösungen zu erkunden und auf eine lohnende Richtung zu fokussieren.',
    'appendix-jobs-to-be-done':
      'Verstehen Sie die eigentliche Aufgabe, die Nutzer hinter ihrer formulierten Anfrage erledigen wollen.',
    'appendix-mom-test':
      'Validieren Sie Bedarf durch Interviews, ohne Höflichkeit mit Belegen zu verwechseln.'
  },
  'ar-sa': {
    'clone-your-favorite-app':
      'تدرّب على إعادة إنشاء واجهة من لقطة شاشة وتعرّف إلى أدوات البرمجة بالذكاء الاصطناعي.',
    'appendix-idea-sources':
      'ابحث عن مشكلات تستحق الدراسة في العمل والحياة اليومية والمجتمعات والملاحظات العامة.',
    'appendix-double-diamond':
      'استخدم نموذج الماسة المزدوجة لاستكشاف المشكلات والحلول ثم تضييقها إلى اتجاه يستحق البناء.',
    'appendix-jobs-to-be-done':
      'افهم المهمة الحقيقية التي يحاول المستخدم إنجازها وراء الطلب الذي يعبّر عنه.',
    'appendix-mom-test':
      'تحقق من الحاجة بالمقابلات من دون الخلط بين المجاملة والدليل.'
  },
  'vi-vn': {
    'clone-your-favorite-app':
      'Luyện tập bằng cách dựng lại từ ảnh chụp màn hình và làm quen với công cụ lập trình AI.',
    'appendix-idea-sources':
      'Tìm vấn đề đáng nghiên cứu trong công việc thật, đời sống, cộng đồng và phản hồi công khai.',
    'appendix-double-diamond':
      'Dùng Double Diamond để mở rộng vấn đề và giải pháp, rồi hội tụ vào hướng đáng xây dựng.',
    'appendix-jobs-to-be-done':
      'Hiểu công việc thực sự người dùng muốn hoàn thành phía sau yêu cầu họ nêu ra.',
    'appendix-mom-test':
      'Kiểm chứng nhu cầu bằng phỏng vấn mà không nhầm lời khen với bằng chứng.'
  }
}

const localizedStage1ReturnTitles = {
  en: 'Back: How to Learn This Course',
  'zh-tw': '返回：如何學習本課程',
  'ja-jp': '戻る：このコースの学び方',
  'ko-kr': '돌아가기: 이 과목 학습 방법',
  'es-es': 'Volver: Cómo aprender este curso',
  'fr-fr': 'Retour : Comment apprendre ce cours',
  'de-de': 'Zurück: Wie man diesen Kurs lernt',
  'ar-sa': 'العودة: كيف تتعلم هذه الدورة',
  'vi-vn': 'Quay lại: Cách học khóa học này'
}

for (const [locale, titles] of Object.entries(
  localizedStage1LearningMapTitles
)) {
  for (const [index, slug] of localizedStage1LearningMapOrder.entries()) {
    localizedArticleText[locale][slug] = {
      ...localizedArticleText[locale][slug],
      title: titles[index],
      ...(localizedStage1NewArticleDescriptions[locale]?.[slug]
        ? {
            description: localizedStage1NewArticleDescriptions[locale][slug]
          }
        : {})
    }
  }

  localizedArticleText[locale]['learning-map'] = {
    ...localizedArticleText[locale]['learning-map'],
    title: localizedStage1ReturnTitles[locale]
  }
}

const withLocalizedArticleText = (item, locale) => {
  const text = localizedArticleText[locale]?.[getArticleSlug(item.href)]
  return text ? { ...item, ...text } : item
}

const localizeArticleLinks = (items, locale) =>
  items.map((item) => ({
    ...withLocalizedArticleText(item, locale),
    href: item.href.replace(/^\/zh-cn\//, `/${locale}/`)
  }))

const orderLocalizedLearningMapItems = (items) => {
  const order = new Map(
    localizedStage1LearningMapOrder.map((slug, index) => [slug, index])
  )
  return [...items].sort(
    (left, right) =>
      (order.get(getArticleSlug(left.href)) ?? Number.MAX_SAFE_INTEGER) -
      (order.get(getArticleSlug(right.href)) ?? Number.MAX_SAFE_INTEGER)
  )
}

export const relatedArticlesMap = new Proxy(rawRelatedArticlesMap, {
  get(target, prop) {
    if (typeof prop !== 'string') return target[prop]
    if (prop in target) return target[prop]

    const locale = getLocaleFromKey(prop)
    if (!locale || locale === 'zh-cn') return undefined

    const fallbackKey = prop.replace(`${locale}/`, 'zh-cn/')
    const fallbackItems = target[fallbackKey]
    if (!fallbackItems) return undefined

    const localizedItems = prop.endsWith('/stage-1/learning-map')
      ? orderLocalizedLearningMapItems(fallbackItems)
      : fallbackItems

    return localizeArticleLinks(localizedItems, locale)
  }
})
