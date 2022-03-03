'use strict';

class Transportation {
    constructor() {
    }

    Transport() {
    }
}

class Taxi extends Transportation {
    constructor() {
        super();
    }

    Transport() {
        console.log('Going to airport by taxi ...');
    }
}

class Bus extends Transportation {
    constructor() {
        super();
    }

    Transport() {
        console.log('Going to aurport by bus');
    }
}

class PersonalCar extends Transportation {
    constructor() {
        super();
    }

    Transport() {
        console.log('Going to aurport by personal car');
    }
}

class OrderTransport {
    constructor(typeOfTransport) {
        switch(typeOfTransport) {
            case 'Taxi':
                this.transportation = new Taxi();
                break;
            case 'Bus':
                this.transportation = new Bus();
                break;
            case 'Personal car':
                this.transportation = new PersonalCar();
                break;
            default:
                this.transportation = new Taxi();
        }
    }

    Order() {
        this.transportation.Transport();
    }
}

function getTransport() {
    const taxi = 'Taxi';
    const personalCar = 'Personal car';

    const orderTaxi = new OrderTransport(taxi);
    const orderCar = new OrderTransport(personalCar);

    orderTaxi.Order();
    orderCar.Order();
}
