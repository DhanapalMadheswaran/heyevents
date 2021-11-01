import React, { useState, useEffect } from "react";
import axios from "axios";

import "../venuSelection/venue-selection.css";

function CartData(props) {
  const [formData, setFormData] = useState({});
  const [imgData, setimgData] = useState({});
  const cartData = JSON.parse(localStorage.getItem("cartData"));

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
  console.log(formData);
  return (
    <div>
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="eve-icon">
            <p>
              <img
                src="./frontend/assets/images/icons/event-space-icon.svg"
                alt="event"
              />
              <span>Event Space</span>
            </p>
          </div>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8">
          <div class="add-ven">
            <p>
              Vendors <b>Added</b> Sucessfully
              <br />
              For Tuesday 25<sup>th</sup> March | 12.30 am
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="detail-box-top-flag5">
            <img
              src="./frontend/assets/images/icons/top-flag-icon.svg"
              alt="flag"
            />
            <span>
              10%
              <br />
              Off
            </span>
          </div>
          <div className="detail-box-left-flag4">
            <img
              src="./frontend/assets/images/icons/left-flag-icon.svg"
              alt="flag"
            />
            <span>
              Complimentary
              <br />
              Accomodation
            </span>
          </div>
          <div className="detail-box-round-flag5">
            <img
              src="./frontend/assets/images/icons/round-ribbon-icon.svg"
              alt="ribbon"
            />
            <span>
              <img
                src="./frontend/assets/images/icons/thumb-icon.svg"
                alt="thumb"
              />
              Popular
            </span>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="box1">
              <div className="slide-img">
                <img alt="" src={imgData?.url} className="venu-img" />
              </div>

              <div className="detail-box">
                <div className="type">
                  Rendevous - Vivanta
                  <h5>
                    <b>Race Course</b>
                  </h5>
                  <img src="./frontend/assets/images/divide-line.svg" alt="" />
                  <h3>
                    <b>@1,900</b>
                  </h3>
                </div>
                <a href="#!" className="price">
                  <h3>$45</h3>
                </a>
              </div>

              <div className="detail-box">
                <div className="type">
                  Rendevous - Vivanta
                  <br />
                  <img src="./frontend/assets/images/divide-line.svg" alt="" />
                  <h3>
                    <b>@1,900</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="detail-part">
            <div className="row">
              <div className="col-6 hall-detail">
                <p>
                  <img
                    src="./frontend/assets/images/icons/scale-icon.svg"
                    alt="scale"
                  />
                  <span>
                    <b>Seating Style:{cartData[0].seating}</b>
                  </span>{" "}
                  <span>
                    <b>Session:{cartData[0].session}</b>
                  </span>
                  <a className="hall-rate" href="#!">
                    Rating
                    <a className="detail-box-review-flag5" href="#!">
                      <img
                        src="./frontend/assets/images/icons/review-bg-icon.svg"
                        alt="review-icon"
                      />
                      <span>
                        <img
                          src="./frontend/assets/images/icons/star-fill-white.svg"
                          alt="star-icon"
                        />
                        3.6
                      </span>
                    </a>
                  </a>
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
                <p>
                  <img
                    src="./frontend/assets/images/icons/like-icon.svg"
                    alt="like"
                  />
                  <span>
                    <b>Food Preference</b>
                    <br />
                    <a className="food-box" href="#!">
                      {" "}
                      <img
                        src="./frontend/assets/images/veg-icon.png"
                        alt="veg"
                      />
                      <span>
                        Standard
                        <br />
                        Breakfast
                      </span>{" "}
                    </a>
                    <a className="food-box" href="#!">
                      {" "}
                      <img
                        src="./frontend/assets/images/non-veg.png"
                        alt="non-veg"
                      />
                      <span>
                        Platium
                        <br />
                        Lunch
                      </span>{" "}
                    </a>
                    <img
                      className="divide-line1"
                      src="./frontend/assets/images/icons/divider-line.svg"
                      alt="divide-line"
                    />
                    <button type="button" className="btn btn-view">
                      View Menu
                    </button>
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
                    <a href="#!">
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
                    <a href="#!">
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
                    <br /> <br />
                    <br />
                    <h4>
                      <i className="fas fa-rupee-sign"></i>1,25,500/-
                      <sup>Incl of GST</sup>
                    </h4>
                  </span>
                </p>
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn btn-view">
                      View Menu
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-view">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="eve-icon">
            <p>
              <img
                src="./frontend/assets/images/icons/catering-icon.svg"
                alt="catering"
              />
              <span>Catering</span>
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <div class="box1">
            <div class="slide-img">
              <img
                src="./frontend/assets/images/catering/1.jpg"
                alt="catering"
              />
            </div>
            <div class="detail-box">
              <div class="type5">
                Anandha Bhavan
                <br />
                <b>Gandhipuram</b>
              </div>
            </div>
            <div class="detail-box-border"></div>
          </div>
        </div>

        <div class="col-sm-8 col-md-8 col-lg-8">
          <div class="detail-part">
            <div class="row">
              <div class="col-6 hall-detail">
                <p>
                  <a class="hall-rate">
                    Rating
                    <a class="detail-box-review-flag5">
                      <img
                        src="./frontend/assets/images/icons/review-bg-icon.svg"
                        alt="review-icon"
                      />
                      <span>
                        <img
                          src="./frontend/assets/images/icons/star-fill-white.svg"
                          alt="star-icon"
                        />
                        4.6
                      </span>
                    </a>
                  </a>
                </p>

                <p class="prefer-type">
                  <span>
                    <b>Food Preference</b>
                    <br />
                    <a class="food-box">
                      {" "}
                      <img
                        src="./frontend/assets/images/veg-icon.png"
                        alt="veg"
                      />
                      <span>
                        Standard
                        <br />
                        Breakfast
                      </span>{" "}
                    </a>
                    <img
                      class="divide-line1"
                      src="./frontend/assets/images/icons/divider-line.svg"
                      alt="divide-line"
                    />
                    <a class="food-type">
                      South Indian
                      <br />
                      <button type="button" class="btn btn-view">
                        View Menu
                      </button>
                    </a>
                  </span>
                </p>
                <p class="prefer-type">
                  <span>
                    <a class="food-box">
                      {" "}
                      <img
                        src="./frontend/assets/images/non-veg.png"
                        alt="veg"
                      />
                      <span>
                        Platinum
                        <br />
                        Lunch
                      </span>{" "}
                    </a>
                    <img
                      class="divide-line1"
                      src="./frontend/assets/images/icons/divider-line.svg"
                      alt="divide-line"
                    />
                    <a class="food-type">
                      South Indian
                      <br />
                      <button type="button" class="btn btn-view">
                        View Menu
                      </button>
                    </a>
                  </span>
                </p>
                <p class="prefer-type">
                  <span>
                    <a class="food-box">
                      {" "}
                      <img
                        src="./frontend/assets/images/veg-icon.png"
                        alt="veg"
                      />
                      <span>
                        Chat
                        <br />
                        Counter
                      </span>{" "}
                    </a>
                    <img
                      class="divide-line1"
                      src="./frontend/assets/images/icons/divider-line.svg"
                      alt="divide-line"
                    />
                    <a class="food-type">
                      North Indian
                      <br />
                      <button type="button" class="btn btn-view">
                        View Menu
                      </button>
                    </a>
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
                    Special Dessert, Welcome Drink
                  </span>
                </p>
              </div>

              <div classs="col-1">
                <img
                  class="divide-line2"
                  src="./frontend/assets/images/icons/divider-line.svg"
                  alt="divide-line"
                />
              </div>

              <div class="col-5 price-detail">
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
                      50%
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
                      20.03.2022
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
                    <br />
                    <br />
                    <h4>
                      <i class="fas fa-rupee-sign"></i>75,500/-
                      <sup>Incl of GST</sup>
                    </h4>
                  </span>
                </p>
                <div class="row">
                  <div class="col-6">
                    <button type="button" class="btn btn-block btn-outline-fee">
                      View More
                    </button>
                  </div>
                  <div class="col-6">
                    <button type="button" class="btn btn-block btn-outline-fee">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row proceed-btn">
        <div class="">
          <button type="button" class="btn btn-block btn-billing">
            Proceed To Billing
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartData;
