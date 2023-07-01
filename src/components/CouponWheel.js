import React, { useState } from 'react';
// import './CouponWheel.css';

const CouponWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState('');

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setPrize('try again');
    }, 2000); // Adjust the timeout value as per your preference for the spinning duration
  };

  const handleSpinAgain = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      const randomPrize = Math.random() < 0.5 ? 'gift card A' : 'gift card B';
      setPrize(randomPrize);
    }, 2000); // Adjust the timeout value as per your preference for the spinning duration
  };

  return (
    <>
   
    <div className="coupon-wheel">
    <div className='arrow'></div>
      <div className={`wheel ${isSpinning ? 'spinning' : ''}`}>
        {/* <img src="https://img.freepik.com/free-vector/spin-fortune-wheel-luck-background_1017-31403.jpg" alt='image'/>  */}
        
        <ul className='circle'>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">1</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">2</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">3</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">4</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">5</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">6</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">7</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">8</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">9</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">10</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">11</div>
          </li>
          <li>
            <div className='text'
             contentEditable="true"
             spellCheck="false">12</div>
          </li>
          
          
        </ul>
      </div>
      <button onClick={prize ? handleSpinAgain   : handleSpin}>
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {prize && <p className="prize">{prize}</p>}
    </div>
    </>
  );
};

export default CouponWheel;
