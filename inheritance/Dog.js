import { Pets } from "./Pets.js";

export class dog extends Pets {
    constructor(name, breed) {
        super(name, breed)
        this.animalType = 'dog';
        this.sound = 'au au';
        this.emoji = '🐕‍🦺';
        this.emojiCount = 4;

    }



}