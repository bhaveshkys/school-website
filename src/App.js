import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import NavBar from './components/NavBar';
import React, { useRef } from 'react';
import Footer from './components/Footer';
function App() {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <NavBar scrollToContactForm={scrollToContactForm} />
    <Routes>
        <Route exact path='/' element={<Home contactFormRef={contactFormRef}/>} />
        <Route  path='/about-us' element={<AboutUs/>} />
        <Route  path='/academics' element={<Academics/>} />
        <Route  path='/admissions' element={<Admissions/>} />
        <Route  path='/faculty' element={<Faculty/>} />
        <Route  path='/students' element={<Students/>} />
        <Route  path='/gallery' element={<Gallery/>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
