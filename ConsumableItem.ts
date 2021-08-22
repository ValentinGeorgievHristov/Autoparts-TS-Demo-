import {Part} from "./Part";

export class ConsumableItem extends Part{

    constructor(
        name: string,
        price: number,
        quantity: number,
        // deliveryCounter: number = 0,
        private _expiryDate: Date,
    ) {
        super(name, price, quantity);
    }

    toString(): string {
        return  `name: ${this.name}, price: ${this.price}, quantity: ${this.quantity},
         experyDate: ${this._expiryDate}`
    }
}
