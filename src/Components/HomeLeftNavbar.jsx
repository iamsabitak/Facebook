import React from 'react'
import Profile from "./Home-components/Profile";
import Friends from "./Home-components/Friends";
import AdCenter from "./Home-components/AdCenter";
import AdsManager from "./Home-components/AdsManager";
import ClimateSciencecenter from "./Home-components/ClimateSciencecenter";
import Events from "./Home-components/Events";
import Feeds from "./Home-components/Feeds";
import Fundraiser from "./Home-components/Fundraiser";
import Games from "./Home-components/Games";
import GamingVideo from "./Home-components/GamingVideo";
import Groups from "./Home-components/Groups";
import Marketplace from "./Home-components/Marketplace";
import Memories from "./Home-components/Memories";
import Messenger from "./Home-components/Messenger";
import MessengerKids from "./Home-components/MessengerKids";
import Orderandpayments from "./Home-components/Orderandpayments";
import Pages from "./Home-components/Pages";
import Recentadactivity from "./Home-components/Recentadactivity";
import Saved from "./Home-components/Saved";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Accounts from './Home-components/Accounts';
function HomeLeftNavbar() {
  return (
    <div className='leftnavbar' style={{position:'sticky',top:'0'}}>
    <Router>
        <Routes>

        <Route path='/profile' element={<Profile/>}/>
        <Route path='/friends' element={<Friends/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
           <Route path='/memories' element={<Memories/>}/>
           
           <Route path='/saved' element={<Saved/>}/>
           
           <Route path='/groups' element={<Groups/>}/>
         
           <Route path='/marketplace' element={<Marketplace/>}/>
           
           <Route path='/feeds' element={<Feeds/>}/>
          
           <Route path='/events' element={ <Events/>}/>
           
           <Route path='/adsManager' element={<AdsManager/>}/>
           
           <Route path='/fundraiser />' element={<Fundraiser/>}/>
           
           <Route path='/adCenter' element={<AdCenter/>}/>
           
           <Route path='/climateSciencecenter' element={<ClimateSciencecenter/>}/>
           
           <Route path='/gamingVideo' element={<GamingVideo/>}/>
           
           <Route path='/messenger' element={<Messenger/>}/>
           
           <Route path='/messengerKids' element={<MessengerKids/>}/>
          
           <Route path='/orderandpayments' element={ <Orderandpayments/>}/>
           
           <Route path='/pages' element={<Pages/>}/>
           <Games />
           <Route path='/games' element={<Games/>}/>
           <Route path='/recentadactivity' element={<Recentadactivity/>}/>
           </Routes>
    </Router>
    </div>
  )
}

export default HomeLeftNavbar




























