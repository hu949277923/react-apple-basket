import { useRootStore } from "../stores/RootStore"
import { observer } from 'mobx-react'
import AppleItem from "./AppleItem"
function AppleBusket () {
  const { appleStore } = useRootStore()
  const {
    pickApples, 
    overApples,
    overApplesWeight,
    overApplesSum,
    eatApplesWeight,
    eatApplesSum,
    isPicking,
    buttonText
  } = appleStore
  let showEmpty
  if (!overApples.length) showEmpty = (<div className="empty-tip" key="empty">苹果篮子空空如也</div>)
  console.log(appleStore.appleList)
  return (
    <div className="appleBusket">
      <div className="title">苹果篮子</div>
      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {overApplesSum}个苹果，{overApplesWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
          {eatApplesSum}个苹果，{eatApplesWeight}克
          </div>
        </div>
      </div>

      <div className="appleList">
        {
          overApples.map((item) => (<AppleItem key={item.id} item={item}/>))
        }
        {showEmpty}
      </div>

      <div className="btn-div">
          <button className={isPicking ? 'disabled': ''} onClick={pickApples} >{buttonText}</button>
      </div>
    </div>)
}
export default observer(AppleBusket)
