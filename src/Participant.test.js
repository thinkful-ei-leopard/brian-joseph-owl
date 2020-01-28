import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

describe('<Participant />', () => {
    it('renders withou crashing', () => {
      const div = document.createElement('div');

      ReactDOM.render(<Participant/>, div);

      ReactDOM.unmountComponentAtNode(div);
    });
});
