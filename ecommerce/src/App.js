
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';


const App = () => {
    return (
      <div>
     
      <Navbar />
     <Hero />
     </div>
    );
};

export default App;
