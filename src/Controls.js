import React, {Component} from 'react';

export default class Controls extends Component {

  render(){
    return (
      <div>
        <input type="text" className="search-input"/>
        <button className="search-submit-button">Submit</button>
      </div>
    )
  }

}
