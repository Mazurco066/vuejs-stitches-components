// Default config models
import { defaultTheme } from 'vuepress'

// Exporting vuepress settings
module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Component Library 🥂',
      description: 'Documentation site for the Vue component library plugin'
    }
  },
  theme: defaultTheme({
    repo: 'https://github.com/Mazurco066/vuejs-stitches-components',
    docsDir: 'docs',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/guide' },
      { text: 'Components', link: '/components' }
    ],
    sidebar: [
      {
        text: 'Guides',
        collapsible: false,
        children: [
          { text: 'Installation', link: '/' },
          { text: 'Getting Started', link: '/guide' }
        ]
      },
      {
        text: 'Components',
        collapsable: false,
        children: [
          { text: 'InputText', link: '/components/input-text.md' },
          { text: 'InputTextarea', link: '/components/input-textarea.md' }
        ]
      }
    ]
  })
}
