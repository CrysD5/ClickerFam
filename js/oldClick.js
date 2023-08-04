const buyMultiplierButton = document.getElementById('multiplyButton');
const buyAutoClickerButton = document.getElementById('autoButton');

let countTroy = 0;
let multiTroy = 0;
let autoTroy = 0;
const buttonTroy = document.getElementById('myTroyButton');
const tCount = document.getElementById('clickCountTroy');
const multiDisplayTroy = document.getElementById('tMultiUpgrades');
const autoDisplayTroy = document.getElementById('tAutoUpgrades');
const multiplierDisplayTroy = document.getElementById('multiplierDisplayTroy');
const autoClickerDisplayTroy = document.getElementById('autoClickerDisplayTroy');
const troysUpgrades = document.getElementById('tUpgradeCount');

buttonTroy.addEventListener('click', function() {
  // countTroy++;
  countTroy += 1 + multiTroy;
  tCount.textContent = countTroy;
  checkUpgradeAvailability();
});

buyMultiplierButton.addEventListener('click', function() {
  if (countTroy >= 10) {
    countTroy -= 10;
    multiTroy += 1;
    multiplierDisplayTroy.style.display = 'block';
    multiDisplayTroy.textContent = multiTroy;
    tCount.textContent = countTroy;
    checkUpgradeAvailability();
  }
});

buyAutoClickerButton.addEventListener('click', function() {
  if (countTroy >= 50) {
    countTroy -= 50;
    autoTroy += 1;
    autoClickerDisplayTroy.style.display = 'block';
    autoDisplayTroy.textContent = autoTroy;
    tCount.textContent = countTroy;
    checkUpgradeAvailability();
  }
});

function checkUpgradeAvailability() {
  buyMultiplierButton.style.display = countTroy >= 10 ? 'block' : 'none';
  buyAutoClickerButton.style.display = countTroy >= 50 ? 'block' : 'none';
}

setInterval(function() {
  if (autoTroy > 0) {
    countTroy += Math.pow(2, autoTroy) + 2*multiTroy;
    tCount.textContent = countTroy;
    checkUpgradeAvailability();
  }
}, 1000);

let countMillie = 0;
const buttonMillie = document.getElementById('myMillieButton');
const displayMillie = document.getElementById('clickCountMillie');
buttonMillie.addEventListener('click', function() {
  countMillie++;
  displayMillie.textContent = countMillie;
});

let countArcher = 0;
const buttonArcher = document.getElementById('myArcherButton');
const displayArcher = document.getElementById('clickCountArcher');

buttonArcher.addEventListener('click', function() {
  countArcher++;
  displayArcher.textContent = countArcher;
});

let countSarah = 0;
const buttonSarah = document.getElementById('mySarahButton');
const displaySarah = document.getElementById('clickCountSarah');
buttonSarah.addEventListener('click', function() {
  countSarah++;
  displaySarah.textContent = countSarah;
});


resetButton.addEventListener('click', function () {
  countTroy = 0;
  countMillie = 0;
  countArcher = 0;
  countSarah = 0;
  tCount.textContent = countTroy;
  displayMillie.textContent = countMillie;
  displayArcher.textContent = countArcher;
  displaySarah.textContent = countSarah;

});
