import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper'
import KinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: new DistrictRepository(KinderData)
    }
  }
  render() {
    return (
      <CardContainer data={this.state.data} />
    )
  }
}

export default App;
