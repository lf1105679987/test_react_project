import React, {Component} from 'react'
import Load from './Loading'

export default function asyncComponent(importComponent,key,permission) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component
      })
    }

    render() {
      const C = this.state.component
      return C ? <C permission={permission} key={key} {...this.props} /> : <Load key={key}/>
    }
  }

  return AsyncComponent
}
