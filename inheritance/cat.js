import { Pets } from "./Pets.js";

export class Cat extends Pets {
    constructor(name, breed) {
        super(name, breed)
        this.animalType = 'cat'
        this.sound = 'miau';
        this.emoji = '😹';
        this.emojiCount = 2;
    }


}