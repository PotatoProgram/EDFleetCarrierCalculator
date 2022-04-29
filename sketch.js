const update = document.querySelector("button#updater")
const upkeep = document.querySelector("span#upkeepTotal")
//refuel
const refuelOff = document.querySelector("input#refuelOff")
const refuelSus = document.querySelector("input#refuelSusp")
const refuelOn = document.querySelector("input#refuelOn")
//repair
const repairOff = document.querySelector("input#repairOff")
const repairSus = document.querySelector("input#repairSusp")
const repairOn = document.querySelector("input#repairOn")



//begin numerical vars
 let totalUpkeep = 0
  let refuelUpkeep = 0
  let repairUpkeep = 0
  let restockUpkeep = 0
  let intFacUpkeep = 0 //also referred to as Redemption Office
  let shipyardUpkeep = 0
  let outfitUpkeep = 0
  let secWareUpkeep = 0 //also referred to as Secure Warehouse or black market
  let uniCartUpkeep = 0 //unshortened name: Universal Cartographics
  let barUpkeep = 0
  let vistaGenUpkeep = 0 //aka Vista Genomics
  let pioSuppliesUpkeep = 0
  //end var declaration
  //begin function calls
update.onclick = () => {
  refuel();
  repair();
  //reserved for restock
  //reserved for IntFac
  //reserved for shipyard
  //reserved for outfitting
  //reserved for black market
  //reserved for UniCart
  //reserved for bar
  //reserved for VistaGen
  //reserved for PioSupp 
  upkeepUpdater();
}




function upkeepUpdater() { //onclick events for upkeep
    totalUpkeep = refuelUpkeep+repairUpkeep+restockUpkeep+intFacUpkeep+shipyardUpkeep+outfitUpkeep+secWareUpkeep+uniCartUpkeep+barUpkeep+vistaGenUpkeep+pioSuppliesUpkeep
    upkeep.innerHTML = totalUpkeep
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
}
