import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

describe('<Chat />', () => {
  // smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(<Chat/>, div);

      ReactDOM.unmountComponentAtNode(div);
    });
  //snapshot test
    it('renders this UI as expected', () => {
      const tree = renderer.create(<Chat />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
