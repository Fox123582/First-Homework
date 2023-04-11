let wrapForButtons = document.querySelector('.buttons')
let categories = document.querySelector('#categories')
let textArea = document.querySelector('#freeText')
let radioBut = document.querySelectorAll('input[type=radio]')
let chackNoris = 'https://api.chucknorris.io/jokes/'
const wrapperForLeft = document.querySelector('.wrapperForLeft')

let getStore = () => JSON.parse(localStorage.getItem('favorite')) ?? []

radioBut.forEach(el =>{
    el.addEventListener('click', () =>{
        receiveCategories()
        displayText()
    })
})
function receiveCategories(){ // функция для получения списка категорий
    fetch(`${chackNoris}/categories`)
        .then((response)=> response.json())
        .then(data =>  displayCategories(data))
        .catch(err => console.log(err))
}
function displayCategories(arr){ // функция для отображения списка категорий
    if (!categories.checked){ // если чекбокс не отмечен
        wrapForButtons.classList.remove('activate')
    } else  if(wrapForButtons.childElementCount === 0){ // если контейнер для кнопок пуст
        wrapForButtons.classList.add('activate')// добавляем класс для отображения контейнера с кнопками
        arr.forEach((el)=>{
            let createButton = document.createElement('button')
            createButton.innerText = el;
            wrapForButtons.append(createButton); // добавляем кнопку в контейнер
        })
        let buttons = document.querySelectorAll('.buttons button')
        buttonsPreventDefault(buttons) // вызываем функцию для предотвращения действия по умолчанию при клике на кнопки
    } else {
        wrapForButtons.classList.add('activate')
    }
}

function buttonsPreventDefault (butElements){ // функция для предотвращения действия по умолчанию при клике на кнопки
    butElements.forEach(el =>{
        el.addEventListener('click',(e)=>{
            e.preventDefault();
            butElements.forEach((el)=>{el.classList.remove('active')})// удаляем классы активности с кнопок
            e.target.classList.add('active')// добавляем класс активности на выбранную кнопку
        })
    })
}


function displayText (){// функция для отображения поля ввода текста
    if(radioBut[2].checked){
        textArea.classList.add('activate')
    } else{
        textArea.classList.remove('activate')
    }
}

////////////////////////////////////////
let form = document.querySelector('form')

form.addEventListener('submit',e =>{
    e.preventDefault()
    checkedCheckbox()

})
function checkedCheckbox (){ //Проверяем, какой из радиокнопок был выбран, и вызываем соответствующую функцию, которая получает и отображает информацию.
    reset()
    if (radioBut[0].checked){
        getRandomJoke()
    } else if(radioBut[1].checked){
        getJokeFromCategory()
    } else if(radioBut[2].checked){
        getRandomJokesFromText()
    }
}

function getRandomJoke(){ //Получаем случайную шутку и добавляем ее на страницу, а также добавляем возможность лайкнуть шутку.
    fetch(`${chackNoris}/random`)
        .then((response)=> response.json())
        .then(data => {
            appendIn(wrapperForLeft,createJokeBlock(data))
            likeJoke(data)
            likedDataLeft(data.id)
        })
        .catch(err => console.log(err))
}

function getJokeFromCategory(){//Получаем случайную шутку по категории и добавляем ее на страницу, а также добавляем возможность лайкнуть шутку.
    let categoryName = document.querySelector('.buttons .active').innerHTML

    fetch(`${chackNoris}/random?category=${categoryName}`)
        .then((response)=> response.json())
        .then(data => {
            appendIn(wrapperForLeft,createJokeBlock(data))
            likeJoke(data)
            likedDataLeft(data.id)
        })
        .catch(err => console.log(err))
}

function getRandomJokesFromText(){//Получаем список шуток, которые соответствуют тексту из текстового поля, и добавляем их на страницу, а также добавляем возможность оценки шутки.
    let textAreaValue = textArea.value

    fetch(`${chackNoris}/search?query=${textAreaValue}`)
        .then((response)=> response.json())
        .then(data => {
            data.result.forEach(el =>{
                appendIn(wrapperForLeft,createJokeBlock(el))
                likeJoke(el)
                likedDataLeft(el.id)
            })
        })
        .catch(err => console.log(err))
}


function reset (){//Очищает область для шуток
    const wrapperForLeft = document.querySelector('.wrapperForLeft')
    if (wrapperForLeft.childElementCount >1){
        let jokeWrapper = document.querySelectorAll('.wrapperForLeft .jokeWrapper')
        jokeWrapper.forEach(el=>{
            el.remove()
        })
    }
}
function createJokeBlock(jokeData) {// Создает блок с шуткой

    const jokeWrapper = document.createElement('div');
    jokeWrapper.classList.add('jokeWrapper');
    jokeWrapper.dataset.id = jokeData.id

    const wrapperForEmail = document.createElement('div');
    wrapperForEmail.classList.add('wrapperForEmail');

    const innerEmail = document.createElement('div');
    innerEmail.classList.add('innerEmail');

    const emailImg = document.createElement('img');
    emailImg.classList.add('email');
    emailImg.setAttribute('src', './img/fullLink.svg');
    emailImg.setAttribute('alt', 'Image of message icon');

    innerEmail.appendChild(emailImg);
    wrapperForEmail.appendChild(innerEmail);
    jokeWrapper.appendChild(wrapperForEmail);

    const content = document.createElement('div');
    content.classList.add('content');

    const id = document.createElement('div');
    id.classList.add('id');
    id.innerText = 'ID: '

    const idLink = document.createElement('a');
    idLink.setAttribute('href', `${jokeData.url}`);
    idLink.innerText = jokeData.id;

    const idLinkImg = document.createElement('img');
    idLinkImg.setAttribute('src', './img/link.svg');
    idLinkImg.setAttribute('alt', 'Image of link');

    idLink.appendChild(idLinkImg);
    id.appendChild(idLink);
    content.appendChild(id);

    const jokeText = document.createElement('p');
    jokeText.classList.add('pUnliked')
    jokeText.innerText = jokeData.value;

    content.appendChild(jokeText);

    const details = document.createElement('div');
    details.classList.add('details');

    const lastUpdate = document.createElement('div');
    let hoursUpdate = timeSearch(jokeData.updated_at)
    lastUpdate.innerText = `Last update: ${hoursUpdate} hours ago`
    lastUpdate.classList.add('lastUpdate');
    details.appendChild(lastUpdate);

    const category = document.createElement('div');
    category.classList.add('category');
    categoryName(category,jokeData.categories)

    details.appendChild(category);

    content.appendChild(details);
    jokeWrapper.appendChild(content);



    const wrapperForHeart = document.createElement('div');
    wrapperForHeart.classList.add('wrapperForHeart');

    const heartImg = document.createElement('img');
    heartImg.classList.add('heart');
    heartImg.setAttribute('src', './img/emptyHeart.svg');
    heartImg.setAttribute('alt', 'Empty heart');

    wrapperForHeart.appendChild(heartImg);
    jokeWrapper.appendChild(wrapperForHeart);

    return jokeWrapper;

}

function appendIn(position,value){ // добавляет элемент куда нам нужно
    position.append(value)
}
function timeSearch (time){ //считает время с момента создания шутки (в часах)
    let created = new Date(time)
    let current = new Date()
    let millSec = Math.abs(created - current)
    let hoursDif = Math.floor(millSec / (1000 * 60 * 60))
    return hoursDif;
}

function categoryName (categoryName,categories){ //добавляет категорию к блоку шуток если она есть
    if (categories.length > 0){
        categoryName.classList.add('categoryActive')
        categoryName.innerText = categories;
    } else {
        categoryName.classList.remove('categoryActive')
        categoryName.innerText = '';
    }
}



//////////////////////////////////////////////////////
function likeJoke(jokeData){// лайкаем шутку или же убираем ее из лайка
    let heart = document.querySelector(`.jokeWrapper[data-id='${jokeData.id}'] .heart`)

    heart.addEventListener('click',()=>{
        if(heart.src.includes('full')){
            heart.src = './img/emptyHeart.svg'
            removeFavorite(jokeData) // убирает из лайкнутых
        }else{
            heart.src = './img/fullHeart.svg'
            addFavorite(jokeData) // добавляет в лайкнутые
        }

    })
}

function addFavorite(jokeData){
    let wrapperForRight = document.querySelector('.wrapperForRight')

    let forRight = createJokeBlock(jokeData);
    forRight.dataset.liked = 'liked';//устанавливает значение атрибута data-liked для созданного блока, чтобы отметить, что эта шутка была добавлена в избранное.

    forRight.children[1].children[1].classList.add('likedP')//добавляет класс likedP к элементу, содержащему текст шутки, чтобы изменить его стиль и отобразить, что шутка была добавлена в избранное.
    forRight.children[2].classList.add('wrapperForHeartLiked')//добавляет класс wrapperForHeartLiked к контейнеру для сердечка, чтобы изменить его стиль.
    forRight.children[2].children[0].src = './img/fullHeart.svg'//устанавливает значение атрибута src для изображения сердечка на "./img/fullHeart.svg", чтобы отобразить, что шутка добавлена в избранное.

    appendIn(wrapperForRight,forRight)
    removeFavoriteForLikedBlock(jokeData)//функция удаления для лайкнутого блока
    saveInLocalStorage(jokeData,getStore())//функция вызывает функцию saveInLocalStorage, чтобы сохранить эту шутку в локальном хранилище.
}

function removeFavorite(jokeData){//удаляет избранную шутку из списка избранных по переданному объекту
    let jokeWrapper = document.querySelector(`.jokeWrapper[data-id='${jokeData.id}'][data-liked='liked']`)
    jokeWrapper.remove()
    removeFromLocalStorage(jokeData,getStore())//удаляет шутку из LocalStorage
}
//Функция removeFavoriteForLikedBlock(jokeData) удаляет избранную шутку из блока "избранное" на странице,
// если она там находится. Если на странице блока "избранное" нет, то функция ничего не делает.
// Также функция изменяет состояние сердечка шутки в списке шуток на главной странице на пустое сердце,
// если эта шутка есть в списке на главной странице.
function removeFavoriteForLikedBlock(jokeData){
    let heartLiked = document.querySelector(`.jokeWrapper[data-id='${jokeData.id}'][data-liked='liked'] .heart`)
    let jokeWrapper = document.querySelector(`.jokeWrapper[data-id='${jokeData.id}'][data-liked='liked']`)
    if (heartLiked){
        heartLiked.addEventListener('click',()=>{
            let jokeRight = document.querySelector(`.wrapperForLeft .jokeWrapper[data-id='${jokeData.id}']`)
            let heart = document.querySelector(`.jokeWrapper[data-id='${jokeData.id}'] .heart`)
            jokeWrapper.remove()
            if(jokeRight) {
                heart.src = './img/emptyHeart.svg'
            }
            removeFromLocalStorage(jokeData,getStore())
        })
    } else {
        return false
    }
}


//////////////////////////////////////////////////

function saveInLocalStorage(jokeData, store) {
    // Проверяем, есть ли элемент с таким же id в массиве
    const isAlreadyInStore = store.some((el) => el.id === jokeData.id);
    if (isAlreadyInStore) {
        // Если элемент уже есть в массиве, не делаем ничего
        return;
    }
    // Добавляем элемент в массив и сохраняем его в localStorage
    store.push(jokeData);
    localStorage.setItem('favorite', JSON.stringify(store));
}

function removeFromLocalStorage(jokeData, store){//удаляет шутку из объекта, хранящегося в локальном хранилище браузера.
    for (let i = 0; i < store.length; i++) {
        if(store[i].id === jokeData.id){
            store.splice(i,1)
        }
    }
    localStorage.setItem('favorite', JSON.stringify(store));
}

function renderSavedData(){//Функция отображает сохраненные шутки из хранилища браузера на странице, используя функцию addFavorite(), которая добавляет блок с шуткой в раздел "Понравившиеся шутки".
    let jokes = getStore()
    jokes.forEach(el=> {
        addFavorite(el)
    })
}
//Функция likedDataLeft() принимает dataId - идентификатор шутки, и проверяет, если шутка с таким dataId есть как на правой стороне,
// так и на левой стороне страницы.
// Если обе шутки есть на странице, то функция меняет иконку сердца на правой шутке на иконку "fullHeart.svg".
function  likedDataLeft(dataId){
    let rightWrapper = document.querySelector(`.jokeWrapper[data-id='${dataId}']`)
    let jokeWrapperLeft = document.querySelector(`.jokeWrapper[data-id='${dataId}'][data-liked='liked']`)
    let heart = document.querySelector(`.jokeWrapper[data-id='${dataId}'] .heart`)
    if (rightWrapper && jokeWrapperLeft){
        heart.src = './img/fullHeart.svg'
    }
}
renderSavedData()









