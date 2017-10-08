import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: props.isClicked || false,
    }
  }

  toggleClick(event) {
    this.setState( {
      clicked: !this.state.clicked,
    }, () => {

        this.props.handleClicked({location: this.props.location, yearData: this.props.yearData}, this.state.clicked)
    })
  }

  render() {

    if(this.props.cardType === 'districtCard') {

      const mapped = Object.keys(this.props.yearData).map( (year, index) => {
        if(this.props.yearData[year] < 0.5){
          return (
            <li className="bad" key={index + Date.now()}>{year}: {this.props.yearData[year]}</li>
          )
        }

        return (
          <li className="good" key={index + Date.now()}>{year}: {this.props.yearData[year]}</li>
        )
      })

      if(this.state.clicked) {
        return(
          <div className='card isClicked' onClick={this.toggleClick.bind(this)}>
            <h2>{this.props.location}</h2>
            <ul>
              { mapped }
            </ul>
          </div>
        )
      }
      else {
        return (
          <div className='card' onClick={this.toggleClick.bind(this)}>
            <h2>{this.props.location}</h2>
            <ul>
              { mapped }
            </ul>
          </div>
        )
      }
    } else {
      const keys = Object.keys(this.props.comparisonData.comparison);
      return (
        <div className='card'>
          <h2>{keys[0]}</h2>
          <p>{this.props.comparisonData.comparison[keys[0]]}</p>
          <p>{this.props.comparisonData.comparison.compared}</p>
          <h2>{keys[1]}</h2>
          <p>{this.props.comparisonData.comparison[keys[1]]}</p>
        </div>
        )
      }
  }
}

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  location: PropTypes.string,
  yearData: PropTypes.object
}

export default Card;
