const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

let checkBalance = prompt('Перевірити баланс (Так, Ні)').toLowerCase()
function getMoney (){
 return new Promise((resolve, reject)=>{
     if (checkBalance === 'так'){
         resolve()
     } else if(checkBalance === 'ні'){
        reject()
     }
 })
}

// Если пользователь выбрал "Так", то выводим баланс выбранной валюты
// Если пользователь выбрал "Ні", то запрашиваем валюту для снятия денег
getMoney()
    .then(()=>{
        let flag = 1
        while (flag){
            // Получаем список доступных валют для снятия денег
            let checkBalanceCurrency = prompt(`Введіть валюту для перевірки балансу: (${Object.keys(userData)})`).toUpperCase()
            if(Object.keys(userData).includes(checkBalanceCurrency)){
                console.log(`Баланс становить:${userData[checkBalanceCurrency]} ${checkBalanceCurrency}`)
                flag = 0
            }
        }
    })
    .catch(()=>{
        let flag = 1
        while (flag){
            let currency = prompt(`Введіть валюту для зняття: (${availableCurrency()})`).toUpperCase()
            if((Object.keys(userData).includes(currency) || Object.keys(bankData).includes(currency)) && (bankData[currency].max > 0)){
                // Проверяем, что сумма для снятия находится в допустимых пределах
                let withdraw = +prompt(`Введіть суму зняття:`)
                validateWithdrawal(withdraw,currency)
                flag = 0
            }
        }
    })
    .finally(()=> console.log('Дякую, гарного дня 😊'))


function availableCurrency(){// Функция для получения списка валют, которые можно снять
    let available = []
    for (let i = 0; i < Object.keys(bankData).length; i++) {
        for (let j = 0; j < Object.keys(userData).length; j++) {
            if ((Object.keys(userData)[j] === Object.keys(bankData)[i]) && bankData[Object.keys(bankData)[i]].min !== 0 ){
                available.push(Object.keys(userData)[j])
            }
        }
    }
    return available
}

function validateWithdrawal (withdraw,currency){ //перевіряє коректність введення суми для зняття з рахунку
    if (withdraw > bankData[currency].max){
        let max = bankData[currency].max
        console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${max}`)
    } else if(withdraw < bankData[currency].min){
        let min = bankData[currency].min
        console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${min}`)
    }else if(withdraw > userData[currency]) {
        console.log(`Введена сума перевищує Ваш баланс. Максимальна сума зняття: ${userData[currency]}`)
    } else {
        withdrawMoney(withdraw,currency)// якщо сума коректна, викликається функція для зняття грошей
    }
}

function withdrawMoney(withdraw,currency){// знімає вказану суму з рахунку
    let icon = bankData[currency].img
    userData[currency] -= withdraw // зняття грошей з балансу користувача
    console.log(`От Ваші гроші ${withdraw} ${currency} ${icon}.`)
    console.log(`Залишок на карті: ${userData[currency]} ${currency}`)
}