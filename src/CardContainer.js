import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = (props) => {
  const mapped = Object.keys(props.data.data).map( (key, index) => <Card location={props.data.data[key].location} yearData={props.data.data[key].data} key={index + Date.now()} /> )

  return <div className="card-container">{mapped}</div>
}

export default CardContainer;
