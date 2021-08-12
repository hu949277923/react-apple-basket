import AppleBusket from './components/AppleBusket'
import { RootStore, RootStoreProvider } from "./stores/RootStore"
const rootStore = new RootStore()
function App() {
  return (
    <RootStoreProvider store={rootStore}>
     <AppleBusket/>
    </RootStoreProvider>
  );
}

export default App;
