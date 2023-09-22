import React from 'react';
import Banner from '../componenets/Banner';
import Forcreators from '../componenets/Forcreators';
import Forbrands from 'componenets/Forbrands';
import Foragencies from 'componenets/Foragencies';
import Dashboardscreen from 'assets/images/dashboard2.webp';
import { Link } from 'react-router-dom';
import Features from 'componenets/features/Features';
import Morefeatures from 'componenets/features/Morefeatures';
import Playstore from 'assets/images/play-store.svg';
import Applestore from 'assets/images/apple-store.svg';
import Mobilescreens from 'assets/images/mobile-screens.webp'


export default function Index() {
  return (
    <>
      <div id="Hero" className="Hero_sec">
        <div className="container">
          <Banner />
        </div>
      </div>
      {/* hro section end  */}
      <div className="Sec_bg">
        <div className="forcreaters">
          <div className="container">
            <div className="sub_heading">
              <h2 data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Designed by creators, for creators.</h2>
              <p data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="2000">Take control of your brand partnerships with our creator-focused collaboration solution.</p>
            </div>
            {/* img with text section  */}
            <div className="txt_imgblk">
              <Forcreators />
            </div>
          </div>
        </div>
        {/* for creators end  */}

        <div className="forbrands">
          <div className="container">
            <div className="sub_heading">
              <h2 data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Efficient collaboration management for brands</h2>
              <p data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="2000">Elevate your brand's organization and reach with authentic creators on our streamlined platform.</p>
            </div>
            {/* img with text section  */}
            <div className="txt_imgblk re">
              <Forbrands />
            </div>
          </div>
        </div>
        {/* for Brands end  */}

        <div className="foragencies">
          <div className="container">
            <div className="sub_heading">
              <h2 data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Efficient Creator management for agencies</h2>
              <p data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="2000">Empower your team with a centralized platform for brand collaborations across multiple creators.</p>
            </div>
            {/* img with text section  */}
            <div className="txt_imgblk ">
              <Foragencies />
            </div>
          </div>
        </div>
        {/* for Agencies end  */}
      </div>
      {/* dark bg box end  */}

      <div className="simplification">
        <div className="container">
          <div className="sub_heading blk">
            <h2 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Simplification for collaboration</h2>
            <p data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="1800">The ultimate collaboration management tool for creators, brands, and agencies.</p>
            <Link to="" className="Cta" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="1s" data-aos-duration="2000">
              Try it free
              <span>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7.61377H17M17 7.61377L11 1.61377M17 7.61377L11 13.6138" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
          {/* img box */}
          <div className="txt_imgblk simp " data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1800">
            <img src={Dashboardscreen} alt="dashboard" />
          </div>

          <div className="featr_box">
            <div className="row">
              <Features />
            </div>

          </div>
        </div>
      </div>
      {/*  simplification end  */} 

      <div className="explore">
        <div className="container">
          <div className="sub_heading blk">
            <h2 data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Explore More features</h2>
            <p data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="1800">Dive deeper into all CollabCore has to offer</p>
          </div>
          <div className="featr_box b0">
            <div className="row">
              <Morefeatures />
            </div>

          </div>
        </div>
      </div>
      {/*  Explore more features end  */}

      <div className="get_start">
        <div className="container">
          <div className="Get_bg">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="sub_heading get_ttl">
                  <h2 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Get started</h2>
                  <p data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="1800">Sign up and start optimizing your collaborations today.</p>
                  <Link to="" className="Cta" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="1s" data-aos-duration="2000">
                    Try it free
                    <span>
                      <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7.61377H17M17 7.61377L11 1.61377M17 7.61377L11 13.6138" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="list_blk get_lst">
                  <ul>
                    <li data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Free 14 day trial. Cancel any time you want.</li>
                    <li data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom" data-aso-delay="0.7s" data-aos-duration="1700">Hassle-free sign up</li>
                    <li data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom" data-aso-delay="0.9s" data-aos-duration="1900">Access to all paid features during trial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Get started end  */}

      <div className="onthe_fly">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="sub_heading get_ttl">
                <h2 data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">Collaborate On The Fly</h2>
                <p data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aso-delay="0.7s" data-aos-duration="1700">Download the CollabCore app to create and manage all of your collaborations on the go.</p>
                <div className="get_app">
                  <Link to="" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.9s" data-aos-duration="1900"><img src={Playstore} alt="play store" /></Link>
                  <Link to="" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="1.1s" data-aos-duration="2100"><img src={Applestore} alt="play store" /></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mobiles" data-aos="slide-up"
                data-aos-anchor-placement="top-bottom" data-aso-delay="0.6s" data-aos-duration="2000">
                <img src={Mobilescreens} alt="Mobile devices" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Collaborate on the fly end  */}

    </>
  )
}
