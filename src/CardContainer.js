import React from 'react';
import Card from './Card';

const CardContainer = (props) => {

  let mapped = Object.keys(props.data.data).map( key => <Card location={props.data.data[key].location} yearData={props.data.data[key].data} trueProp={true}/> )

// Object.keys(props.data.data[key].location.data).map((year) => {
//   return year[year]
// })

  return(
    <div>
      {mapped}
    </div>
  )
}

export default CardContainer;
