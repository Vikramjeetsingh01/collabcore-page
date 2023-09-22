import React from 'react';
import Smilinggirl from 'assets/images/girl-smiling.webp'

export default function Foragencies() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="txt_blk">
          <span className="Badges" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1200">For Agencies</span>
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="1600">A better system for creator management.</h2>
          <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="1s" data-aos-duration="2000">Maximize your agency's productivity by simplifying creator management and brand deal coordination, all in one user-friendly platform.</p>
        </div>
        <div className="list_blk">
          <ul>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1000">Multiple Creator Management</li>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Team Features</li>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="2000">Synced Calendar</li>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="2500">Business Messenger</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="blk_img" data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">
          <img src={Smilinggirl} alt="girl" />
        </div>
      </div>
    </div>
  )
}
