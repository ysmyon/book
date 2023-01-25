import logo from './logo.svg';
import './Reset.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Company from './components/Company';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import $ from 'jquery';

function App() {


  return (
    <div className="App">
      
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
