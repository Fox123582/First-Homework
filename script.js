const form = document.querySelector('#form')
const hTwo = [...document.querySelectorAll('h2')]// выбираем все заголовки h2 и создаем из них массив

const burgerSizeArray = [// создаем массив размеров бургеров с их ценой и количеством калорий
    {
        value: 'великий',
        price: 100,
        calories: 40
    },
    {
        value: 'маленький',
        price: 50,
        calories: 20
    }
]
const burgerTypeArray = [// создаем массив типов бургеров с их ценой и количеством калорий
    {
        value: 'сиpом',
        price: 10,
        calories: 20
    },
    {
        value: 'салатом',
        price: 20,
        calories: 5
    },
    {
        value: 'картоплею',
        price: 20,
        calories: 5
    }
]
const burgerAddArray = [// создаем массив дополнений к бургеру с их ценой и количеством калорий
    {
        value: 'приправою',
        price: 15,
        calories: 0
    },
    {
        value: 'майонезом',
        price: 20,
        calories: 5
    }
]




function countPriceAndCalories(resulArr, arr, findValue) { //Функция для подсчета общей стоимости и калорийности выбранных элементов.
    //resulArr - массив для записи общей стоимости и калорийности
    //arr - массив с элементами для подсчета стоимости и калорийности
    //findValue - массив или строка с выбранными элементами
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(findValue)) {
            for (let j = 0; j < Object.values(arr[i]).length; j++) {
                if (Object.values(arr[i]).includes(findValue[j])) {
                    resulArr[0] = resulArr[0] + arr[i].price;
                    resulArr[1] = resulArr[1] + arr[i].calories;
                }
            }
        } else if (Object.values(arr[i]).includes(findValue)) {
            resulArr[0] = resulArr[0] + arr[i].price;
            resulArr[1] = resulArr[1] + arr[i].calories;
        }
    }
    return resulArr;
}



form.addEventListener('submit', (e) => {
    // получаем значения выбранных элементов формы
    const selectValue = document.querySelector('#select').value.toLowerCase(); // получаем выбранное значение в выпадающем списке и приводим его к нижнему регистру
    const nameValue = document.querySelector('#userName').value;// получаем имя пользователя
    const checkedStuff = [...document.querySelectorAll('input[name="stuff"]:checked')]// Получаем массив выбранных чекбоксов с классом "stuff"
    const checksAdd = [...document.querySelectorAll('input[name="add"]:checked')]// Получаем массив выбранных чекбоксов с классом "add"
    const textAreaValue = document.querySelector('#textarea').value;

    e.preventDefault()

    checksForText(nameValue, 0)// Проверяем значение поля ввода имени на корректность
    const checkedStuffValue = checks(checkedStuff, 1)// Получаем значение выбранных чекбоксов с классом "stuff"
    const checkedAddValue = checks(checksAdd, 2)// Получаем значение выбранных чекбоксов с классом "add"
    checksForText(textAreaValue, 3)// Проверяем значение поля ввода комментария на корректность
    //console.log(checkedStuffValue)

    let priceAndCalories = [0, 0];// Массив для хранения суммарной стоимости и калорийности бургера
    countPriceAndCalories(priceAndCalories, burgerSizeArray, selectValue); //Подсчитываем цену и калорийность по выбраному размеру
    countPriceAndCalories(priceAndCalories, burgerTypeArray, checkedStuffValue)//Подсчитываем цену и калорийность по выбраному размеру и ингредиентам
    countPriceAndCalories(priceAndCalories, burgerAddArray, checkedAddValue)//Подсчитываем полную цену и калорийность бургера
    //console.log(priceAndCalories)


    if (nameValue && selectValue && checkedStuffValue && checkedAddValue && textAreaValue) { //Проверяем, что все поля заполнены
        adder(nameValue, selectValue, checkedStuffValue, checkedAddValue, textAreaValue, priceAndCalories);//вызываем функцию adder() для добавления заказа на страницу
        priceAndCalories = [0, 0];//обнуляем массив цен и калорий бургера
        form.reset(); //сбрасываем значения формы
    }
})

function checksForText(textValue, index) {//Функция проверяет наличие текста в переменной textValue
    if (!textValue) { // Если textValue пустой или не определен
        hTwo[index].innerText = '*enter something'// Устанавливаем текст элемента hTwo с индексом index на '*enter something'
        return false// возвращаем false, чтобы показать, что ввод некорректен
    } else {
        hTwo[index].innerText = ''// Устанавливаем текст элемента hTwo с индексом index на пустую строку
        return true;
    }
}


function checks(arr, index) {// функция проверяет, есть ли в массиве хотя бы один элемент
    let arrValue = []
    if (arr.length < 1) {// если элементов нет
        hTwo[index].innerText = '*choose something' // выводим сообщение об ошибке для соответствующего заголовка H2
        return false;
    } else {// если хотя бы один элемент выбран
        for (let i = 0; i < arr.length; i++) { // перебираем выбранные элементы чекбокса
            arrValue.push(arr[i].value.toLowerCase());// добавляем значение каждого выбранного элемента в мас
        }
        hTwo[index].innerText = ''
    }
    return arrValue// возвращаем массив выбранных значений
}

function adder(nameValue, selectValue, checkedStuffValue, checkedAddValue, textAreaValue, priceAndCalories) {
    // функция создает новый блок на странице, который содержит информацию о заказе и отображает его

    const container = document.querySelector('.containerOrder')// получаем контейнер для добавления нового заказа
    const createDiv = document.createElement('div');// создаем новый div элемент
    const createH2 = document.createElement('h2') // создаем заголовок h2
    const createP = document.createElement('p')// создаем параграф h2
    let randomValue = Math.ceil(Math.random() * 10)// Генерируем случайное значение времени готовки заказа

    createDiv.classList.add('order');// Добавляем класс элементу div
    container.prepend(createDiv)// Добавляем элемент div в конец "контейнера"
    createDiv.prepend(createH2, createP)// Добавляем в элемент div заголовок и параграф

    createH2.innerText = `Привіт ${nameValue}`;// Добавляем соответствующий текст для заголовка
    createP.innerText = `Ваше замовлення: ${selectValue} бургер з ${checkedStuffValue}, ${checkedAddValue} буде готовий протягом ${randomValue} хвилин. \n Ваші побажання:${textAreaValue} \n Ціна заказу: ${priceAndCalories[0]} гривень (кількість калорій: ${priceAndCalories[1]})`;
    // Добавляем соответствующий текст для абзаца
}