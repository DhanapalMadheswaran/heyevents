import React, { useState, useEffect } from "react";
import Header from "../includes/header";
import axios from "axios";

function Checkout(props) {
  const [formData, setFormData] = useState({});
  const [imgData, setimgData] = useState({});
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  let event_date = localStorage.getItem("event_date");

  useEffect(() => {
    async function fetchMyAPI() {
      await axios
        .get(
          `http://localhost:5000/api/vendor/getDetailsById/${cartData[0].categoryID}`
        )
        .then((response) => {
          setFormData(response.data[0]);
          setimgData(response.data[0].image[0]);
        });
    }
    fetchMyAPI();
  }, []);
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-8 col-lg-8 col-sm-8">
          <div className="panel panel-default checkout-step-one">
            <div id="submit-one" className="tabcontent">
              <div className="panel-heading">
                <h5 className="checkout-title">
                  <a
                    data-toggle="collapse"
                    className="collapsed"
                    data-parent="#accordion"
                    href="#collapseTwo"
                  >
                    <span>Order Review</span>
                  </a>
                </h5>
              </div>

              <div id="collapseTwo" className="panel-collapse ">
                <h4 className="mb-3">
                  {" "}
                  {formData.name}
                  <br />
                  Race Course
                </h4>
                <div className="check-panel">
                  <div className="row">
                    <div className="col-6 hall-detail">
                      <p>
                        <img
                          src="./frontend/assets/images/icons/scale-icon.svg"
                          alt="scale"
                        />
                        <span>
                          <b>Seating Style</b>
                          <br />
                          {cartData[0].seating} Formation
                        </span>
                        <span>
                          <b>Session</b>
                          <br />
                          {cartData[0].session}
                        </span>
                        <span>
                          <b>Date</b>
                          <br />
                          {event_date}
                        </span>
                      </p>
                      <p>
                        <img
                          src="./frontend/assets/images/icons/scale-icon.svg"
                          alt="scale"
                        />
                        <span>
                          <b>Dimensions</b>
                          <br />
                          {formData.dimension}. Area: {formData.area}.
                          <br />
                          Height: {formData.height} | Guest entry point:
                          {formData.guest_entry_point}
                        </span>
                      </p>
                      <p>
                        <img
                          src="./frontend/assets/images/icons/like-icon.svg"
                          alt="like"
                        />
                        <span>
                          <b>Complimentry</b>
                          <br />
                          Suite Room Accomodation x2, Welcome Drink
                        </span>
                      </p>
                    </div>

                    <div classs="col-1">
                      <img
                        className="divide-line2"
                        src="./frontend/assets/images/icons/divider-line.svg"
                        alt="divide-line"
                      />
                    </div>

                    <div className="col-5 price-detail">
                      <p>
                        <span>
                          <b>Refund</b>
                          <img
                            src="./frontend/assets/images/icons/info-icon.svg"
                            alt="info"
                          />
                          <br />
                          <a>
                            <img
                              src="./frontend/assets/images/icons/info-icon.svg"
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
                              src="./frontend/assets/images/icons/info-icon.svg"
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
                            src="./frontend/assets/images/icons/info-icon.svg"
                            alt="info"
                          />
                          <br />
                          <h5>
                            <i className="fas fa-rupee-sign"></i>
                            <br />
                            <br />
                            {formData.price}
                            <sup>Incl of GST</sup>
                          </h5>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="checkout-btn">
                  <button className="btn btn-checkout" type="submit">
                    Place a Order
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="checkout-sidebar">
            <div className="sidebar-title">
              <h4>
                <b>Price Summary</b>
              </h4>
            </div>
            <br />
            <br />
            <div className="venue-amt">
              <div className="row">
                <div className="col-8">
                  <a>{formData.name}</a>
                </div>

                <div className="col-4">
                  <a>Rs.{formData.price}</a>
                </div>
              </div>
            </div>

            <hr className="hrCol" />

            <div className="row">
              <div className="col-sm-8 col-xs-8">
                <h5>Total Value</h5>
                <h5>Amount Payable</h5>
              </div>
              <div className="col-sm-4 col-xs-4">
                <h5 className="amount">
                  <i className="fas fa-rupee-sign"></i>
                  <span>Rs.{formData.price}</span>
                </h5>
                <h5 className="amount">
                  <i className="fas fa-rupee-sign"></i>
                  <span>Rs.{formData.price}</span>
                </h5>
              </div>
            </div>

            <div className="payment-btn">
              <button
                className="btn btn-heyEvents"
                id="apply_coupon"
                type="button"
              >
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
