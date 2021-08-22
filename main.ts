import {InteriorPart} from './InteriorPart';
import {EngineSuspensionPart} from './Engine&SuspensionPart';
import {Shop} from './Shop';
import {ConsumableItem} from "./ConsumableItem";


// const radio = new InteriorPart('radio', 20, 5, 'plastic', true);
//
// const engineFlywheel = new EngineSuspensionPart('flywheel', 500, 1, 'engine & clutch', '7kg', 'crankshaft');

const interiorShop = new Shop(10000);
const shopCore = new Shop(10000);
const consumableShop = new Shop(10000);


(async () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for await (const line of rl) {

        const cmdParts: string[] = line.split(" ");
        const cmd = cmdParts[0];
        const partType = cmdParts[1];
        if (cmd === 'BuyPart') {
            // const partType = cmdParts[1];
            if (partType === 'INTERIOR') {
                const part = new InteriorPart(
                    cmdParts[2],
                    parseFloat(cmdParts[3]),
                    parseInt(cmdParts[4]),
                    cmdParts[5],
                    cmdParts[6] === 'Yes'
                )
                interiorShop.buyPart(part, parseInt(cmdParts[4]));
            } else if (partType === 'CORE') {
                const part = new EngineSuspensionPart(
                    cmdParts[2], //име част
                    parseInt(cmdParts[3]),  //, цена
                    parseInt(cmdParts[4]),             //предназначение
                    cmdParts[5],             // маса
                    cmdParts[6],              //свързани
                    cmdParts[7],
                )
                shopCore.buyPart(part, parseInt(cmdParts[4]));
            }else if(partType === 'CONSUMABLE'){
                const part = new ConsumableItem(
                    cmdParts[2], //име част
                    parseInt(cmdParts[3]),
                    parseInt(cmdParts[4]),
                    new Date(cmdParts[5])
                )
                consumableShop.buyPart(part, parseInt(cmdParts[4]));
            }
        } else if (cmd === "SellPart" && partType == "INTERIOR") {
            interiorShop.sellPart(cmdParts[2], parseInt(cmdParts[3]));
        } else if (cmd === "SellPart" && partType == "CORE") {
            shopCore.sellPart(cmdParts[2], parseInt(cmdParts[3]));
        } else if (cmd === "SellPart" && partType == "CONSUMABLE") {
            consumableShop.sellPart(cmdParts[2], parseInt(cmdParts[3]));
        }


        let partName = cmdParts[2];
        let propertiesOrAll = cmdParts[3];

        if(cmd === "GetPartInfo" && partType == "INTERIOR" ){
            console.log(interiorShop.getPartInfo(partName, propertiesOrAll, partType));
        }else if(cmd === "GetPartInfo" && partType == "CORE"){
            console.log(shopCore.getPartInfo(partName, propertiesOrAll, partType));
        }else if(cmd === "GetPartInfo" && partType == "CONSUMABLE"){
            console.log(consumableShop.getPartInfo(partName, propertiesOrAll, partType));
        }
    }
})()
