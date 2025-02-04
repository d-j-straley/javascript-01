class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        return `${this.make} ${this.model}`;
    }
}

let myCar = new Car('Tesla', 'Model S');
console.log(myCar.displayInfo());  // Output: Tesla Model S
