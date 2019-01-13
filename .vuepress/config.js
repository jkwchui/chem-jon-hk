module.exports = {
    title: 'VuePress',
    description: 'Vuepress',
    port: 8000,
    base: '/',
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'Home',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: 'Guide',
                children: [
                    '/guide/',
                ],
            },
            {
                title: 'Pug example',
                children: [
                    '/pug/',
                ],
            },
            {
                title: 'MathJax example',
                children: [
                    '/math/',
                ],
            },
            {
                title: 'Fa-Awesome',
                children: [
                    '/fa/',
                ],
            },
            {
                title: 'Bootstrap',
                children: [
                    '/bootstrap/',
                ],
            },
            {
                title: 'ChartJs',
                children: [
                    '/chart/',
                ],
            },
        ],
        displayAllHeaders: true,
    },
    plugins: ['@vuepress/last-updated','@vuepress/register-components','@vuepress/active-header-links']
};