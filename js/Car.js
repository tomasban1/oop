export class car {
    constructor(pavadinimas, modelis, spalva, bakoTuris, kuroLiko, kuroSanaudos) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fullTank = bakoTuris + ' Liters'
        this.fuelLeft = kuroLiko + ' Liters';
        this.fuelConsumption = kuroSanaudos + ' Liters';
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
        } else if (this.fuelTank === 0) {
            return `There is no fuel, fill the tank first.`
        } else {
            this.speed = 50;
            this.fuelConsumption = ((this.fuelConsumption.split(' ')[0]) * 2) + ' Liters';
            this.fuelLeft = (this.fuelLeft.split(' ')[0] - this.fuelConsumption.split(' ')[0]) + ' Liters';

            return `Car has started to move.`
        }
    }
    continueTheRide() {
        if (this.engineRunning === false) {
            return `Turn on the engine and start moving first.`
        } else {
            this.fuelConsumption = '5 Liters';
            this.fuelLeft = (this.fuelLeft.split(' ')[0] - this.fuelConsumption.split(' ')[0]) + ' Liters';
        }
        return `Car is going.`

    }
    stopTheCar() {
        if (parseFloat(this.fuelLeft.split(' ')[0]) === 0) {
            return `The car stopped, because the fuel tank is empty.`
        }
        this.speed = 0;
        return `Car successfully stoped.`
    }

    fuelLeft() {
        return `The fueal tank has ${this.fuelLeft} of fuel left.`
    }

    fillTank() {
        let numbOfLitersFilled = 0;
        if (parseFloat(this.fuelLeft.split(' ')[0]) === 60) {
            return `Fuel tank already full`
        } else if (this.speed > 0) {
            return `Stop the car before filling up the tank.`
        } else {
            numbOfLitersFilled = this.fullTank.split(' ')[0] - this.fuelLeft.split(' ')[0];
            this.fuelLeft = parseFloat((this.fuelLeft.split(' ')[0])) + numbOfLitersFilled + ' Liters';

        }
        return `The car was filled ${numbOfLitersFilled} liters.`

    }




}