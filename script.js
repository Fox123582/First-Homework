const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

const food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

const universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(nameOfTable, arr) {
    const createArticle = document.createElement('h1');
    const table = document.createElement('table');
    let innerArray = '';

    createArticle.textContent = nameOfTable;

    document.body.append(createArticle);
    document.body.append(table);

    for (let i = 0; i < arr.length; i++) {
        const createTableRow = document.createElement('tr');
        table.append(createTableRow);

        for (let j = 0; j < arr[i].length; j++) {
            const createTableCell = document.createElement('th');

            createTableCell.textContent = arr[i][j];
            createTableRow.append(createTableCell);

            if (Array.isArray(arr[i][j])) {
                innerArray = arr[i][j].join(';');

                createTableCell.textContent = innerArray;
                createTableRow.append(createTableCell);
            }
        }
    }
    return;
}

getInfo('Animals info', animals);

getInfo('Fruits info', food);

getInfo('Universes info', universes);