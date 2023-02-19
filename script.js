/////////////////////1///////////
// const arr = [2,'d','34',4,'/',6,7,3,5,2,'r',true];

// function calculateAverage (arr){
//     let newArr;
//     let average = 0;

//     console.log(arr);   
//     newArr = arr.filter((elem) =>{
//         return typeof elem === 'number';
//     })

//     console.log(newArr); 
//     newArr.forEach((elem) => {
//         average = average + elem;
//     })
//     average = average / newArr.length;

//     return average;
// }

// console.log(calculateAverage(arr));
//////////1////////////////

///////////2////////////////

// let firstNum = Number(prompt('Введите 1 число'));
// let secondNum = Number(prompt('Введите 2 число'));
// let symbol = prompt('Введите знак число');


// function doMath(x, znak, y){
//     let operation = 0

//     if(znak === '+') return operation = x + y;
//     else if(znak === '-') return operation = x - y;
//     else if(znak === '/') return operation = x / y;
//     else if(znak === '^') return operation = Math.pow(x,y);
//     else if(znak === '%') return operation = x % y;
//     else if(znak === '*') return operation = x * y;
// }

// console.log(doMath(firstNum,symbol,secondNum));

////////////2/////////////////

////////////3////////////////

// let mainArrLength = Number(prompt('Длина основного масива').trim());
// let subArrLength = Number(prompt('Длина внутрених масивов').trim());
// let box = [];
// let countEnter =  0;
// console.log(mainArrLength,subArrLength);

// while (countEnter < mainArrLength){
//     let arguments = prompt(`Введите элементы для внутренего масива № ${countEnter + 1}, в количестве   (${subArrLength}) штук, значения вводить через пробел`);  
//     box.push(arguments);
//     countEnter++; 
// }


// for (let i = 0; i < box.length; i++) {
//     box[i] = box[i].split(' ');
// }

// let twoArr = [];

// function size (mainArrLength,subArrLength){

//     for (let i = 0; i < mainArrLength; i++) {
//         twoArr.push([]); 
//         for (let j = 0; j < subArrLength; j++) {
//             twoArr[i].push(undefined);
//         }
//     }
//     return function add(...arg) {
//         arg = arg.flat(1);
//         for (let i = 0; i < mainArrLength; i++) {
//             for (let j = 0; j < subArrLength; j++) {
//                 if(arg[i][j] === '') {
//                     twoArr[i].shift();
//                     twoArr[i].push(undefined);
//                     continue;
//                 } else{
//                     twoArr[i].shift();
//                     twoArr[i].push(arg[i][j]);
//                 }
//             } 
//         }

//         return twoArr;
//     }  
// }

// let innerFunction = size(mainArrLength,subArrLength);
// let result = innerFunction(box);
// console.log(result);

// ---------------2 variant-------------------------
// let twoArr = []

// function size (mainArrLength,subArrLength){
//     for (let i = 0; i < mainArrLength; i++) {
//         twoArr.push([]); 
//         for (let j = 0; j < subArrLength; j++) {
//             twoArr[i].push(undefined);
//         }
//     }
//     return function add(...arg) {
//         let counter = 0;
//         console.log(arg);

//         for (let i = 0; i < mainArrLength; i++) {
//             for (let j = 0; j < subArrLength; j++) {
//                 twoArr[i].shift();
//                 twoArr[i].push(arg[counter]);
//                 counter++;
//             } 
//         }

//         return twoArr;
//     }


// }

// let innerFunction = size(2,7);
// let result = innerFunction(2,4,5,144,3,'10',8,3,554,true,4,22,6,1,false);

// console.log(result);


/////////////4////////////////////

// const formatter = (string) => string.toUpperCase();


// function deleteLetters (...arg){
//     let countEteration = 0;
//     let string = arg[0];
//     let func;
//     let newStr = [];
//     arg.splice(0,1);

//     for (let i = 0; i < string.length; i++) {

//         if(typeof arg[i] === 'function'){
//             func = arg [i];
//             arg.splice(i,1);
//         } 

//         for (let j = 0; j < arg.length; j++) {

//             if(string[i] === arg[j]) {
//                 countEteration++;
//             } 
//         }

//         if(countEteration === 0){
//             newStr.push(string[i]);
//         } 
//         countEteration = 0;

//     }

//     newStr = newStr.join('');
//     console.log(newStr);


//     return func(newStr);
// }


// console.log(deleteLetters('HellO Im maks', 'h', 'o', 'w','m',formatter));


