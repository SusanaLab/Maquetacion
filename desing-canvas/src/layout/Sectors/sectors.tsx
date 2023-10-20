import * as React from 'react';
import './sectors.scss';

export interface ISectorsProps {
}

class Sector extends React.Component {
  render() {
    return (     
        <div className='sector-container'>
          <h1 className="sector__title">Technology <strong> Innovation Hub </strong> </h1>
      <div className="sector">

        <section className="sector__item">
          <h3 className="sector__subtitle">1</h3>
          <h2 className="sector__name">Cyber Security</h2>
          <p className="sector__description">
            Cyber security is a critical sector in the IT industry. Protecting sensitive data, networks, and systems from cyber threats and attacks is essential for any organization. Our company offers cutting-edge solutions to safeguard your digital assets and ensure data integrity.
          </p>
        </section>
        <section className="sector__item">
          <h3 className="sector__subtitle">2</h3>
          <h2 className="sector__name">Cloud Services</h2>
          <p className="sector__description">
            Cloud services are revolutionizing the way businesses operate. Our IT solutions provide scalable and efficient cloud services, enabling you to manage and optimize your workloads on leading cloud platforms. Embrace the benefits of cost-efficiency and flexibility with our cloud services.
          </p>
        </section>
        <section className="sector__item">
          <h3 className="sector__subtitle">3</h3>
          <h2 className="sector__name">Software Development</h2>
          <p className="sector__description">
            Software development is the heart of technological innovation. Our dedicated team specializes in crafting tailored software solutions to meet your unique business needs. From web applications to mobile apps and enterprise software, we deliver high-quality, innovative, and reliable software to drive your business forward.
          </p>
        </section>
      </div>
      </div> 
    );
  }
}

export default Sector;

