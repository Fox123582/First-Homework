const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const list = document.getElementById('list');
console.log(list)

class Vegetable{
    constructor(obj){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;
        this.name = obj.name;
        this.icon = obj.icon;
        this.price = obj.price;
        this.season = obj.season ? obj.season : false;
    }

    getPrice(){
        if(this.season){
            this.price = this.price * this.seasonKoef;
            return this.price
        } else return this.price;
            
    }

    getInfo(){
        const newLi = document.createElement('li');
        newLi.innerHTML = `Type: ${this.type}. SeasonKoef: ${this.seasonKoef}. Name:${this.name}. Icon: ${this.icon}. Price: ${this.getPrice()}. Season: ${this.season}.`;
        list.append(newLi);
    }
}

const newObj = vegetables.map(el => new Vegetable(el)).map(innerEl => innerEl.getInfo());

