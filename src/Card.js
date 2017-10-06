import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
    }
  }

  toggleClick() {
    console.log('clicked card')
    this.setState( {
      clicked: !this.state.clicked,
    })
  }

  render() {
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

    return(
      <div className="card" onClick={this.toggleClick.bind(this)}>
        <h2>{this.props.location}</h2>
        <ul>
          { mapped }
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  location: PropTypes.string,
  yearData: PropTypes.object
}

export default Card;
