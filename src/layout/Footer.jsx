import React from 'react';
import Ftrlogo from 'assets/images/site-logo.svg';
import { Link } from 'react-router-dom';
import Form from 'componenets/form/Form';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="ftr_left">
              <img src={Ftrlogo} alt="collabcore"  className="ftr_logo" />
              <p>Your path to effective collaboration management starts here.</p>
              <div className="ftr_nav">
                <ul>
                  <li><Link to="">Home</Link></li>
                  <li><Link to="">Pricing</Link></li>
                  <li><Link to="">Contact</Link></li>
                  <li><Link to="">Careers</Link></li>
                  <li><Link to="">Support</Link></li>
                  <li><Link to="">Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="ftr_form">
            <h5>Keep up with us</h5>
            <Form/>
          </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2023 CollabCore Inc. - All rights reserved</p>
          <div className="privacy_lnk">
            <Link to=""> Terms & Conditions</Link>
            <Link to=""> Cookies</Link>
            <Link to="">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
