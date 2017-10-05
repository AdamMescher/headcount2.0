import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import ComparisonContainer from './ComparisonContainer';
import './CardContainer.css';

const CardContainer = (props) => {
  const mapped = Object.keys(props.data.data).map( (key, index) => <Card cardType='districtCard' location={props.data.data[key].location} yearData={props.data.data[key].data} key={index + Date.now()} /> )

  return (
    <div>
      <ComparisonContainer />
      <div className="card-container">{mapped}</div>
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired
}


export default CardContainer;
