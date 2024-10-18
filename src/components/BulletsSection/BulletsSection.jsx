import React from 'react';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import { IoChevronForward } from '@react-icons/all-files/io5/IoChevronForward';
import './BulletsSection.css'

const bulletsData = [
  {
    number: '01',
    title: 'OSTÉOPATHIE',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Convallis, Augue Uttytu I Imperdiet.'
  },
  {
    number: '02',
    title: 'Périnéologie',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Convallis, Augue Uttytu I Imperdiet.'
  },
  {
    number: '03',
    title: 'Physiokinésithérapie',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque Convallis, Augue Uttytu I Imperdiet.'
  },
];

const BulletsSection = () => {
  return (
    <section className="bullets">
      {bulletsData.map((bullet, index) => (
        <div key={index} className="bullets__item">
          <div className="bullets__item-number">
            <span>{bullet.number}</span>
          </div>
          <h3 className="bullets__item-title">{bullet.title}</h3>
          <div className="bullets__item-arrow">
            <IoArrowForward style={{fontSize:'2rem'}} />
          </div>
          <p className="bullets__item-description">
            {bullet.description}
          </p>
          <div className="bullets__item__read-more">
            <IoChevronForward style={{fontSize:'2rem',color:'#FFA800'}} />
          </div>  
        </div>
      ))}
    </section>
  );
};

export default BulletsSection;