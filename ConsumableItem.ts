import {Part} from "./Part";

export class ConsumableItem extends Part{

    constructor(
        name: string,
        price: number,
        quantity: number,
        private _expiryDate: Date,
    ) {
        super(name, price, quantity);
    }

}
