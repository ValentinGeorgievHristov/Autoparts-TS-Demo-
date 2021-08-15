import {Part} from "./Part";

export class ConsumableItem extends Part{

    constructor(
        name:string,
        price: number,
        quantity: number,
        // private quantity1: number,
        private expiryDate: number,
    ) {
        super(name, price, quantity);
    }

}
