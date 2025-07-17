let key = 1

export const makePottery = (shapeOfPiece, weightOfPiece, heightOfPiece) => {
    const obj = {
        shape: shapeOfPiece,
        weight: weightOfPiece,
        height: heightOfPiece,
        id: key
    }
    key++
    return obj
}