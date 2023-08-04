const troy = new Clicker()
const millie = new Clicker()
const archer = new Clicker()
const sarah = new Clicker()

const resetButton = document.getElementById('resetButton');
const tCount = document.getElementById('clickCountTroy');
const buttonTroy = document.getElementById('myTroyButton');
const tVal = document.querySelector('.t-value');
const tacCount = document.querySelector(".tac-count");
const tacBtn = document.querySelector(".tac-btn");
const tacCost = document.querySelector(".tac-cost");
const tmCount = document.querySelector(".tm-count");
const tmBtn = document.querySelector(".tm-btn");
const tmCost = document.querySelector(".tm-cost");

const updateCount = (tCount, troy) =>{
  tCount.textContent = Math.round(troy.getCount())
}
const updateVal = (tVal, troy) => {
  tVal.textContent = troy.getValue().toFixed(1)
}
const updateMultiplierCount = (tmCount, troy) => {
  tmCount.textContent = Math.round(troy.getMultiplierCount())
}
const updateMultiplierCost = (tmCost, troy) => {
  tmCost.textContent = Math.round(troy.getMultiplierCost())
}
const updateAutoClickerCount = (tacCount, troy) => {
  tacCount.textContent = Math.round(troy.getAutoClickerCount())
}

const updateAutoClickerCost = (tacCost, troy) => {
 tacCost.textContent = Math.round(troy.getAutoClickerCost())
}

const reset = resetButton => {
  resetButton.addEventListener("click", () => {
    location.reload()
  })
}

const autoClicker = setInterval(autoClick, 1000)
function autoClick() {
  updateCount(tCount, troy)
  troy.makeAutoClickerWork()
  enableAutoClickerBtn()
  enableMultiplierBtn()
}

// make buttons
const makeTroyBtn = (buttonTroy, tCount, troy) => {
  buttonTroy.addEventListener("click", () => {
    troy.Clicked()
    updateCount(tCount, troy)
  })
}
const makeTmultiBtn = (tmCount, tmBtn, tmCost, troy) => {
  tmBtn.addEventListener("click", () => {
    troy.addMultiplier()
    updateMultiplierCount(tmCount, troy)
    updateMultiplierCost(tmCost, troy)
    // updateVal(tVal, troy)
  })
}
const makeTacBtn = (tacCount, tacBtn, tacCost, troy)=> {
  tacBtn.addEventListener("click", () => {
    troy.addAutoClicker()
    updateAutoClickerCount(tacCount, troy)
    updateAutoClickerCost(tacCost, troy)
  })
}
function enableMultiplierBtn() {
  if (troy.Click >= troy.tmCost) {
    tmBtn.removeAttribute("disabled")
  } else {
    tmBtn.disabled = true
  }
}
function enableAutoClickerBtn(){
  if(troy.Click >= troy.tacCost){
    tacBtn.removeAttribute("disabled")
  }else{
    tacBtn.disabled = true
  }
}


// call fns
makeTroyBtn(buttonTroy, tCount, troy)
makeTmultiBtn(tmCount, tmBtn, tmCost, troy)
makeTacBtn(tacCount, tacBtn, tacCost, troy)
updateVal(tVal, troy)
reset(resetButton)
