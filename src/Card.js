import React from 'react';
import './Card.css';

const Card = (props) => {
  const mapped = Object.keys(props.yearData).map( year => {
    if(props.yearData[year] < 0.5){
      return (
        <li className="bad">{year}: {props.yearData[year]}</li>
      )
    }

    return (
      <li className="good">{year}: {props.yearData[year]}</li>
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

export default Card;