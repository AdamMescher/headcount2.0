import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, configure } from 'enzyme';
import DistrictRepository from './helper'
import KinderData from '../data/kindergartners_in_full_day_program.js';
import App from './App';



configure({ adapter: new Adapter() });


describe('App component', () => {

  const renderedApp = mount(<App />);
  const kinderData = new DistrictRepository(KinderData);

  it('should exist', () => {
      expect(renderedApp).toBeDefined()
  });

  it('should render Controls', () => {
    expect(renderedApp.find('Controls').length).toEqual(1);
  });

  it('should render CardContainer', () => {
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it('should have a default state (contain KinderData)', () => {
    expect(renderedApp.state().search).toEqual(kinderData);
  });

})
