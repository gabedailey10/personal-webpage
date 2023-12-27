import { Routes, NavLink, Route } from 'react-router-dom'
import './App.css';
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import headshot from './images/headshot.JPG'
function App() {
  return (
      <div className='appContainer'>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>
                <img src={headshot} alt='Headshot' className='navbar-image' />
              </NavLink>
            </li>
            <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
            <li><NavLink to='/about' className='nav-link' >About</NavLink></li>
            <li><NavLink to='/contact' className='nav-link' >Contact</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;