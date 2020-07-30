import React from 'react';
import { shallow } from './enzyme';

import Title from '../Title';

describe('Title Comp Check', () => {

  it('renders Title class', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('.title')).toBeDefined();
  });


  it('renders Title h1 with name', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.find('h1').text()).toContain("FireGram")
  });

  it('renders Title h2 with name', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('h2')).toBeDefined();
    expect(wrapper.find('h2').text()).toContain("Your Pictures")
  });

  it('renders Title p with words', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('p')).toBeDefined();
    expect(wrapper.find('p').text()).toContain("Check it")
  });


})