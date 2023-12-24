import { isArmstrongNumber } from '../01';

describe('Armstrong number test cases', () => {
  it('should returns true for 9', () => {
    expect(isArmstrongNumber(9)).toBe(true);
  });

  it('should returns false for 10', () => {
    expect(isArmstrongNumber(10)).toBe(false);
  });

  it('should returns true for 153', () => {
    expect(isArmstrongNumber(153)).toBe(true);
  });

  it('should returns false for 154', () => {
    expect(isArmstrongNumber(154)).toBe(false);
  });
});
