import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './Components/Sidebar/SideBar'; // Import your Sidebar component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './Components/Home'; // Import your Home component
import Form from './Components/InputForm/Form'; // Import your Form component
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Accuracy from './Components/QuestionPaperDetails/Accuracy';
import Download from './Components/Download/Download'
// import Download from './Components/Download/Download'
import About from './Components/About/About'
const App = () => {
  return (

    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-800 bg-gra to-red-400">
        {/* Header */}
        <Header />

        <div className="flex flex-grow overflow-y-auto">
          {/* Sidebar */}
          <Sidebar className="w-64" /> {/* Set fixed width of 64 Tailwind units */}



          {/* Main content */}
          <div className="flex-grow w-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Form />} />
              <Route path="/Accurracy" element={<Accuracy/>} />
              <Route path="/download" element={<Download/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      
    </Router>
    
  );
};

export default App;
