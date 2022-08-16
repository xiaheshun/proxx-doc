const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'zh-CN',
    title: 'Proxx知识库',
    description: '记录平日积累的技术栈知识库',
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
}
