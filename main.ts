import {InteriorPart} from './InteriorPart';
import {EngineSuspensionPart} from './Engine&SuspensionPart';
import {ConsumableItem} from './ConsumableItem';
import { Shop } from './Shop';


const radio = new InteriorPart('radio', 20, 5, 'plastic', true);
const sportSeat = new InteriorPart('seat', 30, 2, 'leather', false);
const phoneHolder = new InteriorPart('phoneHolder', 3,4, 'plastic', false);

const engineFlywheel = new EngineSuspensionPart('flywheel', 500, 1, 'engine & clutch', '7kg', 'crankshaft');

const shop = new Shop(10000);

// const line = "BuyPart INTERIOR Radio 20 5 plastic Yes";
// const line1 = "BuyPart INTERIOR Radio 20 5 plastic Yes";
// const line2 = "BuyPart INTERIOR Radio 20 5 plastic Yes";
// const line3 = "BuyPart INTERIOR Radio 20 5 plastic Yes";
//
// const lines = [line, line1, line2, line3];

(async () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for await (const line of rl) {

        const cmdParts: string[] = line.split(" ");
        const cmd = cmdParts[0];

        if (cmd === 'BuyPart') {
            const partType = cmdParts[1];
            if (partType === 'INTERIOR') {
                const part = new InteriorPart(
                    cmdParts[2],
                    parseFloat(cmdParts[3]),
                    parseInt(cmdParts[4]),
                    cmdParts[5],
                    cmdParts[6] === 'Yes'

                )
                shop.buyPart(part);
            }

            console.log(`The store have cash ${shop.capital}`);
// ---------------------------------------------------
//             console.log(shop)

            // shop.sellPart('radio', 50)
            // console.log(`The store have cash ${shop.capital}`);
        }else if(cmd==="SellPart"){
            // const partForSale = cmdParts[1];
            // const qty:number = cmdParts[2];
            // shop.sellPart(partForSale, qty)
            const part = new InteriorPart(
                cmdParts[2],
                parseFloat(cmdParts[3]),
                parseInt(cmdParts[4]),
                cmdParts[5],
                cmdParts[6] === 'Yes'
            )
            shop.sellPart(cmdParts[2], parseInt(cmdParts[4]))
        }
    }
})()
