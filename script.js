let inputFirstNumber = prompt(`Введіть перше число:`, 0);
let inputSecondNumber = prompt(`Введіть друге число:`, 0);
let firstNumber = Number(Math.trunc(inputFirstNumber));
let secondNumber = Number(Math.trunc(inputSecondNumber));

while ((isNaN(firstNumber)) || isNaN(secondNumber)) {
    alert(`Спробуйте ще раз`);
    inputFirstNumber = prompt(`Введіть перше число:`, 0);
    inputSecondNumber = prompt(`Введіть друге число:`, 0);

    firstNumber = Number(Math.trunc(inputFirstNumber));
    secondNumber = Number(Math.trunc(inputSecondNumber));
};

const skipEvens = confirm(`Пропустим парні числа???`);

let biggestNumber;
let smallestNumber;
if (firstNumber > secondNumber) {
    biggestNumber = firstNumber;
    smallestNumber = secondNumber;
} else {
    biggestNumber = secondNumber;
    smallestNumber = firstNumber;
};
let sum = 0;
for (smallestNumber; smallestNumber <= biggestNumber; smallestNumber++) {
    if (skipEvens) {
        if (smallestNumber % 2 === 0) continue;
    }
    sum = sum + smallestNumber;
};

alert(`Сума чисел= ` + sum);
console.log(sum);
