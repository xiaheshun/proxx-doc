const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'zh-CN',
    title: 'Proxx知识库',
    description: '记录平日积累的技术栈知识库',
    head: [
        [
            'link', { rel: 'icon', href: 'https://proxx.oss-cn-beijing.aliyuncs.com/icon.svg' }
        ]
    ],
    theme: defaultTheme({
        // 图标
        logo: 'https://proxx.oss-cn-beijing.aliyuncs.com/logo.svg',
        logoDark: 'https://proxx.oss-cn-beijing.aliyuncs.com/logo_dark.svg',
        // 仓库
        repo: 'https://github.com/xiaheshun/',
        // 默认主题配置
        navbar: [
            {text: '主页', link: '/',},
            {text: '指南', link: '/guide/',},
            {text: '建站', link: '/blog/',},
            {text: '码云', link: 'https://gitee.com/xiaheshun',},
        ],
        sidebar:{
            '/guide/':[
                {
                    text: '知识库指南',
                    path: '/guide/'
                }
            ],
            '/blog/':[
                {
                    text: '1.初始准备工作',
                    collapsible: false,
                    children: [
                        '1.1环境安装.md'
                    ]
                },
                {
                    text: '问题汇总',
                    collapsible: true,
                    children: [
                        'Q1GitHub流水线构建问题.md'
                    ]
                }
            ],
        }
    }),
    plugins: [
        searchPlugin({
            // 排除首页
            isSearchable: (page) => page.path !== '/',
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            },
        }),
    ],
}
