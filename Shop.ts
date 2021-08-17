import {Part} from "./Part";

export class Shop {

    private _boughtParts: Part[] = [];

    constructor(
        private _capital: number
    ) {
    }

    public buyPart(part: Part) {
        if (this._capital < part.price) {
            console.log('Not enough cE6ovica my friend, hodi da si igraesh v pesachnika')
        } else {
            this._capital -= (part.price * part.quantity);
            this._boughtParts.push(part);
            console.log(`You have on stock ${part.quantity}px of ${part.name} `)
        }
    }


    public sellPart(partName: string, qty: number) {
        console.log(this._boughtParts.length + "duljina na masiva");

        // const part = new Part();

        //Обхождаме частите
        //Запазваме част в променлива на всяка итерация
        //Проверяваме дали частта на името съответства с partName
        //Увеличаваме капитала като сме продали частта
        //Премахваме частта от масива, понеже вече сме я продали

        for (let i = 0; i < this._boughtParts.length; i++) {
            const part = this._boughtParts[i];

            if (partName === part.name) {
                if (part.quantity < qty) {
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
                    if(part.quantity<=0){
                        this._boughtParts.splice(i - 1, 1);
                        console.log(`The quantity of ${partName} is over`)
                        console.log(`Array of parts includes ${this._boughtParts}`)
                    }
                }


            } else if (partName !== part.name) {
                let counter = 0;
                counter ++;
                if (counter===this._boughtParts.length){
                    console.log('Nqma v sklada brat!');
                }
                // console.log('Nqma v sklada brat!')
            }
        }

    }

    get capital(): number {
        return this._capital;
    }
}


// let part = new Part("test", 500, 2);
// for (let i = 0; i < this._boughtParts.length; i++) {
//     part = this._boughtParts[i];
//
//     if (part.name === partName) {
//         console.log(partName);
//         this._capital += (part.price * 1.2) * part.quantity
//         console.log("bi trqbvalo kapitala mi da naraste : " + this._capital)
//         this._boughtParts.splice(i - 1, 1);
//     }
// }
// if (this.boughtParts.includes(part.name)) {
//
//     this._capital += ((part.price * 1.2) * part.quantity);
//     part.quantity--;
//     console.log(`You earn ${this._capital - (this._capital / 1.2)} you sel successfully ${part.name}`)
// } else {
//     console.log(`We haven't ${part.name}`)
// }


// function sum(a,b) {
//     return a+b;
// }
//
// sum(6,7);

// new Shop(1000).sellPart(new Part())
