import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Start } from './components/Start';
import { Authorized } from './components/Authorized';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Start />} />
            <Route path="/oauth2_callback" element={<Authorized />} />

          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;

