import logo from './logo.svg';
import './App.css';

//Pages
import HomePage from './Pages/HomePage';

//tools
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Ilolo Izu Photography
        </p>

        <div className="main-content">
          <div className="content"> 
            <Routes>
                <Route path="/home" element={<HomePage/>}>
                </Route>
            </Routes>
          </div>
    
      </div>
      </header>
    </div>
  );
}

export default App;
