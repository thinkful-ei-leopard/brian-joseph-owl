import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

describe('<Participant />', () => {
  // smoke test
    it('renders without crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(<Participant/>, div);

      ReactDOM.unmountComponentAtNode(div);
    });
  //snapshot test
    it('renders this UI as expected', () => {
      const tree = renderer.create(<Participant />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
