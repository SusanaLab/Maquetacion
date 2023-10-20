import * as React from 'react';
import image from './Assets/3D1.png';
import image2 from './Assets/3D2.png';
import image3 from './Assets/3D3.png';
import './services.scss';

export interface IServicesProps {
}

class Services extends React.Component {
  render() {
    return (
      <div className="services">
        <h1 className="services__title">
          <strong> Empower </strong> Your Business
        </h1>
         <h1 className="services__title">
         IT Services
        </h1>
        <section className="services__section">
          <img src={image} alt="" className="services__image" />
          <div className="services__text">
            <h2 className="services__subtitle">
              Protecting
            </h2>
            <p className="services__description">
"Our comprehensive network security solutions ensure that your critical data and digital assets are shielded from cyber threats. We employ cutting-edge technologies and advanced threat intelligence to safeguard your network infrastructure, providing you with peace of mind.
            </p></div>
        </section>
        <section className="services__section">
          <div className="services__text">
            <h2 className="services__subtitle">Cloud</h2>
            <p className="services__description">
              Embrace the power of cloud computing with our scalable services. Our team of experts will help you migrate, optimize, and manage your workloads on leading cloud platforms. Benefit from cost-efficiency, flexibility, and seamless scalability for your IT operations.
            </p></div>  <img src={image2} alt="image" className="services__image" />
        </section>
        <section className="services__section">
          <img src={image3} alt="" className="services__image" />
          <div className="services__text">
            <h2 className="services__subtitle">
              Solutions
            </h2>
            <p className="services__description">
              Our software development team specializes in creating tailored solutions that perfectly fit your business needs. From web applications to mobile apps and enterprise software, we deliver high-quality, innovative, and reliable software to drive your business forward.
              
            </p></div>
        </section>
      </div>
    );
  }
}

export default Services;
