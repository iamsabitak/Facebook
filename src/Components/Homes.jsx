import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='conatainer1'>
     <div className="Boxes" style={{display:'flex', padding:"4px"}}>
     
<div className="Left-content" style={{
width:"20%",
// backgroundColor:'aqua',
marginTop:'10px',
// border:'2px solid grey'

}}>
  <div className="links" >
<Link style={{textDecoration:'none'}} to='/profile'>Profile</Link><br />
<Link style={{textDecoration:'none'}} to='/friends'>Friends</Link><br />
<Link style={{textDecoration:'none'}} to='/memories'>Memories</Link><br />
<Link style={{textDecoration:'none'}} to='/saved'>Saved</Link><br />
<Link style={{textDecoration:'none'}} to='/groups'>Groups</Link><br />
<Link style={{textDecoration:'none'}} to='/marketplace'>Marketplace</Link><br />
<Link style={{textDecoration:'none'}} to='/feeds'>Feeds</Link><br />
<Link style={{textDecoration:'none'}} to='/events'>Events</Link><br />
<Link style={{textDecoration:'none'}} to='/adsManager'>Ads Manager</Link><br />
<Link style={{textDecoration:'none'}} to='/fundraiser'>Fundraiser</Link><br />
<Link style={{textDecoration:'none'}} to='/adCenter'>Ad Center</Link><br />
<Link style={{textDecoration:'none'}} to='/climateSciencecenter'>Climate Science Center</Link><br/>
<Link style={{textDecoration:'none'}} to='/gamingVideo'>Gaming Video</Link><br />
<Link style={{textDecoration:'none'}} to='/messenger'>Messenger</Link><br />
<Link style={{textDecoration:'none'}} to='/messengerKids'>Messenger Kids</Link><br />
<Link style={{textDecoration:'none'}} to='/orderandpayments'>Orders and payments</Link><br />
<Link style={{textDecoration:'none'}} to='/pages'>Pages</Link><br/>
<Link style={{textDecoration:'none'}} to='/games'>Games</Link><br />
<Link style={{textDecoration:'none'}} to='/recentadactivity'>Recent ad activity</Link><br />
</div>
</div>
<div className="Middle-content" style={{
height:'50%',
width:"60%",
backgroundColor:'yellow'
}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias explicabo ratione distinctio nesciunt deserunt alias assumenda iure reprehenderit aliquid, facere hic officiis mollitia ex eligendi consectetur nobis tempore obcaecati.
</div>
<div className="Right-content" style={{
height:'50%',
width:"20%",
backgroundColor:'orange',

}}>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum impedit nesciunt rem cum, consequuntur reprehenderit quibusdam id voluptate maxime nisi veritatis? Ullam rem aut, sint reiciendis saepe obcaecati magnam.</p>
</div>
</div>
      </div>
      </>
  )
}

export default Home