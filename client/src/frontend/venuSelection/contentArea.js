/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Gallery from "./gallery";
import Modal from "./Modal";
import LoginModal from "./loginModal";
import SeatingModal from "./prefrenceModals/seatingModal";
import SelectionModal from "./prefrenceModals/selectionModal";
import BreakFastModal from "./prefrenceModals/breakfastModal";
import LunchModal from "./prefrenceModals/lunchModal";
import DinnerModal from "./prefrenceModals/dinnerModal";
import EditMenuModal from "./editMenuModals/editMenuModal";
import { CartUtils } from "../../shared/utils";
import Toast from "../../components/toast";
import Calendar from "react-calendar";
import moment from "moment";
function ContentArea(props) {
  const [value, setValue] = useState();
  const { category: category_name = "EventSpace" } = props;
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [session, setSession] = useState({
    session: "Select Session",
  });
  const [seating, setSeating] = useState({
    seating: "Select Seating",
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
    if (type === "seating") {
      setSeating({ seating: e.value });
      modalClose();
    } else {
      setSession({ session: e.value });
      modalClose();
    }
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
          let {
            success = false,
            error = false,
            warning = false,
          } = CartUtils(category_name, session, seating, lastItem);

          if (warning) {
            Toast("warning", "🦄 Vendor Already Exists in your Cart!");

            history.push("/cart-details");
          }
          if (success) {
            Toast("success", "🦄 Vendor Added in your Cart!");
            history.push("/cart-details");
          }
          if (error) {
            Toast("error", "🦄 Please Select Session/Searting Preference!");
          }
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
          let {
            success = false,
            error = false,
            warning = false,
          } = CartUtils(category_name, session, seating, lastItem);
          if (warning) {
            Toast("warning", "🦄 Vendor Already Exists in your Cart!");

            history.push("/cart-details");
          }
          if (success) {
            Toast("success", "🦄 Vendor Added in your Cart!");
            history.push("/cart-details");
          }
          if (error) {
            Toast("error", "🦄 Try Again!");
          }
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

  const openFood = (e) => {
    setModel(true);
    setType(e.target.value);
  };

  const foodSubmit = (e) => {
    if (e === "editMenu") {
      setModel(true);
      setType("editMenu");
    }
  };
  const changeDate = async (e) => {
    let v = moment(e).format("DD/MM/YYYY");

    const lastItem = window.location.pathname.split("-").pop();
    try {
      const getslots = await axios.get(
        `http://localhost:5000/api/slots/${lastItem}`
      );

      try {
        localStorage.setItem("event_date", v);
        localStorage.setItem("slots", JSON.stringify(getslots.data[0]?.slots));
      } catch (err) {
        console.error(err);
      }
    } catch (error) {
      console.log(error);
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
            <div className="col-12">
              <Calendar
                id="datepicker"
                style={{ color: "#fff" }}
                onChange={changeDate}
                value={value}
              />
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
                    {/* <img
                      className="algn-rght"
                      src="./frontend/assets/images/next-32.png"
                      alt="..."
                    /> */}
                  </div>

                  <div>
                    <button
                      onClick={(e) => modalOpen("seating")}
                      className="btn btn-heyEvents"
                    >
                      {seating.seating}
                    </button>
                    {/* <img
                      className="algn-rght"
                      src="./frontend/assets/images/next-32.png"
                      alt="..."
                    /> */}
                  </div>
                  {/* <div>
                    Food Preference
                    <select>
                      <option>Select </option>
                      <option>Veg</option>
                      <option>Non-Veg</option>
                    </select>
                  </div> */}

                  {/* <div>
                    Food Timming
                    <select onChange={(e) => openFood(e)}>
                      <option>Select </option>
                      <option key="BreakFast">BreakFast</option>
                      <option key="Lunch">Lunch</option>
                      <option key="Dinner">Dinner</option>
                    </select>
                  </div> */}
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

                  {type === "seating" && (
                    <SeatingModal
                      handleSubmit={handleSubmit}
                      value={seating.seating}
                    />
                  )}

                  {type === "BreakFast" && (
                    <BreakFastModal handleSubmit={foodSubmit} />
                  )}
                  {type === "editMenu" && (
                    <EditMenuModal handleSubmit={loginSubmit} />
                  )}

                  {type === "Lunch" && <LunchModal handleSubmit={foodSubmit} />}
                  {type === "Dinner" && (
                    <DinnerModal handleSubmit={foodSubmit} />
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
