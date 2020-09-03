const moment = require("moment");
const path = require("path");

module.exports = {
  title: "jon.hk",
  description: "Jon Chui",
  transpileDependencies: ["vue-echarts", "resize-detector"],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png"
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "../../../docs/image"
      }
    }
  },
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    defaultTheme: 'dark',
    docsDir: "docs",
    // repo: 'jkwchui/chem-jon-hk',
    nav: [
      // {
      //     text: 'Home',
      //     link: '/'
      // },
      {
        text: "Chem",
        link: "/chem/"
      },
      {
        text: "Jon",
        link: "/jon/"
      },
      {
        text: "Sandbox",
        link: "/sandbox/"
      }
      // {
      //     text: 'BabylonJS',
      //     link: '/babylonjs/'
      // },
      // {
      //     text: 'pdf',
      //     link: '/pdf/'
      // },
      // {
      //     text: 'Syllabus',
      //     link: '/Syllabus/'
      // },
      // {
      //     text: 'Table',
      //     link: '/Table/'
      // }
      // {
      //     text: 'Admin',
      //     link: '/admin/#/',
      // }
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
    sidebarDepth: 0,
    sidebar: {
      "/chem/": [
        // {
        //         title: 'Home',
        //         collapsable: false,
        //         children: [
        //             '/'
        //         ]
        //     },
        {
          title: "Course",
          collapsable: true,
          children: [
            ["./course/", "📂 Info"],
            ["./course/paper", "💯 Paperwork"],
            ["./course/study", "✏️ How to study"],
            {
              title: "Syllabus",
              sidebarDepth: 0,
              children: [
                ["./course/syllabus/", "En 🇬🇧 🇺🇸 🇨🇦"],
                ["./course/syllabus/es", "Es 🇲🇽 🇪🇸 🇦🇷"]
              ]
            }
          ]
        },
        {
          title: "Lessons",
          sidebarDepth: 2,
          children: [
            ["./lessons/", "Overview"],
            ["./lessons/Y1", "Year 1"],
            ["./lessons/Y2", "Year 2"]
          ]
        },
        {
          title: "Topics",
          sidebarDepth: 0,
          children: [
            ["./topic/0/", "0 - Foundations"],
            ["./topic/1/", "1 - Stoichiometry"],
            ["./topic/11A/", "11A - Measurements"],
            ["./topic/2/", "2/12 - Atomic structure"],
            ["./topic/3/", "3/13 - Periodicity"],
            {
              title: "4/14 - Structure & Bonding",
              collapsable: true,
              children: [
                ["./topic/4/", "Classification"],
                ["./topic/4/4-1", "4.1 Ionic Bonds and Structures"],
                ["./topic/4/4-1-visualization", "Visualizing ionic bonds and structures using AtomSmith"],
                ["./topic/4/4-5", "4.5 Metallic Bonds and Structures"],
                ["./topic/4/4-2", "4.2/3 Covalent Bonds and Structures"],
                ["./topic/4/4-4", "4.4 Intermolecular Forces"],
              ]
            },
            ["./topic/5/", "5/15 - Energetics"],
            ["./topic/6/", "6/16 - Kinetics"],
            ["./topic/7/", "7/17 - Equilibrium"],
            ["./topic/8/", "8/18 - Acids & Bases"],
            ["./topic/9/", "9/19 - Redox"],
            ["./topic/10/", "10/20 - Organic Chemistry"],
            ["./topic/11B/", "11B/21 - Spectroscopy 🌈"],
            {
              title: "C - Energy ⚡",
              collapsable: true,
              children: [
                ["./topic/C/", "Overview"],
                ["./topic/C/C-1", "C.1 Energy Sources"],
                ["./topic/C/C-1-taxi", "The Taxi Problem"],
                ["./topic/C/C-1-energy_statistics", "Visualizing Global Energy Statistics"],
                ["./topic/C/C-2", "C.2 Fossil Fuels"],
                ["./topic/C/C-5", "C.5 Global Warming"],
                ["./topic/C/C-3_7", "C.3/7 Fusion and Fission"],
                ["./topic/C/C-4_8", "C.4/8 Solar Energy"],
                ["./topic/C/C-6", "C.6 Energy Storage"],
              ]
            },
            ["./topic/D/", "D - Drugs & Medicine 💊"]
            // ['./topic/', ''],
          ]
        },
        {
          title: "IA",
          children: [
            ["./IA/", "Internal Assessment"],
            ["./IA/plan", "1. Planning"],
            ["./IA/critique-ex", "1B. Critique an Exploration"],
            ["./IA/experiment", "2. Doing the experiment"],
            ["./IA/analysis", "3. Analysis / Interpretation"],
            ["./IA/writing", "4. Writing up"],
            ["./IA/final-check", "5. Final check"],
            {
              title: "Inventory",
              children: [
                ["./IA/equipment", "🔬 Sensors and Equipment"],
                ["./IA/reagent", "🔥 Reagents"]
              ]
            }
          ]
        },
        {
          title: "Skills",
          children: [{
              title: "💾 ICT",
              children: [
                ["./skills/analysis/spreadsheet/", "📊 Spreadsheet"],
                ["./skills/mol-model/", "Molecular modeling"],
                ["./skills/database/", "📇 Exploring databases"]
              ]
            },
            {
              title: "🥼 Lab",
              children: [
                ["./skills/lab", "Wet lab skills"],
                ["./skills/image-analysis/", "Image analysis"]
              ]
            },
            {
              title: "✍️ Writing",
              children: [
                ["./skills/writing", "On science writing"]
                // ['./skills/writing', 'On science writing'],
              ]
            }
          ]
        },
        {
          title: "Resources",
          sidebarDepth: 0,
          children: [
            ["./resources/resources/", "🧳 Resources"],
            ["./resources/notes/", "📘 Notes"],
            ["./resources/tools/", "🔧 Tools"],
            {
              title: "🔤 Glossary",
              children: [
                ["./resources/glossary/", "En 🇬🇧 🇺🇸 🇨🇦"],
                ["./resources/glossary/es", "Es 🇲🇽 🇪🇸 🇦🇷"],
                ["./resources/glossary/fr", "Fr 🇫🇷 🇨🇩 🇨🇦"],
                ["./resources/glossary/ja", "Jp 🇯🇵"]
              ]
            },
            ["./resources/bestiary/", "Bestiary"]
          ]
        }
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

      "/jon/": [{
          title: "About",
          collapsable: true,
          children: [
            ["./", "Bio"],
            ["./website", "🗄️ Website"],
            ["./colophon", "⌨️ Colophon"],
            ["./registry", "💰 Registry of interests"]
          ]
        },
        {
          title: 'Essays',
          children: [
                      ['./essays/IB-M20-grades', 'How IB M20 Grades were calculated'],
                  ],
        },
        {
          title: "Anki",
          children: [
            ["./anki/", "Anki"]
          ]
        },
        {
          title: "Teaching",
          sidebarDepth: 0,
          children: [
            ["./teaching/", "Teaching"],
            ["./teaching/priorities", "1. Priorities"],
            ["./teaching/habits", "2A. Habits"],
            ["./teaching/techniques", "2B. Techniques"],
            ["./teaching/plays", "3. Plays"]
          ]
        }
      ],

      "/sandbox/": [{
        title: "Sandbox",
        children: [
          ["./", "All features"],
          ["./airtable/", "Airtable pull"]
        ]
      }]
    },
    displayAllHeaders: true
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          // const moment = require('moment')
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ],
    // [
    //     '@vuepress/blog',
    //     {
    //         postsDir: '../jon/_posts'
    //     }
    // ],
    // ['@vuepress/register-components',
    //     {
    //         componentsDir: [
    //             '.'
    //         ]
    //     }
    // ],
    "@vuepress/active-header-links",
    "@vuepress/medium-zoom",
    "@vuepress/back-to-top",
    // "@vuepress/pwa",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-134636637-1" // UA-00000000-0
      }
    ],
    [
      "vuepress-plugin-smooth-scroll",
      {
        "vuepress-plugin-smooth-scroll": true
      }
    ],
    [
      "@goy/svg-icons",
      {
        // Specific the folder with absolute path
        // where your gonna put svg icons in
        svgsDir: `${__dirname}/svgs`
      }
    ],
    "tabs"
    // 'flowchart',
  ],
  markdown: {
    // options for markdown-it-anchor
    anchor: {
      permalink: true
    },
    // options for markdown-it-toc
    toc: {
      includeLevel: [1, 2, 3, 4],
      forceFullToC: true
    },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-checkbox"), {
        divWrap: true,
        divClass: "cb",
        idPrefix: "cbx_"
      });
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-attrs"));
      md.use(require("markdown-it-abbr"));
      md.use(require("markdown-it-video"), {
        youtube: {
          width: 640,
          height: 390
        },
        vimeo: {
          width: 720,
          height: 600        
        },
        vine: {
          width: 600,
          height: 600,
          embed: "simple"
        },
        prezi: {
          width: 550,
          height: 400
        }
      });
      md.use(require("markdown-it-sup"));
      md.use(require("markdown-it-sub"));
      md.use(require("markdown-it-imsize"), {
        autofill: true
      });
      // md.use(require('markdown-it-center-text'))
      md.use(require("markdown-it-implicit-figures"), {
        dataType: true, // <figure data-type="image">, default: false
        figcaption: true, // <figcaption>alternative text</figcaption>, default: false
        tabindex: true, // <figure tabindex="1+n">..., default: false
        link: true
      });
    }
  }
};