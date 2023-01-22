import React, { useEffect, useState } from 'react'

function Main() {
  let [ down, setDown ] = useState('');
  let [ left, setLeft ] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setDown('down-end');
    }, 500)
    let b = setTimeout(() => {
      setLeft('left-end');
    }, 1000)

    return () => {
      clearTimeout(a, b);
    }
  }, [])

  return (
    <div className='main-content'>
      <div className='video-box'>
        <video src="https://marcoys.github.io/frea/img/main-bg.mp4" type='video/mp4' loop={true} playsInline={true} muted={true} autoPlay={true}></video>
        <div className='text-box'>
          <h4 className={'down ' + down}><span className='txt-org'>F</span>REA FA</h4>
          <h5 className={'left ' + left}>FA SOLUTION NO.1</h5>
        </div>
        
      </div>

      <div className='main-box1'>
        <h3><span className='txt-navy'>S</span>mart <span className='txt-navy'>F</span>actory <span className='txt-navy'>S</span>olution</h3>

        <p>프레아 에프에이는 제조산업의 생산성과 품질을 혁신하는 솔루션을 생산, 기술, 품질, 영업 업무 전반을 포괄하는 솔루션을 공급하고 있습니다.<br /> 고객사 니즈와 상황에 맞추어 최적의 솔루션 공급으로 고객사의 발전에 기여하고 있습니다.</p>
      </div>
      
    </div>
  )
}

export default Main