import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/nav';
import Services from './components/services';
import About from './components/About';
import Prices from './components/prices';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div> 
    <BrowserRouter>
    <Banner/>
    <Navbar/>
    <Services/>
    <About/>
    <Prices/>
    <Contact/>
  
    </BrowserRouter>
  
 
    </div>
  );
}

export default App;
