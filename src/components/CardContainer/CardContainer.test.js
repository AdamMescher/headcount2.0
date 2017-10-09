import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, configure } from 'enzyme';
import DistrictRepository from '../../helper';
import KinderData from '../../../data/kindergartners_in_full_day_program.js';
import App from '../App/App';
import CardContainer from './CardContainer';

configure({ adapter: new Adapter() });

describe('CardContainer component', () => {

  const handleClicked = jest.fn();

  const kinderData = new DistrictRepository(KinderData);

  const renderedCardContainer = shallow(<CardContainer
    dataSet={kinderData}
    clickedCards={[]}
    handleClicked={handleClicked}
    comparisonData={{comparison: {}}}
                                        />);

  it('should return 181 Cards by default', () => {
    expect(renderedCardContainer.find('Card').length).toBe(181);
  });
});
