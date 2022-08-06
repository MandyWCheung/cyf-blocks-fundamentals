/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var earnings, value, all_values, expenses;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
all_values = [];
expenses = [];


document.getElementById('button').addEventListener('click', (event) => {
  value = getNumberOrString(document.getElementById('amount').value);
  all_values.unshift(getNumberOrString(document.getElementById('amount').value));
  if (value > 0) {
    earnings.unshift(value);
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    new_li.innerText = earnings[0];

    element_earnings_list.appendChild(new_li);
  } else if (value < 0) {
    expenses.unshift(value);
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = expenses[0];

    element_expenses_list.appendChild(new_li2);
  }
  let element_total_earnings = document.getElementById('total-earnings');
  element_total_earnings.innerText = earnings.reduce((a,b) => a+b, 0);
  let element_total_expenses = document.getElementById('total-expenses');
  element_total_expenses.innerText = expenses.reduce((a,b) => a+b, 0);
  let element_balance = document.getElementById('balance');
  element_balance.innerText = all_values.reduce((a,b) => a+b, 0);

});
