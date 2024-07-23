export class moto {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.year = 0;
        this.motoType = '';
        this.maxSpeed = 0;
        this.wheelCount = 2;
        this.exhaustType = '';

    }

    desc() {
        return `This is ${this.brand} ${this.model}, made in ${this.year} it is a ${this.motoType} type motorcycle, it has a ${this.exhaustType} 🏍`
    }
}