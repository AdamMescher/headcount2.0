import React, {Component} from 'react';
import './Controls.css';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  updateState(event) {
    this.setState({
      input: event.target.value
    })

    this.props.runSearch(event.target.value)
  }

  render(){
    return (
      <div className="controls">
        <h1>HeadCount</h1>
        <section>
          <input type="text" className="search-input" onChange={this.updateState.bind(this)} value={this.state.input} />
        </section>
      </div>
    )
  }

}
