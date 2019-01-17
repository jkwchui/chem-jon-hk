module.exports = {
    title: 'VuePress',
    description: 'Vuepress',
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
                link: '/docs/'
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
    plugins: ['@vuepress/last-updated', '@vuepress/register-components', '@vuepress/active-header-links', '@vuepress/medium-zoom', '@vuepress/back-to-top', '@vuepress/register-components', {}],
    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: true
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [1, 2]
        },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-checkbox'), {
                divWrap: true,
                divClass: 'cb',
                idPrefix: 'cbx_'
            })
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-attrs'))
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-video'), {
                youtube: {
                    width: 640,
                    height: 390
                },
                vimeo: {
                    width: 640,
                    height: 400
                },
                vine: {
                    width: 600,
                    height: 600,
                    embed: 'simple'
                },
                prezi: {
                    width: 550,
                    height: 400
                }
            })
            md.use(require('markdown-it-sup'))
            md.use(require('markdown-it-sub'))
        }
    }
};