import React from "react";

function Checkout(props) {
  return (
    <div>
      <div class="row">
        <div class="col-md-8 col-lg-8 col-sm-8">
          <div class="panel panel-default checkout-step-one">
            <div class="panel-heading">
              <h5 class="checkout-title">
                <a
                  data-toggle="collapse"
                  class="collapsed"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  <span>1</span>Checkout Info
                </a>
              </h5>
            </div>
          </div>

          <div class="panel panel-default checkout-step-one">
            <div id="submit-one" class="tabcontent">
              <div class="panel-heading">
                <h5 class="checkout-title">
                  <a
                    data-toggle="collapse"
                    class="collapsed"
                    data-parent="#accordion"
                    href="#collapseTwo"
                  >
                    <span>2</span> Order Review
                  </a>
                </h5>
              </div>

              <div
                id="collapseTwo"
                class="panel-collapse collapse panel-closed"
              >
                <h4 class="mb-3">
                  {" "}
                  Rendevous - Vivanta
                  <br />
                  Race Course
                </h4>
                <div class="check-panel">
                  <div class="row">
                    <div class="col-6 hall-detail">
                      <p>
                        <img
                          src="assets/images/icons/scale-icon.svg"
                          alt="scale"
                        />
                        <span>
                          <b>Seating Style</b>
                          <br />
                          Cluster Formation
                        </span>
                        <a class="hall-rate">
                          Rating
                          <a class="detail-box-review-flag5">
                            <img
                              src="assets/images/icons/review-bg-icon.svg"
                              alt="review-icon"
                            />
                            <span>
                              <img
                                src="assets/images/icons/star-fill-white.svg"
                                alt="star-icon"
                              />
                              3.6
                            </span>
                          </a>
                        </a>
                      </p>
                      <p>
                        <img
                          src="assets/images/icons/scale-icon.svg"
                          alt="scale"
                        />
                        <span>
                          <b>Dimensions</b>
                          <br />
                          27 m.x 16 m. Area: 439 sq. m.
                          <br />
                          Height: 4m | Guest entry point: 2
                        </span>
                      </p>
                      <p>
                        <img
                          src="assets/images/icons/like-icon.svg"
                          alt="like"
                        />
                        <span>
                          <b>Complimentry</b>
                          <br />
                          Suite Room Accomodation x2, Welcome Drink
                        </span>
                      </p>
                      <p>
                        <img
                          src="assets/images/icons/like-icon.svg"
                          alt="like"
                        />
                        <span>
                          <b>Food Preference</b>
                          <br />
                          <a class="food-box">
                            {" "}
                            <img src="assets/images/veg-icon.png" alt="veg" />
                            <span>
                              Standard
                              <br />
                              Breakfast
                            </span>{" "}
                          </a>
                          <a class="food-box">
                            {" "}
                            <img
                              src="assets/images/non-veg.png"
                              alt="non-veg"
                            />
                            <span>
                              Platium
                              <br />
                              Lunch
                            </span>{" "}
                          </a>
                          <img
                            class="divide-line1"
                            src="assets/images/icons/divider-line.svg"
                            alt="divide-line"
                          />
                          <button type="button" class="btn btn-view">
                            View Menu
                          </button>
                        </span>
                      </p>
                    </div>

                    <div classs="col-1">
                      <img
                        class="divide-line2"
                        src="assets/images/icons/divider-line.svg"
                        alt="divide-line"
                      />
                    </div>

                    <div class="col-5 price-detail">
                      <p>
                        <span>
                          <b>Refund</b>
                          <img
                            src="assets/images/icons/info-icon.svg"
                            alt="info"
                          />
                          <br />
                          <a>
                            <img
                              src="assets/images/icons/info-icon.svg"
                              alt="info"
                            />
                            Not Available
                          </a>
                        </span>
                      </p>
                      <p>
                        <span>
                          <b>Last Collection Date</b>
                          <br />
                          <a>
                            <img
                              src="assets/images/icons/info-icon.svg"
                              alt="info"
                            />
                            01.03.2022
                          </a>
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span>
                          <b>Advance Fee</b>
                          <img
                            src="assets/images/icons/info-icon.svg"
                            alt="info"
                          />
                          <br />
                          <h5>
                            <i class="fas fa-rupee-sign"></i>1,25,500/-
                            <sup>Incl of GST</sup>
                          </h5>
                        </span>
                      </p>
                      <div class="row">
                        <div class="col-6">
                          <button
                            type="button"
                            class="btn btn-block btn-outline-fee"
                          >
                            View More
                          </button>
                        </div>
                        <div class="col-6">
                          <button
                            type="button"
                            class="btn btn-block btn-outline-fee"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="checkout-btn">
                  <button class="btn btn-checkout" type="submit">
                    Place a Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="checkout-sidebar">
            <div class="sidebar-title">
              <h4>
                <b>Price Summary</b>
              </h4>
            </div>
            <div class="venue-amt">
              <div class="row">
                <div class="col-8">
                  <a>Venue</a>
                </div>
                <div class="col-4">
                  <a>1,25,500</a>
                </div>
              </div>
            </div>

            <hr class="hrCol" />

            <div class="row">
              <div class="col-sm-8 col-xs-8">
                <h5>Total Value</h5>
                <h5>Amount Payable</h5>
              </div>
              <div class="col-sm-4 col-xs-4">
                <h5 class="amount">
                  <i class="fas fa-rupee-sign"></i>
                  <span>xxx</span>
                </h5>
                <h5 class="amount">
                  <i class="fas fa-rupee-sign"></i>
                  <span>xxx</span>
                </h5>
              </div>
            </div>

            <div class="payment-btn">
              <button class="btn btn-heyEvents" id="apply_coupon" type="button">
                Make a Payment
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
