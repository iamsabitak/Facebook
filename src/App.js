import "./App.css";
import Homes from "./Components/Homes";
import Marketplace from "./Components/Marketplace";
import Gaming from "./Components/Gaming";
import Account from "./Components/Account";
import Groups from "./Components/Groups";
import Menu from "./Components/Menu";
import Notification from "./Components/Notification";
import Messenger from "./Components/Messenger";
import Navbar from "./Components/Navbar";
import FontAwesomeIcon from "./Components/FontAwesomeIcon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/FontAwesomeIcon' element={<FontAwesomeIcon/>}/>
        <Route path='/' element={<Homes/>}/>
        
          <Route path="/marketplace" element={<Marketplace/>}/>
          <Route path='/gaming' element={<Gaming />}/>
            <Route path='/notification' element={<Notification />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/groups' element={<Groups />}/>
            <Route path='/messenger' element={<Messenger />}/>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
