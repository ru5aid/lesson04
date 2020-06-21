'use strict';

let money = prompt('Ваш месячный доход?','1200');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','vacation, shoping');
let deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeof = function(data){
    console.log(data, typeof(data));
    
};

showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);

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

let getAccumulatedMonth = function(money, amount1, amount2){
    return money -  (amount1 + amount2);
};
let accumulatedMonth = getAccumulatedMonth(1200, 700, 400);

console.log(accumulatedMonth);


let mission = 4500;
let budgetDay = accumulatedMonth / 30;

console.log(Math.ceil(mission / accumulatedMonth));
console.log(Math.floor(budgetDay));

let getStatusIncome = function(){
   if (budgetDay > 1200) {
    return ('У вас высокий уровень дохода');
} else if((budgetDay > 600) && (budgetDay < 1200)) {
    return ('У вас средний уровень дохода');
} else if((budgetDay < 600) && (budgetDay > 0)) {
    return ('К сожалению у вас уровень дохода ниже среднего');
} else {
    return ('Что то пошло не так');
}
};
console.log(getStatusIncome());



let getExpensesMonth = function(amount1, amount2){
    return amount1 + amount2;
}

let getTargetMonth = function(mission, accumulatedMonth){
    return mission / accumulatedMonth;
}
getExpensesMonth();
getTargetMonth();
