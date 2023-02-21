const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30,
    },
    foo2: {
        k: 23,
        p: 13,
    }
}
console.log(obj)
const newObj = {

}
const convert = (obj) => {
    Object.keys(obj).forEach((el) => {
        if(typeof obj[el] === 'object'){
            for (const key in obj[el]) {
                newObj[key] = obj[el][key];
            }
        } else newObj[el] = obj[el];
    })
    // for (const key in obj) {
    //     //console.log(key) 
    //     if(typeof obj[key] === 'object'){
    //         for (const keyInner in obj[key]) {
    //             console.log(keyInner)                
    //             newObj[key] = obj[key][keyInner];
    //         }
    //     } else {
    //         newObj[key] = obj[key];
    //     }
    // }
    return newObj;
}
console.log(convert(obj));