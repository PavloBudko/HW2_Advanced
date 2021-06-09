let firstNumber;
let secondNumber;
let firstNumberInteger;
let secondNumberInteger;

function integer(number) {
  if ((Number.isInteger(Number(number)) && Number(number)) || !Number(number)) {
    return true;
  } else {
    return false;
  }
}

do {
  firstNumber = +prompt("Введіть перше ціле число");
  firstNumberInteger = integer(firstNumber);
} while (!firstNumberInteger);

do {
  secondNumber = +prompt("Введіть друге ціле число");
  econdNumberInteger = integer(secondNumber);
} while (!econdNumberInteger || firstNumber == secondNumber);

const includeEven = confirm("Пропустим парні?");

const maximumNumber = Math.max(firstNumber, secondNumber);
const minmumNumber = Math.min(firstNumber, secondNumber);
let sum = 0;


for (let i = minmumNumber; i <= maximumNumber; i++) {
  if (includeEven && i % 2 === 0) {
    continue;
  }
  sum += i;    
}

alert(`Сума ${sum}`);