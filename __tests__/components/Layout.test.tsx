import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Layout, { Props } from '../../components/Layout';

const createTestProps = function (props: Props): Props {
  return {
    title: 'My Title',
    ...props,
  };
};

let wrapper: ShallowWrapper, props: Props;

beforeEach(() => {
  props = createTestProps({});
  wrapper = shallow(<Layout {...props} />);
});

describe('Layout component', () => {
  it('Should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have Header component', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('Should have correct props', () => {
    expect(props.title).toBe('My Title');
  });

  it('Should have correct props', () => {
    expect(wrapper.find('title').text()).toEqual(props.title);
    wrapper.setProps({ title: 'My Title 2' });
    expect(wrapper.find('title').text()).not.toEqual(props.title);
    expect(wrapper.find('title').text()).toEqual('My Title 2');
  });
});
