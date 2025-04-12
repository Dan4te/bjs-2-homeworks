"use strict"

function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d == 0) {
    return [-b / (2 * a)];
  } else if (d > 0) {
    return [(-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d) ) / (2 * a)]
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12; // процентную ставку
  let loanBody = amount - contribution; // тело кредита
  let payment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1))); // Ежемесячная оплата 
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);
}
