import React from 'react';
import './SwipeDown.css';

const SwipeDown = ({ gold }) => {
  return (
    <div className={`swipe-down ${gold ? 'swipe-down-gold' : ''}`}>
        <div className="swipe-down__gesture">
          <div className="swipe-down__icon"></div>
        </div>
        <p className="swipe-down__title">SWIPE DOWN</p>
    </div>
  );
}

export default SwipeDown;