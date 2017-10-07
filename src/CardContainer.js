import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import ComparisonContainer from './ComparisonContainer';
import './CardContainer.css';

const CardContainer = (props) => {
  const mapped = Object.keys(props.data.data)
                       .map( (key, index) => (
                         <Card
                           cardType='districtCard'
                           isClicked={props.clickedCards.find(cc => cc.location === props.data.data[key].location)}
                           location={props.data.data[key].location}
                           yearData={props.data.data[key].data}
                           key={index + Date.now()}
                           handleClicked={props.handleClicked}
                         />
                       ))
  return (
    <div>
      { props.clickedCards.length > 0 &&
        <ComparisonContainer clickedCards={props.clickedCards.reduce((acc, card) => {
          acc[card.location] = card;
          console.log('acc: ', acc);
          return acc;
        }, {})}/>
      }
      <div className="card-container">{mapped}</div>
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired
}


export default CardContainer;
