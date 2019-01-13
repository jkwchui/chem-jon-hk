module.exports = {
    title: 'VuePress',
    description: 'Vuepress',
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'VuePress Deploy',
            description: 'Vuepress with Netlify Deploy Button'
        }
    },
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ],
    ],
    themeConfig: {
        docsDir: 'docs',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
            {
                text: 'Languages',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese/'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese/'
                    }
                ]
            }
        ],
        sidebar: [{
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
    plugins: ['@vuepress/last-updated', '@vuepress/register-components', '@vuepress/active-header-links']
};