import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App"> 
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/services" element = {<Services />} />
        <Route path="/faq" element = {<Faq />} />
        <Route path="/sell" element = {<Sell />} />

      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
