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
    console.log('event target ', event.target);
    this.setState({
      input: event.target.value
    })

    this.props.updateSearchInput(this.state.input)
  }

  render(){
    return (
      <div className="controls">
        <h1>HeadCount</h1>
        <section>
          <input type="text" className="search-input" onChange={ () => this.updateState(event) } value={this.state.input} />
        </section>
      </div>
    )
  }

}
