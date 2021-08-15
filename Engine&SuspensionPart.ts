import {Part} from "./Part";

export class EngineSuspensionPart extends Part {

    constructor(
        name:string,
        price: number,
        quantity: number,
        private purpose: string,
        private weight:string,
        private connectedWith: string
    ) {
        super(name, price, quantity);
    }
}
