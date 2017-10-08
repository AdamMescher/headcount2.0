import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
// import './ComparisonContainer.css';

const ComparisonContainer = (props) => {
  const keys = Object.keys(props.clickedCards);

  const mapped = keys.map( (key, index) => {
    return <Card
      cardType='districtCard'
      location={props.clickedCards[key].location}
      yearData={props.clickedCards[key].yearData}
      key={index+1 + Date.now()}
           />
  })
    const comparison = <Card
      cardType='comparisonCard'
      comparisonData={props.comparisonData}
      key={Date.now()}
           />

  return (
    <div className="comparison-card-container">
      {mapped[0]}
      {
        mapped.length === 2 &&
        comparison
      }
      {mapped[1]}
    </div>
  )
}

// ComparisonContainer.propTypes = {
//
// }


export default ComparisonContainer;
