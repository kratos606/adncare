import React from 'react';
import { IoArrowForward } from '@react-icons/all-files/io5/IoArrowForward';
import { IoChevronForward } from '@react-icons/all-files/io5/IoChevronForward';
import './BulletsSection.css'

const bulletsData = [
  {
    number: '01',
    title: 'OSTÉOPATHIE',
    description: 'Une approche douce qui rétablit l’équilibre du corps en traitant les dysfonctionnements musculo-squelettiques, viscéraux et crâniens.'
  },
  {
    number: '02',
    title: 'Périnéologie',
    description: 'Spécialité dédiée à la rééducation du périnée, essentielle pour traiter les troubles uro-gynécologiques et améliorer la qualité de vie.'
  },
  {
    number: '03',
    title: 'Kinésithérapie sportive',
    description: 'Des soins spécifiques pour prévenir et traiter les blessures liées à l’activité sportive, et optimiser la récupération des athlètes.'
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