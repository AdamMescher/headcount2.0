import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
// import './ComparisonContainer.css';

const ComparisonContainer = (props) => {
  const mapped = Object.keys(props.clickedCards).map( (key, index) => {
    return <Card
      cardType='districtCard'
      location={props.clickedCards[key].location}
      yearData={props.clickedCards[key].yearData}
      key={index + Date.now()}
           />
  })
  return <div>{mapped}</div>


}

// ComparisonContainer.propTypes = {
//
// }


export default ComparisonContainer;
