import {Part} from "./Part";

export class InteriorPart extends Part{

    constructor(
        name:string,
        price: number,
        quantity: number,
        private _material: string,
        private _fragile: boolean,
    ) {
        super(name, price, quantity);
    }


}
