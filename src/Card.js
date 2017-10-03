import React from 'react';

const Card = (props) => {
  let mapped = Object.keys(props.yearData).map((year) => {
    return <li>{year}:{props.yearData[year]}</li>
  })
  return(
    <div>
      <h1>{props.location}</h1>
      <ul>
        { mapped }
      </ul>
    </div>
  )
}

export default Card;
