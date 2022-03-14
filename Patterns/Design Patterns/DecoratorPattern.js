class Cake {
    constructor(cakeName) {
        this.cakeName = cakeName;
    }

    cost() {
        return 15;
    }
}

class CakeDecorator {
    constructor(cake) {
        this.cake = cake;
    }

    cost() {
        this.cake.cost();
    }
}

// as an example this decorator comes with 10 candles and each candle cost 0.20 cents
class CakeWithCandles extends CakeDecorator {
    getDescription() {
        return `${this.cake.cakeName} with candles`;
    }

    cost() {
        return this.cake.cost() + 2;
    }
}

class CakeWithCream extends CakeDecorator {
    getDescription() {
        return `${this.cake.cakeName} with cream`;
    }

    cost() {
        return this.cake.cost() + 5;
    }
}

const newCake = new Cake('SweetGreen');
const cakeWithCandles = new CakeWithCandles(newCake);
console.log(`Cake: ${cakeWithCandles.getDescription()} cost: ${cakeWithCandles.cost()}`);

const cakeWithAllCondiments = new CakeWithCream(cakeWithCandles);
console.log(`Cake: ${cakeWithAllCondiments.getDescription()} cost: ${cakeWithAllCondiments.cost()}`);
