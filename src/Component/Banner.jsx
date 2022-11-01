import React from "react";
import { NavLink } from "react-router-dom";
function Banner() {
  return (
    <>
      <section className="banner section-bg" id="Home">
        <div className="banner__vector-icon">
          <img src="assets/images/home-01/banner-vector.png" alt="" />
        </div>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="section-heading style-two">
                  <h1 className="section-heading__title text-white">
                    Share Your Story
                  </h1>
                  <p className="section-heading__subtitle text-white">
                    We All Stranger Here To Understand Your Feelings Becouse We
                    All Gone Through It...
                  </p>
                </div>
                <div className="button-wrapper">
                  <NavLink to="/chat" className="btn--base bg-two">
                    Chat{" "}
                  </NavLink>
                  <div className="button-wrapper__arrow arrow-one">
                    <img
                      className=""
                      src="assets/images/home-01/arrow-base.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right mt-xl-0 mt-3">
                <div className="banner-right__thumb">
                  <img src="assets/images/home-01/banner-img.png" alt="" />
                  <img
                    className="banner-right__arrow"
                    src="assets/images/home-01/banner-arrow.png"
                    alt=""
                  />
                  <ul className="banner-right__images">
                    <li>
                      <img
                        src="assets/images/home-01/banner-message1.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/home-01/banner-message.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
