const block = document.querySelector('.block')
const innerWidth = document.body.clientWidth;
const innerHeigt = document.body.clientHeight;

block.style.top = 0;
block.style.left = 0;

setInterval(() => {
    block.style.background = '#' + Math.random().toString().slice(2, 8)
}, 500)

setInterval(() => {
    if (Math.round(Math.random())) {
        moveTop();
    } else {
        moveLeft();
    }
}, 1000)

function moveFromEnd(direction, maxValue) { //Функция для вычисления нового значения координаты блока после достижения края окна
    let styleInt = parseInt(block.style[direction]);
    block.style[direction] = styleInt - Math.round((Math.random() * (maxValue - 100))) + 'px';
    return block.style[direction]
}

// Функция для движения блока вверх
function moveTop() {
    let styleTopInt = parseInt(block.style.top);

    if (styleTopInt > innerHeigt - 230) {  // Если блок достиг края окна 
        block.style.top = innerHeigt - 100 + 'px'; // Устанавливаем блок внизу окна
       
        if (styleTopInt === innerHeigt - 100) {
            moveFromEnd('top', innerHeigt) // Вычисляем новое значение вертикальной координаты блока
        }
    } else {
        block.style.top = styleTopInt + Math.round(Math.random() * 100) + 'px'; // Двигаем блок вверх на случайное расстояние
    }
}

// Функция для движения блока влево
function moveLeft() {
    let styleLeftInt = parseInt(block.style.left);

    if (styleLeftInt > innerWidth - 230) { // Если блок достиг края окна 
        block.style.left = innerWidth - 100 + 'px'; // Устанавливаем блок справа от окна

        if (styleLeftInt === innerWidth - 100) {
            moveFromEnd('left', innerWidth) // Вычисляем новое значение горизонтальной координаты блока
        }
    } else {
        block.style.left = styleLeftInt + Math.round(Math.random() * 100) + 'px';
    }
}