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
  }
}

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  location: PropTypes.string,
  yearData: PropTypes.object
}

export default Card;
