import {Part} from "./Part";

export class EngineSuspensionPart extends Part {

    constructor(
        name:string,
        price: number,
        quantity: number,
        // deliveryCounter: number = 0,
        private _purpose: string,
        private _weight:string,
        private _connectedWith: string
    ) {
        super(name, price, quantity);
    }


    toString(): string {
        return  `name: ${this.name}, price: ${this.price}, quantity: ${this.quantity},
         purpose: ${this._purpose}, weight: ${this._weight}, connectedWith: ${this._connectedWith}`
    }
}
