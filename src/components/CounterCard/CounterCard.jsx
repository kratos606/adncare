import React from 'react';
import './CounterCard.css'

const CounterCard = () => {
  const data = [
    { count: 27, label: 'Skilled Therapist' },
    { count: 41, label: 'Solved Cases' },
    { count: 172, label: 'Happy Patients' },
  ];

  return (
    <div className="counter-card">
      {data.map((item, index) => (
        <div key={index} className="counter-item">
          <div className="counter-icon">&#9658;</div>
          <div className="counter-content">
            <div className="counter-number">{item.count}</div>
            <div className="counter-label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterCard;