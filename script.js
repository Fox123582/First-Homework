class Hamburger {
    #calories = 0;
    #price = 0;
    static SIZE_SMALL = 'Small'
    static SIZE_BIG = 'Big'

    static STUFFING_CHEESE = 'Cheese'
    static STUFFING_SALAT = 'Salat'
    static STUFFING_POTATO = 'Potato'

    static TOPPING_MAYO = 'Mayones'
    static TOPPING_SPECIES = 'Species'

    constructor(size, stuff) {
        this.setSize(size);
        this.setStuff(stuff);
    }
///////////Сетеры для размера и вида бургера////////////////////
    setSize(size) {
        this.size = size;
    }
    setStuff(stuff) {
        this.stuff = stuff;
    }
///////////Добавление начинок путем создание и добавления их в массив////////////////////
    addToping(topping) {
        if (this.topping !== undefined) {
            this.topping.push(topping);
        } else this.topping = [topping];
    }
///////////Подсчет калорий только начинок////////////////////
    #calculateCaloriesOnTopping() {
        if (this.topping === undefined) return;
        for (let i = 0; i < this.topping.length; i++) {
            switch (this.topping[i]) {
                case 'Mayones':
                    this.#calories = this.#calories + 5;
                    break;
                case 'Species':
                    this.#calories = this.#calories;
                    break;
            }
        }
        return this.#calories
    }
///////////Подсчет калорий всего бургера////////////////////
    calculate() {
        this.#calories = 0;
        this.#calculateCaloriesOnTopping();
        switch (this.size) {
            case 'Small':
                this.#calories = this.#calories + 20;
                break;
            case 'Big':
                this.#calories = this.#calories + 40;
                break;
        }
        switch (this.stuff) {
            case 'Cheese':
                this.#calories = this.#calories + 20;
                break;
            case 'Salat':
                this.#calories = this.#calories + 5;
                break;
            case 'Potato':
                this.#calories = this.#calories + 10;
                break;
        }
        return this.#calories;
    }
///////////Подсчет цены только начинок////////////////////
    #calculatePriceOnTopping() {
        if (this.topping === undefined) return;
        for (let i = 0; i < this.topping.length; i++) {
            switch (this.topping[i]) {
                case 'Mayones':
                    this.#price = this.#price + 20;
                    break;
                case 'Species':
                    this.#price = this.#price + 15;
                    break;
            }
        }
        return this.#price
    }
///////////Подсчет общей цены////////////////////
    calculatePrice() {
        this.#price = 0;
        this.#calculatePriceOnTopping();
        switch (this.size) {
            case 'Small':
                this.#price = this.#price + 50;
                break;
            case 'Big':
                this.#price = this.#price + 100;
                break;
        }
        switch (this.stuff) {
            case 'Cheese':
                this.#price = this.#price + 10;
                break;
            case 'Salat':
                this.#price = this.#price + 20;
                break;
            case 'Potato':
                this.#price = this.#price + 15;
                break;
        }
        return this.#price
    }
///////////Гетеры для цены и калорий////////////////////
    get price() {
        return this.#price;
    }

    get calories() {
        return this.#calories;
    }
}
///////////Создания класса для рандомайзера////////////////////
class Random {
    static arrSize = [Hamburger.SIZE_SMALL, Hamburger.SIZE_BIG]
    static arrStuff = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAT]

    static randomSize() {
        const randomElem = Random.arrSize[Math.floor(Math.random() * Random.arrSize.length)]
        return randomElem;
    }
    static randomStuff() {
        const randomStuff = Random.arrStuff[Math.floor(Math.random() * Random.arrStuff.length)]
        return randomStuff;
    }
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
const randomHamburger = new Hamburger(Random.randomSize(), Random.randomStuff());

//console.log(hamburger)
//console.log(randomHamburger)

///////////Вывод всего////////////////////

console.log('--------------------------------')

console.log(`Price hamburger without topping(${hamburger.size},${hamburger.stuff})`, hamburger.calculatePrice(), 'calories without topping', hamburger.calculate());

console.log(`Price randomHamburger without topping(${randomHamburger.size},${randomHamburger.stuff})`, randomHamburger.calculatePrice(), 'calories without topping', randomHamburger.calculate());


hamburger.addToping(Hamburger.TOPPING_MAYO);
randomHamburger.addToping(Hamburger.TOPPING_MAYO);

console.log('--------------------------------');

console.log(`Price hamburger with 1 topping(${hamburger.size},${hamburger.stuff},${hamburger.topping})`, hamburger.calculatePrice(), 'calories with 1 topping', hamburger.calculate())

console.log(`Price randomHamburger with 1 topping(${randomHamburger.size},${randomHamburger.stuff},${randomHamburger.topping})`, randomHamburger.calculatePrice(), 'calories with 1 topping', randomHamburger.calculate())


hamburger.addToping(Hamburger.TOPPING_SPECIES);
randomHamburger.addToping(Hamburger.TOPPING_SPECIES);

console.log('--------------------------------')

console.log(`Price hamburger with 2 topping(${hamburger.size},${hamburger.stuff},${hamburger.topping})`, hamburger.calculatePrice(), 'calories with 2 topping', hamburger.calculate())

console.log(`Price randomHamburger with 2 topping(${randomHamburger.size},${randomHamburger.stuff},${randomHamburger.topping})`, randomHamburger.calculatePrice(), 'calories with 2 topping', randomHamburger.calculate())




