import { sum } from './script';

describe('sum', () => {
  it('returns sum of params', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
