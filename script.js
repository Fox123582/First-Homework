const block = document.querySelector('.block')
const innerWidth = window.innerWidth;
const innerHeigt = window.innerHeight;

block.style.top = 0;
block.style.left = 0;


setInterval(() => {
    block.style.background = '#' + Math.random().toString(16).slice(2, 8)
}, 500)

setInterval(() => {
    if (Math.round(Math.random())) {
        moveBlock('top', innerHeigt);
    } else {
        moveBlock('left', innerWidth);
    }

}, 1000)

function moveFromEnd(direction, maxValue) { //Функция для вычисления нового значения координаты блока после достижения края окна
    let styleInt = parseInt(block.style[direction]);
    block.style[direction] = styleInt - Math.round((Math.random() * (maxValue - 100))) + 'px';
    return block.style[direction]
}

// // Функция для движения блока вверх и вниз
// function moveTop() {
//     let styleTopInt = parseInt(block.style.top);

//     if (styleTopInt > innerHeigt - 230) {  // Если блок достиг края окна 
//         block.style.top = innerHeigt - 100 + 'px'; // Устанавливаем блок внизу окна

//         if (styleTopInt === innerHeigt - 100) {
//             moveFromEnd('top', innerHeigt) // Вычисляем новое значение вертикальной координаты блока
//         }
//     } else if (styleTopInt > 300) {
//         if (Math.round(Math.random())) {
//             block.style.top = styleTopInt + Math.round(Math.random() * 100) + 'px';
//         } else {
//             block.style.top = styleTopInt - Math.round(Math.random() * 100) + 'px';
//         }
//     } else {
//         block.style.top = styleTopInt + Math.round(Math.random() * 100) + 'px';
//     }
// }

// // Функция для движения блока влево и вправо
// function moveLeft() {
//     let styleLeftInt = parseInt(block.style.left);

//     if (styleLeftInt > innerWidth - 230) { // Если блок достиг края окна 
//         block.style.left = innerWidth - 100 + 'px'; // Устанавливаем блок справа от окна

//         if (styleLeftInt === innerWidth - 100) {
//             moveFromEnd('left', innerWidth) // Вычисляем новое значение горизонтальной координаты блока
//         }
//     } else if (styleLeftInt > 300) {
//         if (Math.round(Math.random())) {
//             block.style.left = styleLeftInt + Math.round(Math.random() * 100) + 'px';
//         } else {
//             block.style.left = styleLeftInt - Math.round(Math.random() * 100) + 'px';
//         }
//     } else {
//         block.style.left = styleLeftInt + Math.round(Math.random() * 100) + 'px';
//     }

// }

function moveBlock(direction, maxValue) {
    let styleInt = parseInt(block.style[direction]);

    if (styleInt > maxValue - 230) { // Если блок достиг края окна 
        block.style[direction] = maxValue - 100 + 'px'; // Устанавливаем блок в соответствующей позиции

        if (styleInt === maxValue - 100) {
            moveFromEnd(direction, maxValue) // Вычисляем новое значение координаты блока
        }
    } else if (styleInt > 300) { //после достижения 300 пикселей, блок получает возможность двигаться вверх и вправо
        if (Math.round(Math.random())) { // рандомно перемещаем блок вправо/влево или вверх/вниз
            block.style[direction] = styleInt + Math.round(Math.random() * 100) + 'px';
        } else {
            block.style[direction] = styleInt - Math.round(Math.random() * 100) + 'px';
        }
    } else {
        block.style[direction] = styleInt + Math.round(Math.random() * 100) + 'px';
    }
}

