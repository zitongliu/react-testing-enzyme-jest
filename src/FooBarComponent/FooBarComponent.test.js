import React from 'react';
import { shallow } from 'enzyme';
import FooBarComponent from './FooBarComponent';

const wrapper = shallow(<FooBarComponent />);

describe('Testing the FooBarComponent', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<FooBarComponent />);
  });

  it('include 1 div with class foo-bar', () => {
    expect(wrapper.find('div.foo-bar')).toHaveLength(1);
  });

  it('includes a h2 tag with class foo', () => {
    expect(wrapper.find('h2.foo')).toHaveLength(1);
  });

  it('includes a p tag with content bar', () => {
    expect(wrapper.find('p.bar').text()).toBe('Bar');
  });

})
