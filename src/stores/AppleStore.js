
import { action, computed, flow, makeObservable, observable } from 'mobx'
class AppleStore {
  constructor () {
    this.appleList = []
    this.buttonText = '摘苹果'
    this.isPicking = false
    makeObservable(this, {
      appleList: observable,
      buttonText: observable,
      isPicking: observable,
      pickApples: flow.bound,
      eatApples: action.bound,
      overApples: computed,
      overApplesWeight: computed,
      overApplesSum: computed,
      eatApplesWeight: computed,
      eatApplesSum: computed
    })
  }
  // 摘苹果
  *pickApples () {
    if (this.isPicking) return false
    this.buttonText = '正在采摘...'
    this.isPicking = true
    yield setTimeout(() => {
      this.appleList.push({
        id: this.createAppleId(),
        title: `红苹果 - ${this.createAppleId()}号`,
        isEat: false,
        weight: this.createWeight()
      })
      this.isPicking = false
      this.buttonText = '摘苹果'
    }, 2000)
  }
  // 吃苹果
  eatApples (id) {
    const index = this.appleList.findIndex(item => item.id === id)
    if (index !== -1) this.appleList[index].isEat = true
  }
  createAppleId () {
    return this.appleList.length + 1
  }
  createWeight () {
    return parseInt(200 * Math.random())
  }
  // 剩余苹果
  get overApples () {
   return this.appleList.filter(item => !item.isEat)
  }
  // 剩余苹果重量
  get overApplesWeight () {
    const apples = this.appleList.filter(item => !item.isEat)
    const weight = apples.reduce((total, curr) => total + curr.weight, 0)
    return weight
  }
  // 剩余苹果数量
  get overApplesSum () {
    const apples = this.appleList.filter(item => !item.isEat)
    return apples.length
  }
  // 吃掉苹果重量
  get eatApplesWeight () {
    const apples = this.appleList.filter(item => item.isEat)
    const weight = apples.reduce((total, curr) => total + curr.weight, 0)
    return weight
  }
  // 吃掉苹果数量
  get eatApplesSum () {
    const apples = this.appleList.filter(item => item.isEat)
    return apples.length
  }
}

export default AppleStore