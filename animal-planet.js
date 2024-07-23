import { Cat } from "./inheritance/cat.js";
import { dog } from "./inheritance/Dog.js";
import { Street } from "./inheritance/kawasaki.js";

const micius = new Cat('Micius', 'Sfinksas');
console.log(micius.intro());
console.log(micius.voice());

const brisius = new dog('Brisius', 'Maltos bisonas');
console.log(brisius.intro());
console.log(brisius.voice());

const kawasaki = new Street('Kawasaki', 'Z750');
console.log(kawasaki.desc());