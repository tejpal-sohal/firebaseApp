import React from 'react';
import { shallow } from './enzyme';

import Modal from '../Modal.js';

describe('Modal Comp Check', () => {

  it('renders Modal with class backdrop', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.backdrop')).toBeDefined(); 
  });


  it('renders Modal with class backdrop', () => {
      
    const mockCallBackClick = jest.fn((e)=>  <div class="backdrop"></div>);

    const wrapper = shallow(<Modal onClick={mockCallBackClick}  />);
    wrapper.simulate('click');
  });


})