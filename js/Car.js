export class car {
    constructor(pavadinimas, modelis, kuroTalpa, kuroSanaudos) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = 'red';
        this.fuelTank = kuroTalpa;
        this.fuelConsumption = kuroSanaudos;
        this.engineRunning = false;
        this.speed = 0;
    }

    engineOn() {
        if (this.engineRunning === true) {
            return `Car engine already on.`
        } else {
            this.engineRunning = true;
        }
        return `Car engine turned on successfully.`
    }

    engineOff() {
        if (this.engineRunning === false) {
            return `Car engine already off.`
        } else if (this.speed > 0) {
            return `Stop the car before turning the engine off.`
        } else {
            this.engineRunning = false
        }
        return `Car engine successfully turned off.`
    }

    startRiding() {
        if (this.engineRunning === false) {
            return `Car cannot start moving, turn on the engine first.`
        } else {
            this.speed = 50;
            this.fuelConsumption *= 2;
            this.fuelTank -= this.fuelConsumption
        }

        return `Car has started to move.`
    }
    continueTheRide() {
        if (this.engineRunning === false) {
            return `Turn on the engine and start moving first.`
        } else {
            this.fuelConsumption /= 2;
            this.fuelTank -= this.fuelConsumption;
        }
        return `Car is going.`

    }
    stopTheCar() {
        this.speed = 0;
        return `Car successfully stoped.`
    }

    fillTank() {
        let numbOfLitersFilled = 0;
        if (this.fuelTank === 60) {
            return `Fuel tank already full`
        } else {
            numbOfLitersFilled = 60 - this.fuelTank;
            this.fuelTank += numbOfLitersFilled;

        }
        return `The car was filled ${numbOfLitersFilled} litters.`

    }




}