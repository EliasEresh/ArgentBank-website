import React from 'react';

const featuresData = [
    {
        "id": 1,
        "img": "./img/icon-chat.png",
        "alt": "Chat Icon",
        "title": "You are our #1 priority",
        "text": " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      },
      {
        "id": 2,
        "img": "./img/icon-money.png",
        "alt": "Money Icon",
        "title": "More savings means higher rates",
        "text": "The more you save with us, the higher your interest rate will be!"
      },
      {
        "id": 3,
        "img": "./img/icon-security.png",
        "alt": "Security Icon",
        "title": "Security you can trust",
        "text": "We use top of the line encryption to make sure your data and money is always safe."
      }
    ];

    function Features() {
      return (
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featuresData.map((item) => (
            <FeatureItem
              key={item.id}
              icon={item.img}
              title={item.title}
              content={item.text}
            />
          ))}
        </section>
      );
    }
    
    function FeatureItem({ icon, title, content }) {
      return (
        <div className="feature-item">
          <img className="feature-icon" src={icon} alt="features-icons" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{content}</p>
        </div>
      );
    }
    
    export default Features;