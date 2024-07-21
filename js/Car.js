export class car {
    constructor(pavadinimas, modelis, spalva, kuroTalpa, kuroSanaudos) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTank = kuroTalpa + ' Liters';
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
        let fuelTank = [];
        let consumption = [];
        if (this.engineRunning === false) {
            return `Car cannot start moving, turn on the engine first.`
        } else if (this.fuelTank === 0) {
            return `There is no fuel, fill the tank first.`
        } else {
            this.speed = 50;
            this.fuelConsumption = ((this.fuelConsumption.split(' ')[0]) * 2) + ' Liters';
            this.fuelTank = (this.fuelTank.split(' ')[0] - this.fuelConsumption.split(' ')[0]) + ' Liters';

            return `Car has started to move.`
        }
    }
    continueTheRide() {
        if (this.engineRunning === false) {
            return `Turn on the engine and start moving first.`
        } else {
            this.fuelConsumption = (this.fuelConsumption.split(' ')[0]) / 2 + ' Liters';
            this.fuelTank = (this.fuelTank.split(' ')[0] - this.fuelConsumption.split(' ')[0]) + ' Liters';
        }
        return `Car is going.`

    }
    stopTheCar() {
        if (parseFloat(this.fuelTank.split(' ')[0]) === 0) {
            return `The car stopped, because the fuel tank is empty.`
        }
        this.speed = 0;
        return `Car successfully stoped.`
    }

    fillTank() {
        let numbOfLitersFilled = 0;
        if (parseFloat(this.fuelTank.split(' ')[0]) === 60) {
            return `Fuel tank already full`
        } else {
            numbOfLitersFilled = 60 - this.fuelTank.split(' ')[0];
            this.fuelTank = parseFloat((this.fuelTank.split(' ')[0])) + numbOfLitersFilled + ' Liters';

        }
        return `The car was filled ${numbOfLitersFilled} liters.`

    }




}