import React from 'react';
import { useNavigate } from 'react-router-dom';


function Header() {
  let navigate = useNavigate();

  return (
    <div className='header'>
      <img src="https://marcoys.github.io/frea/img/logo.png" alt="로고" className='top-logo' style={{ cursor: 'pointer' }} onClick={() => { navigate('/')}}/>

      <ul className='top-menu'>
        <li onClick={() => { navigate('/company')}}><p>회사소개</p></li>
        <li><p>제품정보</p></li>
        <li><p>문의하기</p></li>
      </ul>

    </div>
  )
}

export default Header