import React from 'react'

const Features = () => {
    const features = [
      { id: '01', title: 'Expertise professionnelle', text: 'Nos praticiens sont hautement qualifiés et formés aux dernières techniques', color: 'orange' },
      { id: '02', title: 'Approche personnalisée', text: 'Nous croyons que chaque patient est unique. Nos traitements sont donc adaptés à vos besoins spécifiques', color: 'blue' },
      { id: '03', title: 'Technologie de pointe', text: 'Nous utilisons des équipements modernes et innovants pour optimiser votre rééducation', color: 'orange' },
      { id: '04', title: 'Suivi et accompagnement', text: 'Nous vous accompagnons tout au long de votre parcours de soins', color: 'blue' },
    ];
  
    return (
      <div className="features-container">
        {features.map((feature) => (
          <div className="feature" key={feature.id}>
            <div className={`circle ${feature.color}`}>
              <span>{feature.id}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    );
};

export default Features