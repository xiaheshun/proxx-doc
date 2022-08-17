const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'zh-CN',
    title: 'Proxx知识库',
    description: '记录平日积累的技术栈知识库',
    head: [
        [
            'link', { rel: 'icon', href: '/images/icon.svg' }
        ]
    ],
    theme: defaultTheme({
        // 图标
        logo: '/images/logo.svg',
        logoDark: '/images/logo_dark.svg',
        // 仓库
        repo: 'https://github.com/xiaheshun?tab=repositories&q=proxx&type=&language=&sort=name',
        // 默认主题配置
        navbar: [
            {text: '主页', link: '/',},
            {text: '博客', link: '/vuepress/构建静态博客问题.html',},
        ],
        sidebar: {
            '/vuepress/':[
                {
                    title: '博客',
                    collapsable: false,
                    children: [
                        { title: '构建静态博客问题', path: '/vuepress/构建静态博客问题.html' },
                    ]
                }
            ]
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
