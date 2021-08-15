import {Part} from "./Part";

export class Shop{

    private boughtParts: Part[] = [];

    constructor(
        private _capital: number
    ) {
    }

    public buyPart(part: Part){
        if(this._capital < part.price){
            console.log('Not enough cE6ovica my friend, hodi da si igraesh v pesachnika')
        }else {
            this._capital -= (part.price * part.quantity);
            this.boughtParts.push(part);
        }
    }

    get capital(): number{
        return this._capital;
    }
}
