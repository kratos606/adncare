import React from 'react'

const Features = () => {
    const features = [
      { id: '01', title: '100% Satisfaction', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'orange' },
      { id: '02', title: 'Expert Team', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'blue' },
      { id: '03', title: 'Modern Technology', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'orange' },
      { id: '04', title: 'Flexible Pricing', text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Pellentesque Convallis.', color: 'blue' },
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