import {InteriorPart} from './InteriorPart';
import {EngineSuspensionPart} from './Engine&SuspensionPart';
import {ConsumableItem} from './ConsumableItem';
import { Shop } from './Shop';


const radio = new InteriorPart('radio', 20, 5, 'plastic', true);
const sportSeat = new InteriorPart('seat', 30, 2, 'leather', false);
const phoneHolder = new InteriorPart('phoneHolder', 3,4, 'plastic', false);

const engineFlywheel = new EngineSuspensionPart('flywheel', 500, 1, 'engine & clutch', '7kg', 'crankshaft');

const shop = new Shop(10000);
shop.buyPart(radio);
// shop.buyPart(sportSeat);
// shop.buyPart(phoneHolder);

console.log(`The store have cash ${shop.capital}`);

const line = "BuyPart INTERIOR Radio 20 5 plastic Yes";
const part: string = getPartName(line);
// shop.buyPart(part); //?????????
console.log(part);
// const line = "BuyPart INTERIOR phoneHolder 3 4 plastic No"; //?

function getPartName(line: InteriorPart | EngineSuspensionPart | ConsumableItem){
    let partName: string = '';
    let cmdParts: string[] = line.split(" ");  //????????????????????????????????
    return partName;
}

// console.log(typeof  (getPartName(line))) ///  получавам името на частта! //string

const cmdParts: string[] = line.split(" ");
const cmd = cmdParts[0];

if (cmd === 'BuyPart') {
    const partType = cmd[1];
    if (partType === 'INTERIOR') {
        const part = new InteriorPart(
            cmd[2],
            parseFloat(cmd[3]),
            parseInt(cmd[4]),
            cmd[5],
            cmd[6] === 'Yes'
        )
        //shop.buyPart(radio);// не работи тук
    }
// ---------------------------------------------------
    console.log(shop)
}













// console.log(InteriorPart.bought parts)?????????????
// (async () => {
//     const readline = require('readline');
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     for await (const line of rl) {
//         console.log("You have typed from the console: " + line);
//     }
// })()
