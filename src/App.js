import logo from './logo.svg';
import './Reset.css';
import './App.css';
import Main from './components/Main';
import Company from './components/Company';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import $ from 'jquery';

function App() {
  let navigate = useNavigate();
  let [ mobmenu, setMobmenu ] = useState(false);
  let [ menusl, setMenusl ] = useState('');
  let [ bgblack, setBgblack ] = useState('');

  function mobOn() {
    setMobmenu(true);
    setMenusl('mob-menu-on');
    setBgblack('bg-black-on');
  }
  function mobOff() {
    setMobmenu(false);
    setMenusl('');
    setBgblack('');
  }

  useEffect(() => {
    if(mobmenu === true) {
      $('html').click((e) => {
        if($(e.target).hasClass('bg-black-on')){
          mobOff();
          console.log('mob-close')
        }
      })
    }
  },[mobmenu])

  return (
    <div className="App">
      <div className={'bg-black ' + bgblack}></div>
      
      <div className='header'>
        <img src="https://marcoys.github.io/frea/img/logo_w.png" alt="로고" className='top-logo' style={{ cursor: 'pointer' }} onClick={() => { navigate('/')}}/>

        <ul className='top-menu'>
          <li onClick={() => { navigate('/company')}}><p>회사소개</p></li>
          <li><p>제품정보</p></li>
          <li><p>문의하기</p></li>
        </ul>
        
        <a className='menu-trigger' href="#"  onClick={mobOn}>
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className={'mob-menu ' + menusl}>
          <button onClick={mobOff}>버튼</button>
          <ul>
            <li onClick={() => { navigate('/company')}}><p>회사소개</p></li>
            <li><p>{mobmenu}</p></li>
            <li><p>문의하기</p></li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
