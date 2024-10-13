import { useEffect } from "react";

const About = () => {
  useEffect(() => {
      let valueDisplays = document.querySelectorAll(".num");
      let interval = 1000;
      valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(interval / endValue);
          let counter = setInterval(function () {
              startValue += 1;
              valueDisplay.textContent = startValue;
              if (startValue == endValue) {
              clearInterval(counter);
          }
          }, duration);
      });
  }, [])


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


{/* <!-- About Section --> */}

<section id="about">
    <div className="header">
      <h3>About E-Waste Facility</h3>
      <hr className="line" />
    </div>
    <div className="content">
      <div className="feature1">
        <i className="icon fa fa-sun"></i>
        <h6>WHO E-WASTE FACILITY ARE!</h6>
        <h4>New Age Recyclers</h4>
        <p>We are a new age techno-commercial E-waste recycling expert, enabling the environmental value-chain for all.</p>
      </div>
      <div className="feature2" id="second">
        <i className="icon fa fa-recycle"></i>
        <h6>WHAT E-WASTE FACILITY DO!</h6>
        <h4>Recycling Solutions</h4>
        <p>All The Precious Materials Inside Your Device.</p>
      </div>
      <div className="feature3" >
        <i className="icon fa fa-seedling"></i>
        <h6>OUR GOAL</h6>
        <h4>Environmental Sustainability</h4>
        <p>We keep the environment first and bring in the purpose to address related issues and build a co-existing ecology.</p>
      </div>
    </div>
    <div className="counter">
      <div className="container">
        <i className="fa-solid fa-house-chimney"></i>
        <span className="num" data-val="333">000</span>
        <span className="text">E-waste Facility</span>
      </div>
      <div className="container">
        <i className="fa-sharp fa-solid fa-recycle"></i>
        <span className="num" data-val="22">000</span>
        <span className="text">E-waste Recycled (Tons/Annum)</span>
      </div>
      <div className="container">
        <i className="fa-solid fa-business-time"></i>
        <span className="num" data-val="116">000</span>
        <span className="text">People Hired</span>
      </div>
      <div className="container">
        <i className="fa-solid fa-percent"></i>
        <span className="num" data-val="100">000</span> 
        <span className="text">Environment Protection</span>
      </div>
    </div>
</section>
  
  {/* <!-- About Section --> */}


    </>
  )
}

export default About;