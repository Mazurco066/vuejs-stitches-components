// Default config models
import { defineClientConfig } from '@vuepress/client'

// Local components
import plugin from '../../src/index'

// Use local package in doc pages
export default defineClientConfig({
  enhance({ app }) {
    app.use(plugin)
  },
  setup() {},
  rootComponents: [],
})