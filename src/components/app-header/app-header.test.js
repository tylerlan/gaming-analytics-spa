import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppHeader from './app.header';

configure({ adapter: new Adapter() });

describe('AppHeader', () => {
  it('Renders to the page', () => {
    const component = shallow(<AppHeader />);
    expect(component).toMatchSnapshot();
  });
  it('Renders with all the correct properties', () => {
    const component = shallow(<AppHeader />);
    expect(component.find('#AppHeader').length).toBe(1);
  });
});
