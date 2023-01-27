import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBuilding, faWindowRestore, faEnvelopeOpenText, faXmark  } from "@fortawesome/free-solid-svg-icons";


function Header() {
  let navigate = useNavigate();
  let [mobmenu, setMobmenu] = useState(false);
  let [menusl, setMenusl] = useState("");
  let [bgblack, setBgblack] = useState("");

  function mobOn() {
    setMobmenu(true);
    setMenusl("mob-menu-on");
    setBgblack("bg-black-on");
  }
  function mobOff() {
    setMobmenu(false);
    setMenusl("");
    setBgblack("");
  }

  useEffect(() => {
    if (mobmenu === true) {
      $("html").click((e) => {
        if ($(e.target).hasClass("bg-black-on")) {
          mobOff();
          console.log("mob-close");
        }
      });
    }
  }, [mobmenu]);

  return (
    <>
      <div className={"bg-black " + bgblack}></div>
      <div className="header">
        <img
          src="https://marcoys.github.io/frea/img/logo_w.png"
          alt="로고"
          className="top-logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />

        <ul className="top-menu">
          <li
            onClick={() => {
              navigate("/company");
            }}
          >
            <p>회사소개</p>
          </li>
          <li>
            <p>제품정보</p>
          </li>
          <li>
            <p>문의하기</p>
          </li>
        </ul>

        <a className="menu-trigger" href="#" onClick={mobOn}>
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className={"mob-menu " + menusl}>
          <div id="logo-box" style={{ }}>
            <img src="https://marcoys.github.io/frea/img/logo.png" alt="" style={{ width: '285px'}}/>
            <FontAwesomeIcon icon={faXmark} onClick={mobOff}/>
          </div>
          <ul>
            <li onClick={() => { navigate("/");}} >
              <p><FontAwesomeIcon icon={faHome} size='lg'/>HOME</p>
            </li>
            <li onClick={() => { navigate("/company");}} >
              <p><FontAwesomeIcon icon={faBuilding} size='lg'/>회사소개</p>
            </li>
            <li>
              <p><FontAwesomeIcon icon={faWindowRestore} size='lg' />제품정보</p>
            </li>
            <li className="mob-menu-2dp">
              <ul>
                <li>TMS</li>
                <li>PTS</li>
                <li>FVS</li>
              </ul>
            </li>
            <li>
              <p><FontAwesomeIcon icon={faEnvelopeOpenText} size='lg' />문의하기</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
