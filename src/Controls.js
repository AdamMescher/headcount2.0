import React, {Component} from 'react';
import './Controls.css';

export default class Controls extends Component {

  render(){
    return (
      <div className="controls">
        <h1>HeadCount</h1>
        <section>
          <input type="text" className="search-input"/>
          <button className="search-submit-button">Submit</button>
        </section>
      </div>
    )
  }

}
