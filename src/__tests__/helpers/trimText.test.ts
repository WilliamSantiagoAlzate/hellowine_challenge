import { trimText } from '../../helpers/trimText';

describe('trimText', () => {
  const text: string = 'Hello';
  test('Return the same text', () => {
    expect(trimText(text, 5)).toEqual('Hello');
  });
  test('Return a trim text', () => {
    expect(trimText(text, 4)).toEqual('Hell...');
  });
});