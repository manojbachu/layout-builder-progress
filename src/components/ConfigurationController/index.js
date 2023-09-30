// Write your code here
import {Component} from 'react'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <div className="configuration-controller">
        <div className="sub-container">
          <h1 className="main-heading">Layout</h1>
          <div className="input-container">
            <input id="content" className="checkbox-input" type="checkbox" />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              id="left-navbar"
              className="checkbox-input"
              type="checkbox"
            />
            <label htmlFor="left-navbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              id="right-navbar"
              className="checkbox-input"
              type="checkbox"
            />
            <label htmlFor="right-navbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      </div>
    )
  }
}
export default ConfigurationController
