import * as React from 'react';
import './companies.scss';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import logo1 from './logo1.jpg';
import logo2 from './logo2.jpg';
import logo3 from './logo3.jpeg';
import { Component, useState } from 'react';

export interface ICompaniesProps {
}


class Companies extends React.Component {
  render() {
    return (
<div>
  <div className="companies-container">
    <div className='comp-title'>
      <h1 className="companies-container__title">Welcome to </h1>
      <h1 className="companies-container__title"> <strong>Company</strong></h1>
    </div>
    <section className="user-cloud">
      <div className="brands-container">
        <div className="brands-carousel">

          <picture className="companies-container__section"><source /><div className="companies-container__content">
            <h2 className="companies-container__subtitle">Technology Solutions</h2>
            <p className="companies-container__description">At Company, we provide cutting-edge technology solutions that are designed to meet the unique needs of our clients. Our goal is to empower businesses with innovative tools and strategies.</p>
          </div>
            <div className="companies-container__images">
              <img src={logo2} alt="" className="companies-container__image1" />
              <img src={image1} alt="" className="companies-container__image" />
            </div>
          </picture>

          <picture className="companies-container__section"><source /><div className="companies-container__content">
            <h2 className="companies-container__subtitle">Innovative Research</h2>
            <p className="companies-container__description">We are dedicated to conducting innovative research in various fields, from AI to cybersecurity. Our team of experts works relentlessly to push the boundaries of technology.</p>
          </div>
            <div className="companies-container__images">
              <img src={logo2} alt="" className="companies-container__image1" />
              <img src={image2} alt="" className="companies-container__image" />
            </div>
          </picture>

          <picture className="companies-container__section"><source /><div className="companies-container__content">
            <h2 className="companies-container__subtitle">Customer-Centric Approach</h2>
            <p className="companies-container__description">At Company, we prioritize our customers. Our solutions are tailored to enhance user experiences and improve customer satisfaction.</p>
          </div>
            <div className="companies-container__images">
              <img src={logo2} alt="" className="companies-container__image1" />
              <img src={image3} alt="" className="companies-container__image" />
            </div>
          </picture>

          <picture className="companies-container__section"><source /><div className="companies-container__content">
            <h2 className="companies-container__subtitle">Innovation in Design</h2>
            <p className="companies-container__description">Our design team focuses on creating user-friendly interfaces and visually appealing products. We believe that great design is a key aspect of technology.</p>
          </div>
            <div className="companies-container__images">
              <img src={logo1} alt="" className="companies-container__image1" />
              <img src={image2} alt="" className="companies-container__image" />
            </div>
          </picture>
        </div>
      </div>
    </section>
  </div>
</div>

    );
  }
}
export default Companies


/* class Companies extends React.Component {
  render() {
    return (
      <div className="companies-container">
        <h1 className="companies-container__title">Phasellus </h1>
                <h1 className="companies-container__title"> <strong>elementum</strong></h1>

        <section className="companies-container__section">
          <div className="companies-container__content">
            <h2 className="companies-container__subtitle">Lorem ipsum</h2>
            <p className="companies-container__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla id ipsum.</p>
          </div>
          <div className="companies-container__images"> 
           <img src={logo1} alt="" className="companies-container__image1" />
            <img src={image2} alt="" className="companies-container__image" />
          
          </div>
        </section>

        <section className="companies-container__section">
          <div className="companies-container__content">
            <h2 className="companies-container__subtitle">Consectetur adipiscing</h2>
            <p className="companies-container__description">Maecenas ac neque non augue vehicula vulputate. Sed ut hendrerit libero.</p>
          </div>
          <div className="companies-container__images"> 
           <img src={logo2} alt="" className="companies-container__image1" />
            <img src={image2} alt="" className="companies-container__image" />
          
          </div>
        </section>
        <section className="companies-container__section">
          <div className="companies-container__content">
            <h2 className="companies-container__subtitle">Vestibulum varius</h2>
            <p className="companies-container__description">Nullam aliquet arcu non libero tristique, vel condimentum odio cursus.</p>
          </div>
          <div className="companies-container__images">
             <img src={logo3} alt="" className="companies-container__image1" />
            <img src={image2} alt="" className="companies-container__image" />
           
          </div>
        </section>
      </div>
    );
  }
}

export default Companies;  */