import {Part} from "./Part";

export class Shop {

    private _boughtParts: Part[] = [];

    constructor(
        private _capital: number,
    ) {
    }

    get capital(): number {
        return this._capital;
    }

    public showObjName() {
        for (let i = 0; i < this._boughtParts.length; i++) {
            // console.log(`ObjName !!!!!!!!!!!!!!!!: ${this._boughtParts[i].name}`)
        }
    }

    public buyPart(part: Part, qty: number) {
        if (this._capital < part.price * qty) {
            return console.log(`We need ${part.price * qty - this._capital} more money to buy this part`)
        }
        if (this.isItemExist(part)) {
            // let match = this._boughtParts.find(p => p.name === part.name)
            for (let i = 0; i < this._boughtParts.length; i++) {
                if (part.name === this._boughtParts[i].name) {
                    this._boughtParts[i].quantity += qty;
                    this.calculateQuantityAndCapital(part.price, qty)
                    console.log(`We successfully bought ${qty} count from ${part.name} part and now we have ${this._boughtParts[i].quantity} availability in our shop!`)
                    // console.log("quantity na radioto" + this._boughtParts[i].quantity)
                }
            }
        } else {
            part.quantity = qty
            this._boughtParts.push(part)
            this.calculateQuantityAndCapital(part.price, qty)
            console.log(`We successfully bought ${qty} count from ${part.name} part and now we have ${this._boughtParts[0].quantity} availability in our shop!`)
        }
    }

    public sellPart(partName: string, qty: number) {

        for (let i = 0; i < this._boughtParts.length; i++) {
            const part = this._boughtParts[i];

            if (partName === part.name) {
                if (part.quantity >= qty) {
                    let profit = (qty * part.price) * 0.2
                    this._capital += (qty * part.price) * 1.2
                    part.quantity -= qty;
                    console.log(`We successfully sold ${qty} count from ${this._boughtParts[i].name} part and now have ${part.quantity} availability in our shop!`)
                    // console.log(part.quantity);
                    // console.log(`Your shop have ${this._capital}`);
                    // console.log(`Your profit is ${profit}`);
                    // console.log(`You have ${part.quantity} remaining quantity of ${partName}!`);
                    // console.log('You sell like a monster dude!!!');
                } else if (part.quantity < 0) {
                    this._boughtParts.splice(i - 1, 1);
                    break;
                } else {
                    console.log(`We need ${qty - part.quantity} more availability to sell this part`);
                }

            } else{
                     console.log('This part does not exist in your store!');  // Допълнение...
            }
        }
    }

    private calculateQuantityAndCapital(price: number, quantity: number): number {
        return this._capital -= price * quantity
    }

    ///////true ако съществува в масива (трябва да вдигнеш quantity) и false ако не (трябва да я добавиш)
    private isItemExist(part: Part): boolean {
        let itemExist: boolean = false;

        for (let i = 0; i < this._boughtParts.length; i++) {
            if (this._boughtParts[i].name == part.name) {
                itemExist = true;
                break;
            }
        }

        return itemExist;
    }
}

