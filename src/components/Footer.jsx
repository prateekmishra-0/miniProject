import { Link } from "react-router-dom";

const Footer = () =>{
  return(
    <>
        <div id="nav-main">
<nav id="nav"> 
  <div className="menu-bar">
    <div className="menu-tabs">
      <li><Link to ="/"><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
      <li><Link to ="about"><i className="fa-solid fa-book-open"></i><span>About</span></Link></li>
      <li><Link to ="services"><i className="fa-solid fa-screwdriver-wrench"></i><span>Services</span></Link></li>
      <li><Link to ="faq"><i className="fa-solid fa-circle-question"></i><span>FAQ</span></Link></li> 
      <li><Link to="sell"><i class="fas fa-shopping-cart"></i><span>SELL</span></Link></li> 
    </div>
  </div>
</nav>
<div id="nav-down" className="nav-down-2"></div>
<div id="nav-down" className="nav-down-1"></div>


</div>
    </>
  )
}

export default Footer;