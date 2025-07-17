const potteryToSell = []

export const toSellOrNotToSell = (obj) => {
    if(obj.weight >= 6 && obj.cracked === false){
        obj.price = 40
    }else if(obj.weight < 6 && obj.cracked === false){
        obj.price = 20
    }

    if(obj.cracked === false){
        potteryToSell.push(obj)
    }
    return obj
}

export const usePottery = () => {
    const clonedArray = structuredClone(potteryToSell)
    return clonedArray
}