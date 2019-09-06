import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Buttons, { abstractedStrike } from './Components/Buttons';
import Display from './Components/Display';

test('tests that clicking strike button fires a click', () => {
  const { getByTestId } = render(
    <Buttons />
  );
   const strikeBtnTxt = getByTestId('strike');
   fireEvent.click(strikeBtnTxt);

});

test('displays the count', () => {
  const { getByTestId } = render(<Display />);
  expect(getByTestId('strike-count')).toHaveTextContent('Strikes');
})

test('function resets Strike value', () => {
  expect(abstractedStrike(2)).toBe(0);
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

