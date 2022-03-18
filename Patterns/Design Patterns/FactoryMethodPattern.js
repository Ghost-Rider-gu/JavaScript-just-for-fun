class Employee {
    create(type) {
        let employee;
        switch(type) {
            case 'contractor': employee = new Contractor();
            break;
            case 'parttime': employee = new PartTime();
            break;
            case 'fulltime': employee = new Fulltime();
            break;
            default: employee = null; 
        }
        
        employee.type = type;
        employee.say = function() {
            console.log(`${this.type} employee: rate ${this.rate} / hour`);
        }
    }
  }

class Contractor {
    constructor() {
        this.rate = '$25';
    }
}

class PartTime {
    constructor() {
        this.rate = '$20';
    }
}

class Fulltime {
    constructor() {
        this.rate = '$30';
    }
}

const employeeFactory = new Employee();
const fulltimeEmployee = employeeFactory.create('fulltime');
const parttimeEmployee = employeeFactory.create('parttime');
const contractorEmployee = employeeFactory.create('contractor');

fulltimeEmployee.say();
parttimeEmployee.say();
contractorEmployee.say();
