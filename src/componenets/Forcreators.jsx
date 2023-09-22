import React from 'react';
import { Link } from 'react-router-dom';
import Girlimage from 'assets/images/girl.webp'

export default function Forcreators() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="txt_blk">
          <span className="Badges" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1200">For Creators</span>
          <h2 data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="1600">The way collaboration should be.</h2>
          <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="1s" data-aos-duration="2000">Experience stress-free collaborations with the highest organization. <Link to=""> Create an account </Link> — no hassle sign up</p>
        </div>
        <div className="list_blk">
          <ul>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1000">Spam-Free Inbox</li>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.7s" data-aos-duration="1500">Synced Calendar</li>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.9s" data-aos-duration="2000">Business Messenger</li>
            <li data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="1s" data-aos-duration="2500">Vital Statistics</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="blk_img" data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">
          <img src={Girlimage} alt="girl" />
        </div>
      </div>
    </div>
  )
}
