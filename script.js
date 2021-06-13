let inputFirstNumber = prompt(`Введіть перше число:`);
let inputSecondNumber = prompt(`Введіть друге число:`);
const firstNumber = Number(Math.trunc(inputFirstNumber));
const secondNumber = Number(Math.trunc(inputSecondNumber));

while ((isNaN(firstNumber)) || isNaN(secondNumber)) {
    alert(`Спробуйте ще раз`);
    inputFirstNumber = prompt(`Введіть перше число:`);
    inputSecondNumber = prompt(`Введіть друге число:`);
};

const maximumNumber = Math.max(firstNumber, secondNumber);
const minimumNumber = Math.min(firstNumber, secondNumber);

const skipEvens = confirm(`Пропустим парні числа???`);
let sum = 0;

for (i = minimumNumber; i <= maximumNumber; i++) {
    if (i % 2 === 0 && skipEvens) {
        continue;
    }
    sum+=i;
}

alert(`Сума чисел = ` + sum);
console.log(sum);
