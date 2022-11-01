import React from "react";

function Price() {
  return (
    <>
      <section className="pricing pt-120 pb-60">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="pricing-wrapper">
                <div className="pricing-item">
                  <div className="pricing-item__content">
                    <h1 className="pricing-item__price">2$/10min</h1>
                    <h3 className="pricing-item__name">Calling Plan</h3>
                    <ul className="pricing-item__list">
                      <li>Live Voice Call </li>
                      <li>Responce Time 10 min</li>
                    </ul>
                  </div>
                  <div className="pricing-item__details">
                    <a href="#" className="pricing-item__details-btn">
                      View Details
                    </a>
                    <a href="#" className="pricing-item__details-icon">
                      <span className="icon-plus"></span>
                    </a>
                  </div>
                </div>
                <div className="pricing-item">
                  <div className="pricing-item__content">
                    <h1 className="pricing-item__price">Free</h1>
                    <h3 className="pricing-item__name">Chat Plan</h3>
                    <ul className="pricing-item__list">
                      <li>Live chat</li>
                      <li>Responce Time 10 min</li>
                    </ul>
                  </div>
                  <div className="pricing-item__details">
                    <a href="#" className="pricing-item__details-btn">
                      View Details
                    </a>
                    <a href="#" className="pricing-item__details-icon">
                      <span className="icon-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5" id="AboutService">
              <div className="pricing-right">
                <div className="section-heading style-two">
                  <h2 className="section-heading__title">
                    <br />
                    No Hidden Charges!Choose Your Plan.
                  </h2>
                </div>
                <div className="pricing-right__buttons">
                  <div className="pricing-right__arrow">
                    <img src="assets/images/home-01/pricing-arrow.png" alt="" />
                  </div>
                  <ul className="pricing-right__btn-group d-flex flex-wrap">
                    <li>
                      <a href="pricing.html" className="buttons btn--base">
                        Hourly
                      </a>
                    </li>
                    <li>
                      <a href="pricing.html" className="buttons btn--two">
                        Monthly
                      </a>
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

export default Price;
