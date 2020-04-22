import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header component', () => {
  it('Should have 2 Links, to Index & About pages', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('Link')).toHaveLength(2);
    expect(wrapper.find('Link').get(0).props.href).toEqual('/');
    expect(wrapper.find('Link').get(1).props.href).toEqual('/about');
  });
});
