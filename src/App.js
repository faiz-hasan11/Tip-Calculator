import './App.css';
import Bill from './components/Bill/Bill';
import Tip from "./components/Tip/Tip"
import Header from "./components/Header/Header"
import { GlobalProvider } from './context/GlobalState';
import AddAmount from './components/AddAmount/AddAmount';
import AddTip from './components/AddTip/AddTip';
import People from './components/People/People';
import Result from './components/Result/Result';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Bill/>
        <AddAmount/>
        <Tip/>
        <AddTip/>
        <People/>
        <Result/>
      </div>
    </GlobalProvider>
  );
}

export default App;
