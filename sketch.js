const update = document.querySelector("button#updater")
const upkeep = document.querySelector("span#upkeepTotal")
const cost = document.querySelector("span#costTotal")
const space = document.querySelector("span#unusedMass")
//refuel
const refuelOff = document.querySelector("input#refuelOff")
const refuelSus = document.querySelector("input#refuelSusp")
const refuelOn = document.querySelector("input#refuelOn")
//repair
const repairOff = document.querySelector("input#repairOff")
const repairSus = document.querySelector("input#repairSusp")
const repairOn = document.querySelector("input#repairOn")
//restock
const restockOff = document.querySelector("input#restockOff")
const restockSus = document.querySelector("input#restockSusp")
const restockOn = document.querySelector("input#restockOn")
//intFac
const intFacOff = document.querySelector("input#intFacOff")
const intFacSus = document.querySelector("input#intFacSusp")
const intFacOn = document.querySelector("input#intFacOn")
//shipyard
const shipyardOff = document.querySelector("input#shipyardOff")
const shipyardSus = document.querySelector("input#shipyardSusp")
const shipyardOn = document.querySelector("input#shipyardOn")
//outfitting
const outfitOff = document.querySelector("input#outfitOff")
const outfitSus = document.querySelector("input#outfitSusp")
const outfitOn = document.querySelector("input#outfitOn")
//black market
const secWareOff = document.querySelector("input#secWareOff")
const secWareSus = document.querySelector("input#secWareSusp")
const secWareOn = document.querySelector("input#secWareOn")
//universal cartographics
const uniCartOff = document.querySelector("input#uniCartOff")
const uniCartSus = document.querySelector("input#uniCartSusp")
const uniCartOn = document.querySelector("input#uniCartOn")
//begin numerical vars
 let totalUpkeep = (0).toLocaleString('en')
 let totalCost = 0
 let totalOccupiedSpace = 0
 //refuel 
 let refuelUpkeep = 0
 let refuelCost = 0
 let refuelSpace = 0
 //repair 
 let repairUpkeep = 0
 let repairCost = 0
 let repairSpace = 0
 //restock 
 let restockUpkeep = 0
 let restockCost = 0
 let restockSpace  = 0
 //intFac (also referred to as Redemption Office)
 let intFacUpkeep = 0
 let intFacCost = 0
 let intFacSpace = 0
 //shipyard 
 let shipyardUpkeep = 0
 let shipyardCost = 0
 let shipyardSpace = 0
 //outfitting 
 let outfitUpkeep = 0
 let outfitCost = 0
 let outfitSpace = 0
 //secure warehouse (also referred to as black market)
 let secWareUpkeep = 0 
 let secWareCost = 0
 let secWareSpace = 0
 //universal cartographics 
 let uniCartUpkeep = 0
 let uniCartCost = 0
 let uniCartSpace = 0
 //bar 
 let barUpkeep = 0
 let barCost = 0
 let barSpace = 0
 //vista genomics 
 let vistaGenUpkeep = 0
 let vistaGenCost = 0
 let vistaGenSpace
 //pioneer supplies 
 let pioSuppliesUpkeep = 0
 let pioSuppliesCost = 0
 let pioSuppliesSpace = 0
  //end var declaration
  //begin function calls
update.onclick = () => {
  refuel();
  repair();
  restock();
  intFac();
  shipyard();
  outfitting();
  secureWarehouse();
  uniCart();
  //reserved for bar
  //reserved for VistaGen
  //reserved for PioSupp 
  updater();
}
//function definitions
function updater() { //onclick events for upkeep
  totalUpkeep = (refuelUpkeep+repairUpkeep+restockUpkeep+intFacUpkeep+shipyardUpkeep+outfitUpkeep+secWareUpkeep+uniCartUpkeep+barUpkeep+vistaGenUpkeep+pioSuppliesUpkeep).toLocaleString('en')
  totalCost = (refuelCost+repairCost+restockCost+intFacCost+shipyardCost+outfitCost+secWareCost+uniCartCost+barCost+vistaGenCost+pioSuppliesCost).toLocaleString('en')
  totalOccupiedSpace = (refuelSpace+repairSpace+restockSpace+intFacSpace+shipyardSpace+outfitSpace+secWareSpace+uniCartSpace+barSpace+vistaGenSpace+pioSuppliesSpace).toLocaleString('en')
  cost.innerHTML = totalCost
  upkeep.innerHTML = totalUpkeep
  space.innerHTML = totalOccupiedSpace
  
}  
function refuel() { //all settings related to the Refuel module
  if (refuelSus.checked == true) {
    refuelUpkeep = 750000
  }
  if (refuelOn.checked == true) {
    refuelUpkeep = 1500000
  }
  if (refuelOff.checked == true) {
    refuelUpkeep = 0
  }
  if (refuelOff.checked != true) {
    refuelCost = 40000000
    refuelSpace = 500
  }
    else {
      refuelCost = 0
      refuelSpace = 0
  }
}
function repair() { //all settings related to the Repair module
  if (repairSus.checked == true) {
    repairUpkeep = 750000
    
  }
  if (repairOn.checked == true) {
    repairUpkeep = 1500000
  }
  if (repairOff.checked == true) {
    repairUpkeep = 0
  }
  if (repairOff.checked != true) {
    repairCost = 50000000
    repairSpace = 180
  }
      else {
      repairCost = 0
      repairSpace = 0
  }
}
function restock() { //all settings related to the restock module
  if (restockSus.checked == true) {
    restockUpkeep = 750000
  }
  if (restockOn.checked == true) {
    restockUpkeep = 1500000
  }
  if (restockOff.checked == true) {
    restockUpkeep = 0
  }
  if (restockOff.checked != true) {
    restockCost = 95000000
    restockSpace = 250
  }
      else {
      restockCost = 0
      restockSpace = 0
  }
}
function intFac() { //all settings related to the intFac module
  if (intFacSus.checked == true) {
    intFacUpkeep = 850000
  }
  if (intFacOn.checked == true) {
    intFacUpkeep = 1850000
  }
  if (intFacOff.checked == true) {
    intFacUpkeep = 0
  }
  if (intFacOff.checked != true) {
    intFacCost = 150000000
    intFacSpace = 100
  }
      else {
      intFacCost = 0
      intFacSpace = 0
  }
}
function shipyard() { //all settings related to the shipyard module
  if (shipyardSus.checked == true) {
    shipyardUpkeep = 1800000
  }
  if (shipyardOn.checked == true) {
    shipyardUpkeep = 6500000
  }
  if (shipyardOff.checked == true) {
    shipyardUpkeep = 0
  }
  if (shipyardOff.checked != true) {
    shipyardCost = 250000000
    shipyardSpace = 3000
  }
      else {
      shipyardCost = 0
      shipyardSpace = 0
  }
}
function outfitting() { //all settings related to the outfitting module
  if (outfitSus.checked == true) {
    outfitUpkeep = 1500000
  }
  if (outfitOn.checked == true) {
    outfitUpkeep = 5000000
  }
  if (outfitOff.checked == true) {
    outfitUpkeep = 0
  }
  if (outfitOff.checked != true) {
    outfitCost = 250000000
    outfitSpace = 1750
  }
      else {
      outfitCost = 0
      outfitSpace = 0
  }
}
function secureWarehouse() { //all settings related to the secure warehouse module
  if (secWareSus.checked == true) {
    secWareUpkeep = 1250000
  }
  if (secWareOn.checked == true) {
    secWareUpkeep = 2000000
  }
  if (secWareOff.checked == true) {
    secWareUpkeep = 0
  }
  if (secWareOff.checked != true) {
    secWareCost = 165000000
    secWareSpace = 250
  }
      else {
      secWareCost = 0
      secWareSpace = 0
  }
}
function uniCart() { //all settings related to the universal cartographics module
  if (uniCartSus.checked == true) {
    uniCartUpkeep = 700000
  }
  if (uniCartOn.checked == true) {
    uniCartUpkeep = 1850000
  }
  if (uniCartOff.checked == true) {
    uniCartUpkeep = 0
  }
  if (uniCartOff.checked != true) {
    uniCartCost = 150000000
    uniCartSpace = 120
  }
      else {
      uniCartCost = 0
      uniCartSpace = 0
  }
}
