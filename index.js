import { dog } from "./js/Dog.js";
import { car } from "./js/Car.js";
const rexas = new dog('Rexas', 'black', 3);
console.log(rexas);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(7, 5));
console.log(rexas.manyBones(5));

console.clear();

const brisius = new dog('Brisius', 'white', 2);
console.log(brisius);


console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius);

console.log(brisius.birthday());
console.log(brisius.birthday());
console.clear();

const Audi = new car('Audi', 80, 'Red', 60, 60, 5)
console.log(Audi.name);
console.log(Audi);

console.log(Audi.engineOn());
console.log(Audi.startRiding());
console.log(Audi.continueTheRide());
console.log(Audi.stopTheCar());
console.log(Audi.fillTank());
console.log(Audi.engineOff());
console.log(Audi.startRiding());
console.log(Audi.continueTheRide());
console.log(Audi.fillTank());
console.log(Audi.fillTank());





