import React from 'react'
import Teamimage from 'assets/images/team.webp'

export default function Forbrands() {
    return (
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="txt_blk">
                    <span className="Badges" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1200">For Brands</span>
                    <h2 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aso-delay="0.8s" data-aos-duration="1600">Reach the creators you want.</h2>
                    <p data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aso-delay="1s" data-aos-duration="2000">Boost click-through rates by messaging creators on a platform built for collaboration.</p>
                </div>
                <div className="list_blk">
                    <ul>
                        <li data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1000">Authentic Creator Ecosystem</li>
                        <li data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">High Response Rate</li>
                        <li data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="2000">Organized Campaigns</li>
                        <li data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="2500">Team features</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="blk_img" data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom" data-aso-delay="0.5s" data-aos-duration="1500">
                    <img src={Teamimage} alt="girl" />
                </div>
            </div>
        </div>
    )
}
