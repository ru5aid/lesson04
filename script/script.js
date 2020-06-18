'use strict';

let money = prompt('Ваш месячный доход?','1200');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','vacation, shoping');
let deposit = confirm('Есть ли у вас депозит в банке?');

console.log(typeof money);
console.log(typeof addExpenses);
console.log(addExpenses.toLowerCase().split(', '));
console.log(typeof deposit);

let expenses1 = prompt('Введите обязательную статью расходов?','car');
let amount1 = +prompt('Во сколько это обойдется?','700');
let expenses2 = prompt('Введите обязательную статью расходов?','lease');
let amount2 = +prompt('Во сколько это обойдется?','400');

console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);

let budgetMonth = +money - (amount1 + amount2);
let mission = 4500;
let budgetDay = budgetMonth / 30;

console.log(budgetMonth);
console.log(Math.ceil(mission / budgetMonth));
console.log(Math.floor(budgetDay));

if (budgetDay > 1200  ){
    console.log('У вас высокий уровень дохода');
} else if((budgetDay > 600) && (budgetDay < 1200)){
    console.log('У вас средний уровень дохода');
} else if((budgetDay < 600) && (budgetDay > 0)){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}


function getExpensesMonth(amount1, amount2){
    return amount1 + amount2;
    
}
getExpensesMonth();