import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: props.isClicked || false
    };
  }

  toggleClick() {
    this.setState( {
      clicked: !this.state.clicked
    }, () => {
      this.props.handleClicked(
        { location: this.props.location, yearData: this.props.yearData},
        this.state.clicked
      );
    });
  }

  render() {

    if (this.props.cardType === 'districtCard') {

      const mapped = Object.keys(this.props.yearData).map( (year, index) => {
        if (this.props.yearData[year] < 0.5){
          return (
            <li className="bad" key={index + Date.now()}>
              {year}: {this.props.yearData[year]}
            </li>
          );
        }

        return (
          <li className="good" key={index + Date.now()}>
            {year}: {this.props.yearData[year]}
          </li>
        );
      });

      if (this.state.clicked) {
        return (
          <div className='card isClicked' onClick={this.toggleClick.bind(this)}>
            <h2 className="card-title">{this.props.location}</h2>
            <ul> { mapped } </ul>
          </div>
        );
      } else {
        return (
          <div className='card' onClick={this.toggleClick.bind(this)}>
            <h2 className="card-title">{this.props.location}</h2>
            <ul> { mapped } </ul>
          </div>
        );
      }
    } else {
      const keys = Object.keys(this.props.comparisonData.comparison);
      return (
        <div className='comparison-card card'>
          <h2 className="card-title">{keys[0]}</h2>
          <p>{this.props.comparisonData.comparison[keys[0]]}</p>
          <p>{this.props.comparisonData.comparison.compared}</p>
          <h2 className="card-title">{keys[1]}</h2>
          <p>{this.props.comparisonData.comparison[keys[1]]}</p>
        </div>
      );
    }
  }
}

Card.propTypes = {
  cardType: PropTypes.string,
  location: PropTypes.string,
  yearData: PropTypes.object,
  isClicked: PropTypes.bool,
  comparisonData: PropTypes.object,
  handleClicked: PropTypes.func
};

export default Card;
