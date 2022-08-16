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
            {
                text: '页面1',
                link: '/',
            },
            {
                text: '页面2',
                link: '/',
            },
        ],
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
