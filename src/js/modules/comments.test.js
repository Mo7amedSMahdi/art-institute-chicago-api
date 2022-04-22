import { countNumberOfComments, setItems } from './__mocks__/comments.js';

const items = [
  {
    creation_date: '2022-04-22',
    username: 'Jane',
    comment: 'Hello',
  },
  {
    username: 'Mohammed',
    creation_date: '2022-04-22',
    comment: 'Hi',
  },
  {
    creation_date: '2022-04-22',
    username: 'Mohammed',
    comment: 'Hi again',
  },
  {
    username: 'Mohammed',
    creation_date: '2022-04-22',
    comment: 'Welcome',
  },
];

test('Comments count test', () => {
  setItems(items);
  expect(countNumberOfComments()).toBe(4);
});
