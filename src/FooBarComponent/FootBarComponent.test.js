import { shallow } from 'enzyme';
import FooBarComponent from './components';

const wrapper = shallow(<FooBarComponent />);

describe('Testing the FooBarComponent', () => {
  let wrapper;
  
  beforeEach( () => { 
    wrapper = shallow(<FooBarComponent />); 
  });
})