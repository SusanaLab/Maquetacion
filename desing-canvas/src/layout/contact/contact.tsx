import React, { useState } from 'react';
import './contact.scss'; // Asegúrate de tener un archivo Question.scss con las clases correspondientes
import facebook from '../contact/fac.png';
import instagram from '../contact/ins.png';
import linkdin from '../contact/lin.png';
import twitter from '../contact/Twi.png';
import logo from '../home/logo.png';

interface ContactProps {

}

const Contact: React.FC<ContactProps> = () => {


    return (
        <div className="contact">
            <div className="contact__social">
                <img src={logo} alt="" className="contact__logo" />

                <div className="social">
                    <img src={facebook} alt="" className="social__icon" />
                    <img src={instagram} alt="" className="social__icon" />
                    <img src={linkdin} alt="" className="social__icon" />
                    <img src={twitter} alt="" className="social__icon" />
                </div>
            </div>
            <div className='contactInfo'>
            <div className="contact__links">
                <a href="#" className="contact__link">  Home</a>
                <a href="#" className="contact__link">About</a>
                <a href="#" className="contact__link">Services</a>
                <a href="#" className="contact__link">Blog</a>
                <a href="#" className="contact__link">Contact</a>
            </div>
            <div className="contact__form">
                <label htmlFor="contact__input">Newsletter</label>
                <input type="text" id="contact__input" placeholder="Email address" />
                <button className="contact__button">Subscribe</button>
            </div>
            <div className="contact__legal">
                <h5>Privacy Policy: For information about our privacy policy, click here.</h5>
                <h5>Copyright ©company [Year] . All rights reserved.</h5>
            </div>
            </div>
        </div>


    );
};

export default Contact;
