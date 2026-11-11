const { calculateTotalWithTax } = require('../../src/calculator');

describe('Integration Tests: Calculator Complex Flow', () => {
  test('should correctly calculate total price with tax', () => {
    const total = calculateTotalWithTax(100, 0.2);
    expect(total).toBe(120);
  });
});
