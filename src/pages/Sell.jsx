const Sell = () => {
  return (
    <>
      <div id="sell" className="section">
        <h1>Sell Your E-Waste</h1>
        <div id="companies" className="section">
          <h2>E-Waste Recycling Companies</h2>
          <ul>
            <li>EcoTech Recyclers</li>
            <li>GreenCircuit Solutions</li>
            <li>ByteBack Recycling</li>
            <li>ElectroEarth Disposal</li>
            <li>TechCycle Innovations</li>
          </ul>
        </div>
        <div className="sell-mid">
          <h2>Sell Your Device</h2>
          <div className="box">
            <div className="container">
              <form id="sell-form">
                <div className="form-group">
                  <label htmlFor="device-type">Device Type:</label>
                  <input type="text" id="device-type" name="device-type" required />
                </div>
                <div className="form-group">
                  <label htmlFor="device-condition">Device Condition:</label>
                  <select id="device-condition" name="device-condition" required>
                    <option value="">Select condition</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="device-age">Device Age (in months):</label>
                  <input type="number" id="device-age" name="device-age" required />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div id="popup">
          <div id="popupc"></div>
          <div id="close">Close</div>
        </div>
      </div>
    </>
  );
};

export default Sell;
