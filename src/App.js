
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pharmaceutical from './components/pages/Pharmaceuticals';
import NavBar from './components/inc/Navbar';
import Footer from './components/inc/footer';
import Nutraceutical from './components/pages/Nutraceutical';
import Surgical from './components/pages/Surgical';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pharmaceutical" element={<Pharmaceutical />} />
         <Route path='/Nutraceutical' element={<Nutraceutical />} />
        <Route path="/Surgical" element={<Surgical />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
