import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, configure } from 'enzyme';
import App from './App';
import DistrictRepository from '../../helper';
import KinderData from '../../../data/kindergartners_in_full_day_program.js';



configure({ adapter: new Adapter() });


describe('App component', () => {

  const renderedApp = mount(<App />);
  const kinderData = new DistrictRepository(KinderData);

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
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

  it('should have a default state (empty array of clicked cards)', () => {
    expect(renderedApp.state().clickedCards).toEqual([]);
  });

  it('should have a default state (empty array of clicked cards)', () => {
    expect(renderedApp.state().clickedCards.length).toEqual(0);
  });

  it('should add data to clickedCards', () => {
    renderedApp.find('.card').first().simulate('click');
    expect(renderedApp.state().clickedCards.length).toEqual(1);
  });

  it('should add data to clickedCards', () => {
    renderedApp.find('.card').at(2).simulate('click');
    expect(renderedApp.state().clickedCards.length).toEqual(2);
  });

  it('should remove data from clickedCards', () => {
    renderedApp.find('.card').first().simulate('click');
    expect(renderedApp.state().clickedCards.length).toEqual(1);
  });

  it('should remove data from clickedCards', () => {
    renderedApp.find('.card').at(2).simulate('click');
    expect(renderedApp.state().clickedCards.length).toEqual(0);
  });

  it('should get all items from search with no search term', () => {
    renderedApp.find('input').simulate('change', { target: { value: '' } });
    expect(Object.keys(renderedApp.state().search.data).length).toEqual(181);
  });

  it('should remove items from search', () => {
    renderedApp.find('input').simulate('change', { target: { value: 'q' } });
    expect(Object.keys(renderedApp.state().search.data).length).toEqual(1);
  });


});
