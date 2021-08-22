import {Part} from "./Part";

export class InteriorPart extends Part{
    get material(): string {
        return this._material;
    }

    set material(value: string) {
        this._material = value;
    }

    get fragile(): boolean {
        return this._fragile;
    }

    set fragile(value: boolean) {
        this._fragile = value;
    }

    constructor(
        name:string,
        price: number,
        quantity: number,
        // deliveryCounter: number = 0,
        private _material: string,
        private _fragile: boolean,
    ) {
        super(name, price, quantity, deliveryCounter);
    }

    toString(): string {
        return   `name: ${this.name}, price: ${this.price}, quantity: ${this.quantity},
         material: ${this._material}, fragile: ${this._fragile}`
    }

    // onlyOneToString(propertiesOrAll : string) {  //?????????????
    //     let result = "";
    //     switch (propertiesOrAll) {
    //
    //              case 'price': result = this.price.toString()
    //                  return result
    //              case 'quantity': result = this.quantity.toString()
    //                  return result
    //              case 'material': result = this._material.toString()
    //                  return result
    //              case 'fragile': result = this._fragile.toString()
    //                  return result
    //              default: result = 'huiova glava INTERIOR'
    //                   return result
    //     }
    //     // return result
    // }
}
