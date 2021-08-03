import React from 'react'
import './App.css';

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import Particles from 'react-particles-js';
import particleConfig from './components/config/Particle-config';
import Footer from './components/Footer'



const App = () => {

  return (

    <div className="App">

      <div>

        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>

        <Particles params={particleConfig} className="particles"/>

      </div>

    </div>

  );
}

export default App;
