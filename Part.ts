export class Part {
    constructor(
        private _name: string,
        private _price: number,
        private _quantity: number,
    ) {
    }

    get price(): number {
        return this._price
    }

    set price(value){
        if(value<0){
            this._price = 0
        }
        this._price = value;
    }

    get quantity(): number{
        return this._quantity;
    }
}
