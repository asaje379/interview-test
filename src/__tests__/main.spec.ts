import { add } from '../main';

describe('Test add function', () => {
  it('should return 5 for a = 2 and b = 3', () => {
    expect(add(2, 3)).toBe(5);
  });
});
