/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Gallery from "./gallery";
import Modal from "./Modal";
import SelectionModal from "./selectionModal";
import LoginModal from "./loginModal";
function ContentArea(props) {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [session, setSession] = useState({
    session: "Select Session",
  });
  const [model, setModel] = useState(false);
  const [type, setType] = useState("session");

  useEffect(() => {
    setFormData(props.data);
  }, [props.data]);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSession({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setSession({ session: e.value });
    modalClose();
  };
  const modalOpen = (modeltype) => {
    if (modeltype === "login") {
      const userData = localStorage.getItem("profile");

      if (!userData) {
        setModel(true);
        setType(modeltype);
      }
      //user already Logged in
      else {
        const lastItem = window.location.pathname.split("-").pop();
        //add vendor data to user cart
        try {
          localStorage.setItem(
            "cartData",
            JSON.stringify({ vendorID: lastItem, session: session })
          );

          history.push("/cart-details");
        } catch (err) {
          console.error(err);
        }
      }
    } else {
      setModel(true);
      setType(modeltype);
    }
  };

  const modalClose = () => {
    setModel(false);
  };

  const loginSubmit = async (e) => {
    let data = {
      email: e.email,
      password: e.password,
    };
    try {
      const loginResponse = await axios.post(
        "http://localhost:5000/api/user/user-login",
        data
      );
      let status = loginResponse.data.success;
      if (status) {
        try {
          localStorage.setItem(
            "profile",
            JSON.stringify(loginResponse.data.user)
          );
        } catch (err) {
          console.error(err);
        }
        const lastItem = window.location.pathname.split("-").pop();
        //add vendor data to user cart
        try {
          localStorage.setItem(
            "cartData",
            JSON.stringify({ vendorID: lastItem, session: session })
          );
          history.push("/cart-details");
        } catch (err) {
          console.error(err);
        }
        modalClose();
      } else {
        alert(loginResponse.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
          <div>
            <Gallery images={formData.image} />
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
          <div className="row">
            <div className="col-12 bk-area1">
              <div id="bk-area11">
                <div>
                  <img
                    src="./frontend/assets/images/icons/sample-food-icon.svg"
                    alt="..."
                  />
                </div>
                <span>ORDER</span>
                <br />
                Sample Food
              </div>
            </div>
            <div className="col-12 bk-area2">
              <div className="cnt-area1">
                <b>4.5</b>
                <img
                  src="./frontend/assets/images/icons/star-fill.svg"
                  alt="..."
                />
                <img
                  src="./frontend/assets/images/icons/star-fill.svg"
                  alt="..."
                />
                <img
                  src="./frontend/assets/images/icons/star-fill.svg"
                  alt="..."
                />
                <img
                  src="./frontend/assets/images/icons/star-fill.svg"
                  alt="..."
                />
                <img
                  src="./frontend/assets/images/icons/star-half.svg"
                  alt="..."
                />
                <hr className="hrCol" />
                <div className="cnt-area-fnt">* Select your Preference</div>

                <div className="flex-container2">
                  <div>
                    <button
                      className="btn btn-heyEvents"
                      onClick={(e) => modalOpen("session")}
                    >
                      {session.session}
                    </button>
                    <img
                      className="algn-rght"
                      src="./frontend/assets/images/next-32.png"
                      alt="..."
                    />
                  </div>
                  <div>
                    <button
                      onClick={(e) => modalOpen("food")}
                      className="btn btn-heyEvents"
                    >
                      Food Preference
                    </button>
                    <img
                      className="algn-rght"
                      src="./frontend/assets/images/next-32.png"
                      alt="..."
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-heyEvents"
                      data-toggle="modal"
                      data-target="#bd-example-modal-lg3"
                    >
                      Other Preferences
                    </button>
                    <img
                      className="algn-rght"
                      src="./frontend/assets/images/next-32.png"
                      alt="..."
                    />
                  </div>
                </div>

                <Modal show={model} handleClose={(e) => modalClose(e)}>
                  {type === "session" && (
                    <SelectionModal
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      value={session.session}
                    />
                  )}
                  {type === "login" && (
                    <LoginModal handleSubmit={loginSubmit} />
                  )}
                </Modal>

                <div className="btmMargin1"></div>
                <div className="cnt-area2">
                  <div className="row">
                    <div className="col-5">
                      For - Thursday,
                      <br />
                      <img
                        src="./frontend/assets/images/icons/guests-icon.svg"
                        alt="..."
                      />{" "}
                      &nbsp; 300 Guests
                      <hr className="hrCol" />
                      <h5>
                        <b>
                          March 4<sup>th</sup>
                        </b>
                      </h5>
                    </div>
                    <div className="col-7">
                      <h3>
                        <b>
                          <img
                            src="./frontend/assets/images/icons/info-icon.svg"
                            alt="..."
                          />{" "}
                          3,23,789/-
                        </b>
                      </h3>
                      <br />
                      <button
                        type="button"
                        className="btn btn-block btn-outline-heyEvents"
                        onClick={(e) => modalOpen("login")}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btmMargin1"></div>
      <br />
      <div className="row heading-txt">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h4>
            <b>
              <img
                src="./frontend/assets/images/icons/scale-icon.svg"
                alt="..."
              />{" "}
              &nbsp; Dimension: {formData?.data?.dimension}. Area:{" "}
              {formData?.data?.area} | Height:{formData?.data?.heidht} | Guest
              Entry Point: 2
              <br />
              <img src="./frontend/assets/images/icons/like-icon.svg" />
              &nbsp; Compliments: Accomodation (Suite Room x2), Entrance
              Decoration
            </b>
          </h4>
        </div>
      </div>

      <div className="btmMargin1"></div>
    </div>
  );
}

export default ContentArea;
