import React from 'react';
import './App.css';
import './Style.css';
import Test from './components/Test';
import Navbar from './components/Navbar';
// import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Slider /> */}
      <p>Hello world</p>
      <Test />
      <Footer />
    </div>
  );
}

export default App;
