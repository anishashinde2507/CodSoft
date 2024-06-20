import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Ensure correct path to Navbar component

function App() {
  return (
   <>
    <Router>
      <div className="App">
        <Navbar />
        <main className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  );
}

export default App;
