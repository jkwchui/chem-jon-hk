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
        sidebar: [
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
                    ['./chem/course/', 'Info'],
                    ['./chem/course/paper', 'Paperwork'],
                    ['./chem/course/study', 'How to study'],
                ],
            },
            {
                title: 'Topics',
                children: [
                    ['./chem/topic/0/', '0 - Foundations'],
                    ['./chem/topic/1/', '1 - Stoichiometry'],
                    ['./chem/topic/11A/', '11A - Measurements'],
                    ['./chem/topic/2/', '2/12 - Atomic structure'],
                    ['./chem/topic/3/', '3/13 - Periodicity'],
                    ['./chem/topic/4/', '4/14 - Structure & Bonding'],
                    ['./chem/topic/5/', '5/15 - Energetics'],
                    ['./chem/topic/6/', '6/16 - Kinetics'],
                    ['./chem/topic/7/', '7/17 - Equilibrium'],
                    ['./chem/topic/8/', '8/18 - Acids & Bases'],
                    ['./chem/topic/9/', '9/19 - Redox'],
                    ['./chem/topic/10/', '10/20 - Organic Chemistry'],
                    ['./chem/topic/11B/', '11B/21 - Spectroscopy'],
                    ['./chem/topic/D/', 'D - Drugs & Medicine'],
                    // ['./topic/', ''],

                ]
            },
            {
                title: 'IA',
                children: [
                    ['./chem/IA/', 'Internal Assessment'],
                ]
            },
            {
                title: 'Skills',
                children: [
                    ['./chem/skills/spreadsheet', 'Spreadsheet'],
                    ['./chem/skills/modeling', 'Molecular modeling'],
                    ['./chem/skills/writing', 'Science writing'],
                    ['./chem/skills/lab', 'Lab'],
                ],
            },
            {
                title: 'Resources',
                children: [
                    ['./chem/resources/tools', 'Tools'],
                    ['./chem/resources/glossary', 'Glossary'],
                ],
            },
            {
                title: 'Sandbox',
                children: [
                    './sandbox/fa/',
                    './sandbox/bootstrap/',
                    './sandbox/chart/',
                    './sandbox/math/',
                    './sandbox/pug/'
                ]
            },
        ],
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
        '@vuepress/register-components', '@vuepress/active-header-links', '@vuepress/medium-zoom', '@vuepress/back-to-top', '@vuepress/register-components'
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