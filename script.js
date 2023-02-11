let arrNumbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log('Начальний массив :',arrNumbers);




/////1/////
let sumPositiveElements = 0;
let quantityPositiceElements = 0;

arrNumbers.forEach((el) => {
    if(el > 0){
        sumPositiveElements = sumPositiveElements + el;
        quantityPositiceElements++;
    }
})
console.log('1.Знайти суму та кількість позитивних елементів',sumPositiveElements,quantityPositiceElements);
/////1/////

/////2////

let minNumber = arrNumbers[0];
let indexMinNumber = 0;

arrNumbers.forEach((el) => {
    if(minNumber > el){
        minNumber = el;
    } 
})
indexMinNumber = arrNumbers.indexOf(minNumber);
console.log('2.Знайти мінімальний елемент масиву та його порядковий номер.',minNumber,indexMinNumber);

////2//////

////3/////

let maxNumber = arrNumbers[0];
let indexMaxNumber = 0;

for (let i = 0; i < arrNumbers.length; i++) {
    const element = arrNumbers[i];
    if(maxNumber < element){
        maxNumber = element;
    } 
}
indexMaxNumber = arrNumbers.indexOf(maxNumber);
console.log('3.Знайти максимальний елемент масиву та його порядковий номер',maxNumber,indexMaxNumber);

////3/////

////4////
let quantityOfNegativeNumber = 0;

arrNumbers.forEach((el) => {
    if(el < 0) quantityOfNegativeNumber++;
})

console.log('4.Визначити кількість негативних елементів',quantityOfNegativeNumber);
////4////

////5////

let quantityOfOddNumbers = 0;

arrNumbers.forEach((el) => {
    if(el % 2 !== 0 && el > 0) quantityOfOddNumbers++;
})

console.log('5.Знайти кількість непарних позитивних елементів',quantityOfOddNumbers);

/////5/////

///6////
let evenPositiveNumber = 0;

const evenNumbers = arrNumbers.filter((el) => {
    return el % 2 === 0 && el > 0;
})
//console.log(evenNumbers);
evenPositiveNumber = evenNumbers.length-1;
console.log('6.Знайти кількість парних позитивних елементів',evenPositiveNumber);

///6////

////7////
let sumEvenPositiveNumber = 0;

evenNumbers.forEach((el) => {
    sumEvenPositiveNumber = sumEvenPositiveNumber + el;
})

console.log('7.Знайти суму парних позитивних елементів',sumEvenPositiveNumber);

/////7/////

//////8//////

let sumOddPositiveNumber = 0;

arrNumbers.reduce((accamulator, current) => {
    if(current % 2 !== 0 && current > 0) sumOddPositiveNumber+=current;
})
console.log('8.Знайти суму непарних позитивних елементів',sumOddPositiveNumber);

////8////

/////9/////

let multiplicationPositiveNumber = 1;
const arrForMultiplication = [];

arrNumbers.map((el) => {
    if(el > 0) arrForMultiplication.push(el);
})
//console.log(arrForMultiplication)

arrForMultiplication.forEach((el) => {
    multiplicationPositiveNumber = multiplicationPositiveNumber * el;
})

console.log('9.Знайти добуток позитивних елементів',multiplicationPositiveNumber);

////9/////

/////10/////

const arrForZeroing = [];

arrNumbers.map(el => {
    if(el === maxNumber) arrForZeroing.push(el);
    else arrForZeroing.push(0);
})
console.log('10.Знайти найбільший серед елементів масиву, решту обнулити. (решта елементів має дорівнювати 0)\n',arrForZeroing);
