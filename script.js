const block = document.querySelector('.block');

const innerWidth = window.innerWidth; // ширина окна
const innerHeight = window.innerHeight; // висота окна

block.style.top = 0;
block.style.left = 0;

window.addEventListener('keydown', movement) 

function movement(e) { //Функция "movement" будет вызываться при нажатии клавиш на клавиатуре
    console.log(e)
    if (e.keyCode === 38 || e.keyCode === 32) { // Если нажата клавиша "вверх" или пробел вызываем функцию "moveTop"
        moveTop()
    }
    if (e.keyCode === 37) { // Если нажата клавиша "влево", вызываем функцию "moveLeft"
        moveLeft();
    }
    if (e.keyCode === 39) {// Если нажата клавиша "вправо", вызываем функцию "moveRight"
        moveRight();
    }
    if (e.keyCode === 40 || e.keyCode === 17) {// Если нажата клавиша "вниз" или "Ctrl", вызываем функцию "squat"
        squat();
    }
}

let flag = 0;// Переменная-флаг для запрета повторного выполнения функции "moveTop" во время анимации
function moveTop() { // Функция "moveTop" для анимации движения блока вверх на 50 пикселей
    if (flag === 1) return
    block.style.top = (parseInt(block.style.top) - 50) + 'px'; // изменяем положение блока на 50 пикселей вверх
    flag = 1;
    setTimeout(() => {
        block.style.top = (parseInt(block.style.top) + 50) + 'px'; // возвращаем блок на исходное положение
        flag = 0;
    }, 2000)
}

function moveLeft() { //Функция "moveLeft" для анимации движения блока влево на 50 пикселей
    block.style.left = (parseInt(block.style.left) - 50) + 'px'; // изменяем положение блока на 50 пикселей влево
    if (parseInt(block.style.left) <= -((innerWidth / 2) - 100.5)) { // Если блок дошел до левого края окна, который определяется по ширине окна вызываем функции
        toTheEdge('left')
        bams('left')
    }
}

function moveRight() {//Функция "moveRight" для анимации движения блока вправо на 50 пикселей
    block.style.left = (parseInt(block.style.left) + 50) + 'px'; // изменяем положение блока на 50 пикселей вправо
    if (parseInt(block.style.left) >= (innerWidth / 2) - 100.5) {// Если блок дошел до левого края окна, который определяется по ширине окна вызываем функции
        toTheEdge('right')
        bams('right')
    }
}

const blockSizeHeight = block.clientHeight; // высота блока
const blockSizeWidth = block.clientWidth; // ширина блока
function squat() {//Функция "squat" для анимации сжимания блока 
    block.style.height = blockSizeHeight - (blockSizeHeight * 40) / 100 + 'px' //уменьшаем высоту блока на 40 процентов
    block.style.width = blockSizeWidth + (blockSizeWidth * 25) / 100 + 'px' // уыеличиваем ширину на 25 процентов

    setTimeout(() => {
        block.style.height = blockSizeHeight + 'px' // возвращаем начальное значение высоты
        block.style.width = blockSizeWidth + 'px' // возвращаем начальное значение ширины
    }, 2000)
}


function toTheEdge(direction) {//Функция "toTheEdge" для анимации выравнивания блока по краю окна
    if (direction === 'left') { // если "direction "равняется "влево"
        block.style.left = -((innerWidth / 2) - 50) + 'px'; //передвигаем блок на край окна слева
    } else if (direction === 'right') {
        block.style.left = (innerWidth / 2) - 50 + 'px';//передвигаем блок на край окна справа
    }
}

function bams(direction) {//Функция "bams" для анимации отталкивания блока от края окна и добавления соответствующей надписи внуть блока
    setTimeout(() => {
        if (direction === 'left') {// если "direction "равняется "влево"
            block.style.left = (parseInt(block.style.left) + 100) + 'px';//передвигаем блок на 100 пикселей от края окна
        } else if (direction === 'right') {
            block.style.left = (parseInt(block.style.left) - 100) + 'px'
        }
        block.innerHTML = 'BAMS!' // менеем текст в блоке на 'BAMS!'
    }, 2000)
    setTimeout(() => {
        block.innerHTML = '' // // менеем текст в блоке на пустую строку 
    }, 4000)
}