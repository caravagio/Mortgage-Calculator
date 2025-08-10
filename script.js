// script.js
document.getElementById('mortgage-form').addEventListener('submit', function(e) {
e.preventDefault();
// Get input values
const loanAmount = parseFloat(document.getElementById('loanAmount').value);
const interestRate = parseFloat(document.getElementById('interestRate').value);
const loanTerm = parseInt(document.getElementById('loanTerm').value);
// Calculate monthly payment
const monthlyInterestRate = (interestRate / 100) / 12;
const numberOfPayments = loanTerm * 12;
const monthlyPayment = (loanAmount * monthlyInterestRate) /
(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
// Calculate total interest
const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
// Display results
document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
document.getElementById('results').classList.remove('hidden');
});
