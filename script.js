console.log('--------------------1-----------------------------')
const SINGLE_LIST_HEAD = {
    value: 0,
    next: null,
}

class SingleListCreate {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertElementSingleLinkList(value) {
    const newSingleListElem = new SingleListCreate(value);
    let current = SINGLE_LIST_HEAD;

    while (current.next) {
        current = current.next;
    }

    current.next = newSingleListElem;
    return newSingleListElem;
}



const DEFAULT_PARAMETRS = [1, 'two', () => console.log('hello'), true];


console.log(SINGLE_LIST_HEAD)
DEFAULT_PARAMETRS.forEach((el) => {
    console.log(insertElementSingleLinkList(el))
})

// console.log(SINGLE_LIST_HEAD.next.value)
// SINGLE_LIST_HEAD.next.next.next.value()




///////////////////////Double///////////////

console.log('--------------------2-----------------------------')



const DOUBLE_LIST_HEAD = {
    value: 0,
    next: null,
    prev: null,
}
class DoubleListCreate {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

function insertElementDoubleLinkList(value) {
    const doubleList = new DoubleListCreate(value);
    let current = DOUBLE_LIST_HEAD;

    while (current.next) {
        current = current.next;
    }

    current.next = doubleList;
    current.next.prev = current;

    return doubleList;
}



console.log(DOUBLE_LIST_HEAD)
DEFAULT_PARAMETRS.forEach((el) => {
    console.log(insertElementDoubleLinkList(el))
})






//////////////////Circle//////////////




console.log('--------------------3-----------------------------')


const CIRCLE_LIST_HEAD = {
    value: 0,
    next: null,
}

class CircleListCreate {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function insertElementCircleList(value) {
    const circleList = new CircleListCreate(value);
    let current = CIRCLE_LIST_HEAD;

    while (current.next) {
        if (current.next === CIRCLE_LIST_HEAD) {
            break;
        }
        current = current.next;

    }
    current.next = circleList;
    current.next.next = CIRCLE_LIST_HEAD;
    return circleList;
}



console.log(CIRCLE_LIST_HEAD)
DEFAULT_PARAMETRS.forEach((el) => {
    console.log(insertElementCircleList(el))
})