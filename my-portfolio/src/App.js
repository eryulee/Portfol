import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Dropdown from './components/Dropdown'
// import Portfolio from './pages/Portfolio'
import { Switch, Route } from 'react-router-dom'
// import Home from '../pages';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return() => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
         <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} /> 
      </Switch>
      
    </>
  );
}

export default App;
