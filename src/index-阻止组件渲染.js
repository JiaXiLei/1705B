import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 阻止组件渲染 返回 null
function WarningBanner (props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWarning: true
    }
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)