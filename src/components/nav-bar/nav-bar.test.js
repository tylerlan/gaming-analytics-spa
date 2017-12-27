import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from './nav-bar';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
  it('Renders to the page', () => {
    const component = shallow(<NavBar />);
    expect(component).toMatchSnapshot();
  });
  it('Renders with all the correct properties', () => {
    const component = shallow(<NavBar />);
    expect(component.find('#NavBar').length).toBe(1);
  });
});
