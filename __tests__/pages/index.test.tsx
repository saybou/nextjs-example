import React from 'react';
import { shallow } from 'enzyme';
import Index from '../../pages/index';

describe('Index page', () => {
  it('Should have Layout component', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper.find('Layout')).toHaveLength(1);
  });
});
