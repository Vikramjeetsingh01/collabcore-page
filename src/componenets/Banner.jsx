import React from 'react';
import Heroimg from '../assets/images/dashboard.webp';
import Form from './form/Form';

export default function Banner() {
  return (
    <div className="row align-items-center">
        <div className="col-md-6">
            <div className="main_txtblk" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                <h1>Organize your  brand collaborations</h1>
                <p>Take back your inbox – Receive only relevant brand messages. Ditch the spam and get down to business.</p>
            </div>
            <div className="email_us" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                  <Form />
            </div>
        </div>
        <div className="col-md-6">
            <div className="Hero_img" data-aos="fade-left"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1600">
                <img src={Heroimg} alt="desktop banner" />
            </div>
        </div>
    </div>
  ) 
}
