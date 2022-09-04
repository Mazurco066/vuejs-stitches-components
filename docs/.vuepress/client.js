// Default config models
import { defineClientConfig } from '@vuepress/client'

// Local components
import InputText from '../../src/components/InputText.vue'
import InputTextarea from '../../src/components/InputTextarea.vue'

// Use local package in doc pages
export default defineClientConfig({
  enhance({ app }) {
    app.component('input-text', InputText)
    app.component('input-textarea', InputTextarea)
  },
  setup() {},
  rootComponents: [],
})