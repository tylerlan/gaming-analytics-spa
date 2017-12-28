import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home';

configure({ adapter: new Adapter() });

describe('Home', () => {
  it('Renders to the page', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
  it('Renders with all the correct properties', () => {
    const component = shallow(<Home />);
    expect(component.find('#Home').length).toBe(1);
  });
});
