import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const mapped = Object.keys(props.yearData).map( (year, index) => {
    if(props.yearData[year] < 0.5){
      return (
        <li className="bad" key={index + Date.now()}>{year}: {props.yearData[year]}</li>
      )
    }

    return (
      <li className="good" key={index + Date.now()}>{year}: {props.yearData[year]}</li>
    )
  })

  return(
    <div className="card">
      <h2>{props.location}</h2>
      <ul>
        { mapped }
      </ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  yearData: PropTypes.object.isRequired
}

export default Card;
