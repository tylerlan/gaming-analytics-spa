import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MetricsOfTheDay from './daily-stats';

configure({ adapter: new Adapter() });

describe('MetricsOfTheDay', () => {
  it('Renders to the page', () => {
    const component = shallow(<MetricsOfTheDay />);
    expect(component).toMatchSnapshot();
  });
  it('Renders with all the correct properties', () => {
    const component = shallow(<MetricsOfTheDay />);
    expect(component.find('#MetricsOfTheDay').length).toBe(1);
  });
});
