import React from 'react';
import { shallow } from 'enzyme';
import About from '../../pages/about';

describe('About page', () => {
  it('Should have Layout component', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.find('Layout')).toHaveLength(1);
  });
});
