const moment = require('moment');

module.exports = {
    title: 'jon.hk',
    description: 'Jon Chui',
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
        nav: [
            // {
            //     text: 'Home',
            //     link: '/'
            // },
            {
                text: 'Chem',
                link: '/chem/'
            },
            {
                text: 'Jon',
                link: '/jon/'
            },
            {
                text: 'Sandbox',
                link: '/sandbox/'
            },
            // {
            //     text: 'Languages',
            //     items: [{
            //             text: 'Chinese',
            //             link: '/language/chinese/'
            //         },
            //         {
            //             text: 'Japanese',
            //             link: '/language/japanese/'
            //         }
            //     ]
            // }
        ],
        sidebar: {
            '/chem/': [
                // {
                //         title: 'Home',
                //         collapsable: false,
                //         children: [
                //             '/'
                //         ]
                //     },
                {
                    title: 'Course',
                    collapsable: false,
                    children: [
                        ['./course/', 'Info'],
                        ['./course/paper', 'Paperwork'],
                        ['./course/study', 'How to study'],
                    ],
                },
                {
                    title: 'Topics',
                    children: [
                        ['./topic/0/', '0 - Foundations'],
                        ['./topic/1/', '1 - Stoichiometry'],
                        ['./topic/11A/', '11A - Measurements'],
                        ['./topic/2/', '2/12 - Atomic structure'],
                        ['./topic/3/', '3/13 - Periodicity'],
                        ['./topic/4/', '4/14 - Structure & Bonding'],
                        ['./topic/5/', '5/15 - Energetics'],
                        ['./topic/6/', '6/16 - Kinetics'],
                        ['./topic/7/', '7/17 - Equilibrium'],
                        ['./topic/8/', '8/18 - Acids & Bases'],
                        ['./topic/9/', '9/19 - Redox'],
                        ['./topic/10/', '10/20 - Organic Chemistry'],
                        ['./topic/11B/', '11B/21 - Spectroscopy'],
                        ['./topic/D/', 'D - Drugs & Medicine'],
                        // ['./topic/', ''],

                    ]
                },
                {
                    title: 'IA',
                    children: [
                        ['./IA/', 'Internal Assessment'],
                    ]
                },
                {
                    title: 'Skills',
                    children: [
                        ['./skills/spreadsheet', 'Spreadsheet'],
                        ['./skills/modeling', 'Molecular modeling'],
                        ['./skills/writing', 'Science writing'],
                        ['./skills/lab', 'Lab'],
                    ],
                },
                {
                    title: 'Resources',
                    children: [
                        ['./resources/tools', 'Tools'],
                        ['./resources/glossary', 'Glossary'],
                    ],
                },
                // {
                //     title: 'Sandbox',
                //     children: [
                //         './sandbox/fa/',
                //         './sandbox/bootstrap/',
                //         './sandbox/chart/',
                //         './sandbox/math/',
                //         './sandbox/pug/'
                //     ]
                // },
            ],

            '/jon/': [{
                    title: 'About',
                    collapsable: false,
                    children: [
                        ['./', 'Bio'],
                        ['./colophon', 'Colophon'],
                        ['./registry', 'Registry of interests'],
                    ],
                },
                {
                    title: 'Guides',
                    children: [
                        ['./guides/', 'Guides'],
                    ],
                },
                {
                    title: 'Anki',
                    children: [
                        ['./anki/', 'Anki'],
                    ],
                },
                {
                    title: 'Teaching',
                    children: [
                        ['./teaching/', 'Teaching'],
                    ],
                },
            ],

            '/sandbox/': [{
                title: 'Sandbox',
                children: [
                    ['./airtable/', 'Airtable pull'],
                ],
            }, ]
        },
        displayAllHeaders: true,
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    // const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        '@vuepress/register-components', '@vuepress/active-header-links', '@vuepress/medium-zoom', '@vuepress/back-to-top', '@vuepress/register-components', 'flowchart'
    ],
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