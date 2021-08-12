import { observer } from 'mobx-react'
import { useRootStore } from '../stores/RootStore'
function AppleItem ({item}) {
  const { appleStore } = useRootStore()
  const { eatApples } = appleStore
  return (
    <div className="appleItem">
      <div className="apple">
        <img src='/images/apple.png' alt="" />
      </div>
      <div className="info">
        <div className="name">{item.title}</div>
        <div className="weight">{item.weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => eatApples(item.id)}> 吃掉 </button>
      </div>
    </div>
  )
}
export default observer(AppleItem)