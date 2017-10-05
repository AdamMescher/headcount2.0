import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Controls from './Controls';
import DistrictRepository from './helper'
import KinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: new DistrictRepository(KinderData),
      searchInput: ''
    }
  }

  updateSearchInput(newSearchInput) {
    this.setState({
      searchInput: newSearchInput
    })
  }

  // runSearch(searchTerm) {
  //   const searchResults = Object.keys(this.state.data).filter( (district) => {
  //
  //     return district.location.includes(searchTerm)
  //   })
  //   this.setState({
  //     data: searchResults
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Controls  updateSearchInput={this.updateSearchInput.bind(this)}/>
        <CardContainer data={this.state.data} />
      </div>
    )
  }
}

export default App;
