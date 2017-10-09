import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, configure } from 'enzyme';
import DistrictRepository from '../../helper';
import KinderData from '../../../data/kindergartners_in_full_day_program.js';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card component', () => {
  Date.now = jest.fn(() => 1482363367071);
  const handleClicked = jest.fn();
  const kinderData = new DistrictRepository(KinderData);

  const renderedCard = mount(<Card
    cardType='districtCard'
    isClicked={false}
    location={kinderData.data.COLORADO.location}
    yearData={kinderData.data.COLORADO.data}
    key={1482363367071}
    handleClicked={handleClicked}
                             />);
  it.skip('should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });

  it('should render an h2', () => {
    expect(renderedCard.find('h2').length).toBe(1);
  });

  it('should render an ul', () => {
    expect(renderedCard.find('ul').length).toBe(1);
  });

  it('should render 11 lis', () => {
    expect(renderedCard.find('li').length).toBe(11);
  });

});
