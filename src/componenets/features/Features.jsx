import React from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <>
        <div className="col-md-4 fe_col">
        <div className="feat_card" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.6s" data-aos-duration="2000">
            <div className="fea_txt">
            <h4>Spam-Free Business Messenger</h4>
            <p>Our messenger ensures that only genuinely interested brands can communicate with you, leading to more fruitful collaborations.</p>
            </div>
            <Link to="">View details 
                <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.11109 1.16663L14.6666 6.99996M14.6666 6.99996L9.11109 12.8333M14.6666 6.99996L1.33331 6.99996" stroke="#1751D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
             </Link>
        </div>
    </div>
    <div className="col-md-4 fe_col">
        <div className="feat_card" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.6s" data-aos-duration="2000">
        <div className="fea_txt">
            <h4>Synced Calendar</h4>
            <p>Streamline brand-creator collaborations with our synced calendar and never miss a project deadline.</p>
            </div>
            <Link to="">View details 
                <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.11109 1.16663L14.6666 6.99996M14.6666 6.99996L9.11109 12.8333M14.6666 6.99996L1.33331 6.99996" stroke="#1751D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
             </Link>
        </div>
    </div>
    <div className="col-md-4 fe_col">
        <div className="feat_card" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.6s" data-aos-duration="2000">
        <div className="fea_txt">
            <h4>Comments Manager</h4>
            <p>View, reply, and delete social comments directly in the creator dashboard.</p>
            </div>
            <Link to="">View details 
                <span><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.11109 1.16663L14.6666 6.99996M14.6666 6.99996L9.11109 12.8333M14.6666 6.99996L1.33331 6.99996" stroke="#1751D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
             </Link>
        </div>
    </div>

    </>
    
  )
}
