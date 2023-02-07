let arr = [];
let countErr = 1;
let arrLength;
let randomValue;
let multiplication = 1;

while(countErr > 0 ){
    countErr = 0;
    arrLength = prompt('Enter length of array:');

    if(arrLength === null){
        countErr++;
        continue;
    }

    for(j =0; j < arrLength.length; j++){
        if( (arrLength.charCodeAt(j) > 32 && arrLength.charCodeAt(j) < 48) || (arrLength.charCodeAt(j) > 57 && arrLength.charCodeAt(j) < 127) ){
            if(arrLength.charCodeAt(j) === 45 || arrLength.charCodeAt(j) === 46){
                continue;
            }
            countErr++;
            continue;
        }
    }
    arrLength = Number(arrLength);
    arrLength = Math.round(arrLength);

    if((arrLength >= 0 && arrLength <= 2) || arrLength >= 10){
        countErr++;
        continue;
    } 

    if(arrLength < -2 && arrLength > -10){
        arrLength = Math.abs(arrLength);
    }  else if(arrLength <= -10 || (arrLength >= -2 && arrLength < 0)){
        countErr++;
        continue;
    }
}

for (i = 0; i < arrLength; i++) {
    randomValue = Math.round(Math.random()*10);
    arr.push(randomValue);
    multiplication = multiplication * arr[i];   
}

console.log(arr);
console.log(multiplication);
