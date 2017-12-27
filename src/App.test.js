import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

// const middleware = [promiseMiddleware(), thunkMiddleware.withExtraArgument({ API })];

describe('App', () => {
  it('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders a component with props as specified', () => {
    const mockStore = configureStore();
    // const mockStore = configureStore(middleware);
    const component = shallow(<App store={mockStore} />);
    expect(component).toMatchSnapshot();
  });
});
