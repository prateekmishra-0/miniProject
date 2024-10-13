import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
  return(
    <>
      

{/* <!-- Pop-up Section --> */}
<div id="popup">
  <div id="popupc">
    </div>
    <div id="close">
    <i onclick="hidePopup()" className="fa-solid fa-circle-xmark fa-xl"> Close</i>
  </div>
</div>

{/* <!-- Pop-up Section --> */}

{/* <!-- Hero Section --> */}

<section id="hero">
  <div className="hero-image">
    <img src="./assets/profile-pic.png" alt="hero-image" />
  </div>
  <div className="hero-text">
    <p>Let Your Old Device Help The</p>
    <h1>Environment</h1>
    <div className="hero-btn">
      <button method="get" target="_blank" className="hero-map-btn" onClick={() => {
        window.location.href = 'https://www.google.com/maps/search/E-waste+facility+near+me/'
      }}><span>Locate Your Nearest Facility</span></button>
    </div>
  </div>
  <div id="Register">
  <div className="form">
    <div className="container">
      <div className="registerform">
        <h2>Register Your Device</h2>
        <div className="formBox">
          <div className="inputBox">
            <input type="text" id="name" required />
            <span>Your Full Name</span>
          </div>
          <div className="inputBox">
            <input type="text" id="device-company" required />
            <span>Device's Company</span>
          </div>
          <div className="inputBox">
            <input type="text" id="device-model" required />
            <span>Model Number</span>
          </div>
          <div className="inputBox">
            <input type="text" id="mobile-number" required />
            <span>Mobile Number</span>
          </div>
          <div className="inputBox-b">
            <button type="submit" value="Register" id="submit">Register</button>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</div>
<div id="login">
  <div className="form">
    <div className="container">
      <div className="loginform">
        <h2>Login</h2>
        <div className="formBox">
          <div className="inputBox">
            <input type="text" placeholder="Email" id="email" required />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Password" id="password" required />
          </div>
          <div className="inputBox-b">
            <button type="submit" value="Register" id="submit-login">Login</button>
          </div>
        </div>
        <div className="form-link">
          <span>Don't have an account? <a href="#" className="link" onclick="signup()">Sign Up</a></span>
      </div>
      </div>
    </div> 
  </div> 
</div>

<div id="signup">
  <div className="form">
    <div className="container">
      <div className="signupform">
        <h2>Sign Up</h2>
        <div className="formBox">
          <div className="inputBox">
            <input type="text" placeholder="Name" id="name-sign" required />
          </div>  
          <div className="inputBox">
            <input type="email" placeholder="Email" id="email-sign" required />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Password" id="password-sign" required />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Confirm Password" id="confirm-pass"required />
          </div>
          <div className="inputBox-b">
            <button type="submit" value="Register" id="submit-sign">Create Account</button>
          </div>
        </div>
        <div className="form-link">
          <span>Already Have an Account <a href="#" className="link" onclick="login()">Login</a></span>
      </div>
      </div>
    </div> 
  </div> 
</div>
</section>

{/* <!-- Hero Section --> */}

{/* <!-- Feedback --> */}
<footer>
  
</footer>
{/* 
<!-- Feedback --> */}


    </>
  )
}

export default Home;