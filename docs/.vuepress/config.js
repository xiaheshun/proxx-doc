const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'zh-CN',
    title: '超级知识库',
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
            {text: '建站', link: '/site/',},
            {text: '关于', link: '/personal/README.md',},
            {text: '码云', link: 'https://gitee.com/xiaheshun',},
        ],
        sidebar:{
            '/site/':[
                {
                    text: '建站介绍',
                    link: '/site/README.md'
                },
                {
                    text: '初始准备工作',
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
    })
}
