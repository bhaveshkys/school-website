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
function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/about-us' element={<AboutUs/>} />
        <Route  path='/academics' element={<Academics/>} />
        <Route  path='/admissions' element={<Admissions/>} />
        <Route  path='/faculty' element={<Faculty/>} />
        <Route  path='/students' element={<Students/>} />
        <Route  path='/gallery' element={<Gallery/>} />
    </Routes>
    </Router>
  );
}

export default App;
