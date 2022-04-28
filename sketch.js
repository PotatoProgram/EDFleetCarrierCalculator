const update = document.querySelector("button#updater")
const upkeep = document.querySelector("span#upkeepTotal")
let totalUpkeep = 0
const refuelOff = document.querySelector("input#refuelOff")
const refuelSus = document.querySelector("input#refuelSusp")
const allButtons = document.querySelector("input")


input.onclick() = () => {
  
}
  refuel();
  //reserved for repair
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


function upkeepUpdater() { //onclick events for upkeep
  update.onclick = () => {
    upkeep.innerHTML = totalUpkeep
  }
}  

function refuel() { //all settings related to the Refuel module
  if (refuelSus.checked == true) {
    totalUpkeep += 750000
  }
}