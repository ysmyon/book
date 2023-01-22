import logo from './logo.svg';
import './Reset.css';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main';
import Company from './components/Company';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

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
