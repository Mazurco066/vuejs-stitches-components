// Components
import components from'./presentation/ui/components/index'

// Styles
import './presentation/styles/index.scss'

// Register components
const plugin = {
  install (Vue) {
    // Components
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

// CommonJS export
//module.exports = { plugin }

// Derfault ES export
export default plugin
