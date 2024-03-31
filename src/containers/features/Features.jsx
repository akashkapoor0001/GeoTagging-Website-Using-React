import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Real-Time Alerts',
    text: 'Instantly notifies users and authorities upon detecting weapons in camera feeds, enabling swift response to potential threats.',
  },
  {
    title: 'Multiple Weapon Types',
    text: 'Recognizes various types of weapons, including firearms, knives, and blunt objects, providing comprehensive threat detection capabilities.',
  },
  {
    title: 'Accuracy & Reliability',
    text: 'Utilizes advanced algorithms and validation mechanisms to minimize false positives, ensuring reliable detection performance in diverse scenarios.',
  },
  {
    title: 'Integration Capabilities',
    text: 'Seamlessly integrates with existing security systems or emergency response protocols, facilitating coordinated action and enhancing overall incident management.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Real time Weapon Detection within camera feeds, enhancing community safety through proactive threat prevention.</h1>
      <p>Scroll to Know More.</p>
    </div>

    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
