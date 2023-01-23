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
  }
  function mobOff() {
    setMobmenu(false);
  }

  useEffect(() => {
    if( mobmenu == true ) {
      setMenusl('mob-menu-on');
      setBgblack('bg-black-on');
      console.log(mobmenu);
    } else {
      setMenusl('');
      setBgblack('');
      console.log(mobmenu);
    }

    return () => {
    }
  }, [mobmenu])

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

        <button style={{ position: 'absolute', right: 0, top: 0}} onClick={mobOn}>모바일 메뉴</button>

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
