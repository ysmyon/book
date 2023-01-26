import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='main-content'>
      <div className='video-box'>
        <video src="https://marcoys.github.io/frea/img/main-bg.mp4" type='video/mp4' loop={true} playsInline={true} muted={true} autoPlay={true}></video>
        <div className='text-box'>
          <h4 data-aos="fade-down" data-aos-delay="300"><span className='txt-org'>F</span>REA FA</h4>
          <h5 data-aos="fade-right" data-aos-delay="500">FA SOLUTION NO.1</h5>
        </div>
        
      </div>

      <div className='main-box1' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h3><span className='txt-navy'>S</span>mart <span className='txt-navy'>F</span>actory <span className='txt-navy'>S</span>olution</h3>

        <p>프레아 에프에이는 제조산업의 생산성과 품질을 혁신하는 솔루션을 생산, 기술, 품질, 영업 업무 전반을 포괄하는 솔루션을 공급하고 있습니다.<br /> 고객사 니즈와 상황에 맞추어 최적의 솔루션 공급으로 고객사의 발전에 기여하고 있습니다.</p>
      </div>

      <div className='main-box2'>
        <h1>제품 정보</h1>
        <div className='prd-box'>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <img src="https://marcoys.github.io/frea/img/imgTMS.jpg" alt="TMS" />
            <h5 className='txt-navy'>TMS</h5>
            <p>Thickness Measurement System</p>
            <p>두꼐 측정 시스템</p>
          </div>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
            <img src="https://marcoys.github.io/frea/img/imgPTS.png" alt="PTS" />
            <h5 className='txt-org'>PTS</h5>
            <p>Product Tracking System</p>
            <p>데이터 관리 시스템</p>
          </div>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="700">
            <img src="https://marcoys.github.io/frea/img/imgFVS.png" alt="FVS" />
            <h5 className='txt-green'>FVS</h5>
            <p>FREA Vision System</p>
            <p>비전 검사기</p>
          </div>
        </div>
      </div>

      <div className='main-box3'>
        <h1>고객사</h1>
        <div className='prd-box'>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <img src="https://marcoys.github.io/frea/img/crown.png" alt="TMS" />
          </div>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
            <img src="https://marcoys.github.io/frea/img/lnc.png" alt="PTS" />
          </div>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="700">
            <img src="https://marcoys.github.io/frea/img/ds.png" alt="FVS" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main