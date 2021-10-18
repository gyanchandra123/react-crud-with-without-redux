import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";
import ItemContainer from "./components/ItemContainer";
import TransactionalList from "./react-crud/with-redux/components/TransactionalList";
/* function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <HooksCakeContainer></HooksCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer> 
      </div>
    </Provider>
  );
}

export default App; */

function App() {
  return (
    <div>
      <TransactionalList />
    </div>
  );
}

export default App;
