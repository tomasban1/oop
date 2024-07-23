import { moto } from "./Moto.js";

export class Street extends moto {
    constructor(brand, model) {
        super(brand, model)
        this.year = 2008;
        this.motoType = 'Street bike';
        this.maxSpeed = 265;
        this.exhaustType = 'Full Arrow sport exhaust.';
    }
}