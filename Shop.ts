import {Part} from "./Part";

export class Shop {

    private _boughtParts: Part[] = [];
    private _totalQuantity: number;

    constructor(
        private _capital: number,
    ) {
        this._totalQuantity = 0;
    }

    get capital(): number {
        return this._capital;
    }

    public buyPart(part: Part) {
        if (this._capital < part.price) {
            console.log('Not enough cE6ovica my friend, hodi da si igraesh v pesachnika')
        } else {
            this._capital -= (part.price * part.quantity);
            this._totalQuantity += part.quantity
            this._boughtParts.push(part);
            console.log(`You have on stock ${part.quantity}px of ${part.name} `)

        }
        console.log(`This your shop's quantity:  ${this._totalQuantity}`);
    }

    public sellPart(partName: string, qty: number) {

        for (let i = 0; i < this._boughtParts.length; i++) {
            const part = this._boughtParts[i];

            if (partName === part.name) {
                if (part.quantity < 0) {
                    console.log('Not enough quantity my friend!')
                    break;
                } else {
                    let profit = (qty * part.price) * 0.2
                    this._capital += (qty * part.price) * 1.2
                    part.quantity -= qty;
                    console.log(part.quantity);
                    console.log(`Your shop have ${this._capital}`);
                    console.log(`Your profit is ${profit}`);
                    console.log(`You have ${part.quantity} remaining quantity of ${partName}!`);
                    console.log('You sell like a monster dude!!!');
                    if (part.quantity <= 0) {
                        this._boughtParts.splice(i - 1, 1);
                        console.log(`The quantity of ${partName} is over`)
                        console.log(`Array of parts includes ${this._boughtParts.length}`)
                    }
                }

            } else if (partName !== part.name) {
                let counter = 0;
                counter++;
                if (counter === this._boughtParts.length) {
                    console.log('Nqma v sklada brat!');
                }
            }
        }
    }
}
