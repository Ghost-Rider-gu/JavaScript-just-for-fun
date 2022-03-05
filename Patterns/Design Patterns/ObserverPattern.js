class Subject {
    constructor() {
        this.observers = [];
        this.data = null;
    }

    updateData(newValue) {
        this.data = newValue;
        this.notifyAll();
    }

    subscribe(newObserver) {
        this.observers.push(newObserver);
    }

    unsubscribe(existObserver) {
        const indexOfObserver = this.observers.indexOf(existObserver);
        if (indexOfObserver > -1) {
            this.observers.splice(indexOfObserver, 1);
        }
    }

    notifyAll() {
        for(let observer of this.observers) {
            observer.update(this.data);
        }
    }
}

class Observer {
    constructor() {

    }

    update(value) {
        console.log(`Observer has got a new value: ${value}`);
    }
}

let subject = new Subject();

let observer1 = new Observer();
let observer2 = new Observer();
let observer3 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.updateData(45);
