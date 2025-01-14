import React from "react";
import BodyClassName from "react-body-classname";
import { Helmet } from "react-helmet";

import "./styles/page-about.scss";
import imgAbout from "images/about-image.jpg";
import HeaderPortal from "components/header-portal";

const AboutPage = () => {
  return (
    <BodyClassName className="page-about">
      <>
        <div className="layout two-parts-50-50">
          <div className="content-block">
            <HeaderPortal>
              <h1 className="visually-hidden">About CampSpots</h1>
              <Helmet>
                <title>About Camp Spots</title>
              </Helmet>
            </HeaderPortal>
            <div>
              We know you need a break. Get out of town, or stay and play.
              Taking rest and time away from the daily grind of life is
              essential for maintaining balance and positive well-being.
            </div>
            <div>
              At CampSpots, we can help connect you to your next adventure.
              Create memories you’ll remember fondly well into the future.
            </div>
            <div>
              By researching places, accommodations, and activities that match
              your lifestyle, you can have the time of your life.
            </div>
          </div>
          <img src={imgAbout} alt="person working ocean side" />
        </div>
        <div className="form-wrap">
          <div className="layout two-parts-60-40">
            <div>
              <h2>Contact</h2>
              <div className="form">
                <h3>Message</h3>
                <div className="form-field">
                  <textarea placeholder="Type your message here..."></textarea>
                </div>
                <div className="form-submit">
                  <button className="btn-send">
                    Send<span className="icon-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="content-block">
                <h4>Email</h4>
                <div className="contact">
                  <span className="icon-at">@</span>{" "}
                  <a href="#">team@campspots.com</a>
                </div>
                <h4>Address</h4>
                <div className="contact">
                  <span className="icon-house"></span> 6006 Mountain Drive
                  <br />
                  Acme, WA
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </BodyClassName>
  );
};

export default AboutPage;
