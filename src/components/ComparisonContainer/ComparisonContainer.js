import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './ComparisonContainer.css';

const ComparisonContainer = (props) => {
  const keys = Object.keys(props.clickedCardData);

  const mapped = keys.map( (key, index) => {
    return (<Card
      cardType='districtCard'
      isClicked={(props.clickedCards.find(
        cc => cc.location === props.clickedCardData[key].location) !== undefined
      )}
      location={props.clickedCardData[key].location}
      yearData={props.clickedCardData[key].yearData}
      key={index+1 + Date.now()}
      handleClicked={props.handleClicked}
    />);
  });

  const comparison = <Card
    cardType='comparisonCard'
    comparisonData={props.comparisonData}
    key={Date.now()}
  />;

  return (
    <div className="comparison-card-container">
        {mapped[0]}
        {
          mapped.length === 2 &&
          comparison
        }
        {mapped[1]}
    </div>
  );
};

ComparisonContainer.propTypes = {
  clickedCardData: PropTypes.object,
  comparisonData: PropTypes.object,
  handleClicked: PropTypes.func
};

export default ComparisonContainer;
