import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  const mapped = Object.keys(props.data.data).map( key => <Card location={props.data.data[key].location} yearData={props.data.data[key].data} /> )

  return <div>{mapped}</div>
}

export default CardContainer;
