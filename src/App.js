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
      clickedCards: [],
    }
  }

  handleClicked(clickedCardInfo, isClicked) {
    this.setState({
      clickedCards: this.updateClickedCards(clickedCardInfo, isClicked),
    })
  }

  updateClickedCards(clickedCardInfo, isClicked) {
    const clicked = this.state.clickedCards;
      if(!isClicked) {
        const index = clicked.findIndex((elem) => {
          return clickedCardInfo.location === elem.location;
        })
        clicked.splice(index, 1);
    }
    else {
      if(clicked.length < 2) {
        clicked.push(clickedCardInfo);
      } else {
        clicked.shift();
        clicked.push(clickedCardInfo);
      }
    }

    return clicked;
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

  getComparisonData(clickedCards) {
    if(clickedCards.length > 1) {
      const comparison = this.data.compareDistrictAverages(clickedCards[0].location, clickedCards[1].location);
      return {
        comparison: comparison,
      }
    } else {
      return {}
    }
  }

  render() {
    return (
      <div className="App">
        <Controls  runSearch={this.runSearch.bind(this)}/>
        <CardContainer data={this.state.search} clickedCards={this.state.clickedCards} handleClicked={this.handleClicked.bind(this)} comparisonData={this.getComparisonData(this.state.clickedCards)}/>
      </div>
    )
  }
}

export default App;
