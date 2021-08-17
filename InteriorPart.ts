import {Part} from "./Part";

export class InteriorPart extends Part{

    constructor(
        name:string,
        price: number,
        quantity: number,
        private material: string,
        private fragile: boolean,
    ) {
        super(name, price, quantity);
    }


}
