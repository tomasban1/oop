export class Pets {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.animalType = ''
        this.legsCount = 4;
        this.sound = '...';
        this.emoji = '';
        this.emojiCount = 2;
    }

    intro() {
        return `Hello, I am a ${this.animalType}, and my name is ${this.name} ${this.emoji.repeat(this.emojiCount)}`
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`
    }
}