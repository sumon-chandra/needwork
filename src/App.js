import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import Contract from "./components/Contract/Contract";
import Portfolios from "./components/Portfolio/Portfolios";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
// import img from ""
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contract" element={<Contract />} />
          <Route path="portfolio" element={<Portfolios />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
