function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculateTotalWithTax(amount, taxRate) {
  const tax = multiply(amount, taxRate);
  return add(amount, tax);
}

module.exports = { add, multiply, calculateTotalWithTax };
