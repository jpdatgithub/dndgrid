import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Board from '../Game/Board';

const testArray = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b',
'c', 'c', 'c', 'c', 'd', 'd', 'd', 'd'];

const slicedRows = [
  ['a', 'a', 'a', 'a'],
  ['b', 'b', 'b', 'b'],
  ['c', 'c', 'c', 'c'],
  ['d', 'd', 'd', 'd']
];

const secondRow = ['c', 'c', 'c', 'c'];

const sut = new Board({cells: testArray, cellsPerRow: 4});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('getRow, should return a sliced row from the cells array', () => {
  const result = sut.getRow(testArray, 4, 2);
  
  expect(result === secondRow);
});

test('getAllRows, should return an array of rows', () => {
  const result = sut.getAllRows(testArray, 4);
  expect(result === slicedRows);
});

test('renderCell, cell value should be rendered', () => {
  render(sut.renderCell(0, 1), container);
  const renderedCell = screen.getByRole('button');
  expect(renderedCell).toHaveClass('cell');
  expect(renderedCell).toHaveTextContent('b');
});

test('renderCellRow, ul containing cells as li elements should be rendered', () => {
  render(sut.renderCellRow(secondRow, 1));
  
});