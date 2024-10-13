import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () =>{
  const [pane, setPane] = useState("register");
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const register = document.getElementById("Register");
    const login = document.getElementById("login");
    if (register && login) {
      if (pane == 'register') {
        register.style.display = "block";
        login.style.display = "none";
      } else {
        register.style.display = "none";
        login.style.display = "block";
      }
    }
  }, [pane])

  const loginHandle = () => {
    const path = loc.pathname;
    if (path != '/') {
      nav('/')
      setTimeout(() => {
        setPane(p => p == "register" ? "login" : "register");
      }, 200);
    } else {
      setPane(p => p == "register" ? "login" : "register");
    }
  }

  const [hiddenPopup, setHiddenPopup] = useState(false);

  useEffect(() => {
    const messages = [
      "Electronic waste, or e-waste, refers to discarded electronic devices and equipment, including smartphones, laptops, tablets, televisions, and more. The generation of e-waste has been steadily increasing due to the rapid pace of technological advancement and consumer electronics turnover.",
  
      "E-waste contains hazardous materials such as lead, mercury, cadmium, and various toxic chemicals. If not properly managed, these substances can leach into the environment, contaminating soil, water, and air. This poses significant risks to human health and the ecosystem.",
  
      "Recycling e-waste helps recover valuable resources like precious metals (gold, silver, and palladium), copper, and rare earth elements. This reduces the need for mining and extraction of these materials, which can be both environmentally destructive and resource-intensive.",
  
      "E-waste has become a global issue, with millions of tons generated each year. Many developed countries export their e-waste to developing nations, where it is often processed informally under unsafe conditions, leading to environmental and health concerns.",
  
      "Formal e-waste recycling involves regulated processes in specialized facilities that ensure safe handling and disposal of hazardous materials. Informal recycling, often practiced in developing countries, involves unregulated, makeshift operations that can be harmful to both workers and the environment."
    ];
  
    const popup = document.getElementById('popup');
    const popupc = document.getElementById('popupc');
    const close = document.getElementById('close');
    
    let currentMessageIndex = 0;
    
      function showPopup() {
        if (!popupc) return;
        const message = messages[currentMessageIndex % messages.length];
        popupc.textContent = message;
    
        popup.style.display = 'inline-flex';
        currentMessageIndex++
      };
    setTimeout(showPopup, 3000);
  }, [])

  useEffect(() => {
    const popup = document.getElementById('popup');
    console.log("closing popup")
    if (hiddenPopup && popup) {
      popup.style.display = "none"
    } else if (hiddenPopup === false && popup) {
      // popup.style.display = "block"
    }
  }, [hiddenPopup])


  return(
    <>
        {/* <!-- Navbar --> */}
        <div id="top">
  <Link to="/" id="top-image"><img src="assets/img/logo2.0.png" id="top-rotate" /><img src="assets/img/logo3.0.png"/></Link>
  <div className="top-login">
    <ul>
      <li onClick={loginHandle}><div id="login-btn">{pane == "register" ? "Login" : "Register"}</div></li>
      <li><Link to="/" onclick="Logout()" id="logout-btn">Logout</Link></li>
    </ul>
  </div>
</div>
{/* <!-- Navbar --> */}

<div id="popup">
  <div id="popupc">
    </div>
    <div id="close" onClick={() => {
      setHiddenPopup(prev => !prev);
    }} >
    <i className="fa-solid fa-circle-xmark fa-xl"> Close</i>
  </div>
</div>

    </>
  )
}

export default Header;