import React from 'react';
import './App.css';
import './Style.css';
import Navbar from './components/Navbar';
import CarouselSlider from './components/CarouselSlider';
import Tiles from './components/Tiles';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <CarouselSlider />
      <Tiles />
      <Category />
      <Footer />
    </div>
    
  );

}

export default App;
