export class dog {
    constructor(vardas, kailioSpalva, amzius) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = amzius;
        this.legsCount = 4;
        this.hasTale = true;
    }

    birthday() {
        this.age++;
        return `Suns ${this.age} gimtadienis`
    }

    lostLeg() {
        if (this.legsCount === 0) {
            return `Suo jau turi nuli koju...`
        }
        this.legsCount--;
        return `Suo prarado koja`
    }

    hi() {
        return 'Labas'
    }

    think() {
        return 'Suo galvoja'
    }

    addNumbers(a, b) {
        return `Suo suskaiciavo : ${a} + ${b} = ${a + b}`;
    }

    manyBones(count) {
        return `Many bones: ${'Kaulas '.repeat(count)}`
    }
}