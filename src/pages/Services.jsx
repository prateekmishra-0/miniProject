const Services = () => {
  return (
    <>
      {/* Navbar */}
      <div id="nav-main">
        <nav id="nav">
          <div className="menu-bar">
            <div className="menu-tabs">
              <li>
                <a href="./index.html">
                  <i className="fa-solid fa-house"></i><span>Home</span>
                </a>
              </li>
              <li>
                <a href="./about.html">
                  <i className="fa-solid fa-book-open"></i><span>About</span>
                </a>
              </li>
              <li>
                <a href="./services.html">
                  <i className="fa-solid fa-screwdriver-wrench"></i><span>Services</span>
                </a>
              </li>
              <li>
                <a href="./faq.html">
                  <i className="fa-solid fa-circle-question"></i><span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="./Sell.html">
                  <i className="fas fa-shopping-cart"></i><span>SELL</span>
                </a>
              </li>
            </div>
          </div>
        </nav>
        <div id="nav-down" className="nav-down-2"></div>
        <div id="nav-down" className="nav-down-1"></div>
      </div>

      {/* Top Navbar
      <div id="top">
        <a href="./index.html">
          <img src="assets/img/logo.png" alt="logo" />
        </a>
        <div className="top-login">
          <ul>
            <li>
              <a href="#" id="login-btn">Login</a>
            </li>
            <li>
              <a href="#" id="register-btn">Register</a>
            </li>
            <li>
              <a href="#" id="logout-btn">Logout</a>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Pop-up Section */}
      <div id="popup">
        <div id="popupc"></div>
        <div id="close">
          <i className="fa-solid fa-circle-xmark fa-xl"> Close</i>
        </div>
      </div>

      {/* Service Section */}
      <section id="services">
        <h1>Our Services And Solutions</h1>
        <div className="service-left">
          <div className="box">
            <div className="container1">
              <h4>Data Center Decommissioning</h4>
              <i className="fa-solid fa-database fa-2xl" style={{ color: "#1acc8d" }}></i>
            </div>
            <div className="container2">
              <h4>Enterprise Asset Disposition</h4>
              <i className="fa-solid fa-house-chimney fa-2xl" style={{ color: "#1acc8d" }}></i>
            </div>
            <div className="container3">
              <h4>Environmental Reporting</h4>
              <i className="fa-solid fa-leaf fa-2xl" style={{ color: "#1acc8d" }}></i>
            </div>
          </div>
        </div>
        <div className="service-mid">
          <h1>Our Services And Solutions</h1>
          <div className="box">
            <div className="container">
              <img className="middle-img" src="assets/img/download.jpg" alt="services" />
            </div>
          </div>
        </div>
        <div className="service-right">
          <div className="box">
            <div className="container4">
              <i className="fa-solid fa-lightbulb fa-2xl" style={{ color: "#1acc8d" }}></i>
              <h4>Optimized Innovation</h4>
            </div>
            <div className="container5">
              <i className="fa-solid fa-microchip fa-2xl" style={{ color: "#1acc8d" }}></i>
              <h4>Product Technology</h4>
            </div>
            <div className="container6">
              <i className="fa-solid fa-recycle fa-2xl" style={{ color: "#1acc8d" }}></i>
              <h4>Reverse Supply Chain</h4>
            </div>
          </div>
        </div>
      </section> {/* Ensure the section tag is properly closed */}
    </>
  );
}

export default Services;
