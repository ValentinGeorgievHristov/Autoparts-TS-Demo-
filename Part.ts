export class Part {

    constructor(
        private _name: string,
        private _price: number,
        private _quantity: number,
    ) {
    }

    get name(): string {
        return this._name;
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

    set quantity(value: number) {
        this._quantity = value;
    }

}
