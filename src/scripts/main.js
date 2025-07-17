// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', .5, 1)
let vase = makePottery('vase', 2, 4)
let plate = makePottery('plate', 1, .5)
let bowl = makePottery('bowl', 2, 3)
let cup = makePottery('cup', .4, 2)

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2400)
const firedVase = firePottery(vase, 2000)
const firedPlate = firePottery(plate, 1400)
const firedBowl = firePottery(bowl, 3400)
const firedCup = firePottery(cup, 2200)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

