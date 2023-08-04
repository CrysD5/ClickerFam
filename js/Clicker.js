class Clicker {
  constructor() {
    this.Click = 0
    this.Count = 1

    this.tCount = this.Count
    this.mCount = this.Count
    this.aCount = this.Count
    this.sCount = this.Count

    this.autoClickerCount = 0
    this.autoClickerCost = 100

    this.tacCount = this.autoClickerCount
    this.tacCost = this.autoClickerCost

    this.multiplierCount = 0
    this.multiplierCost = 10

    this.tmCount = this.multiplierCount
    this.tmCost = this.multiplierCost

  }

  Clicked() {
    this.Click = this.Click + this.Count
  }

  getCount() {
    return this.Click
  }


  addAutoClicker() {
    if (this.Click >= this.autoClickerCost) {
      this.Click = this.Click - this.autoClickerCost
      this.autoClickerCount++
      this.increaseAutoClickerCost()
    }
  }

  increaseAutoClickerCost() {
    this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * 0.01
  }

  getAutoClickerCount() {
    return this.autoClickerCount
  }

  getAutoClickerCost() {
    return this.autoClickerCost
  }

  makeAutoClickerWork() {
    this.Click = this.Click + this.autoClickerCount * this.Count
  }

  addMultiplier() {
    if (this.Click >= this.multiplierCost) {
      this.Click = this.Click - this.multiplierCost
      this.multiplierCount++
      this.increaseMultiplierCost()
      this.increaseClickCountPercentage()
    }
  }

  getMultiplierCount() {
    return this.multiplierCount
  }

  getMultiplierCost() {
    return this.multiplierCost
  }

  increaseMultiplierCost() {
    this.multiplierCost = this.multiplierCost + this.multiplierCost * 0.01
  }

  increaseClickCountPercentage() {
    this.Count = this.Count + this.Count * 0.02
  }

  getValue() {
    return this.Count
  }
}

