import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Controls from './Controls';
import DistrictRepository from './helper'
import KinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super()
    this.data = new DistrictRepository(KinderData)
    this.state = {
      search: this.data,
    }
  }

  runSearch(searchTerm) {
    searchTerm = searchTerm.toUpperCase();
    const searchResults = this.data.findAllMatches(searchTerm);
    const searchResultsObj = searchResults.reduce( (acc, result) => {
      if(!acc.data[result]) {
        acc.data[result] = this.data.data[result]
      }
      return acc
    }, {data: {} })

    this.setState({
      search: searchResultsObj
    })
  }

  render() {
    return (
      <div className="App">
        <Controls  runSearch={this.runSearch.bind(this)}/>
        <CardContainer data={this.state.search} />
      </div>
    )
  }
}

export default App;
