import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

describe('<Stage />', () => {
  // smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(<Stage/>, div);

      ReactDOM.unmountComponentAtNode(div);
    });
  //snapshot test
    it('renders this UI as expected', () => {
      const tree = renderer.create(<Stage />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
