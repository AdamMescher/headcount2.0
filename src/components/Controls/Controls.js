import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  updateState(event) {
    this.setState({
      input: event.target.value
    });

    this.props.runSearch(event.target.value);
  }

  render(){
    return (
      <div className="controls">
        <h1 className="logo-text">HeadCount</h1>
        <section>
          <input
            type="text"
            className="search-input"
            onChange={this.updateState.bind(this)}
            value={this.state.input}
          />
        </section>
      </div>
    );
  }
}

Controls.propTypes = {
  runSearch: PropTypes.func
};
