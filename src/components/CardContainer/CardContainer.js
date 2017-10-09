import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';


const CardContainer = (props) => {
  const mapped = Object.keys(props.dataSet.data).map( (key, index) => (
     <Card
       cardType='districtCard'
       isClicked={
         (
           props.clickedCards.find(
           cc => cc.location === props.dataSet.data[key].location) !== undefined
         )
       }
       location={props.dataSet.data[key].location}
       yearData={props.dataSet.data[key].data}
       key={index + Date.now()}
       handleClicked={props.handleClicked}
     />
   ));
  return (
    <div>
      { props.clickedCards.length > 0 &&
        <ComparisonContainer
          handleClicked={props.handleClicked}
          comparisonData={props.comparisonData}
          clickedCards={props.clickedCards}
          clickedCardData={props.clickedCards.reduce((acc, card) => {
            acc[card.location] = card;
            return acc;
          }, {})}
        />
      }
      <div className="card-container">{mapped}</div>
    </div>
  );
};

CardContainer.propTypes = {
  dataSet: PropTypes.object.isRequired,
  clickedCards: PropTypes.array,
  comparisonData: PropTypes.object,
  handleClicked: PropTypes.func
};

export default CardContainer;
