import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <div className="topMargin"></div>
      <div
        className="container top-menus"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div>
                <a className="navbar-brand" href="index.html">
                  <img src="./frontend/assets/images/logo.svg" />
                </a>
                <button
                  className="navbar-toggler "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <ul className="navbar-nav mr-auto">

{props?.menu.map((slide, i) => (
                  <li className="nav-item">
                    <Link className="nav-link" to={`/category-list-${slide.name}`}>
                      {slide.name}
                    </Link>
                  </li>
                ))}
                  <div className="nav-div-align">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fa fa-search" aria-hidden="true"></i>{" "}
                          Search
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <i className="fa fa-user" aria-hidden="true"></i>{" "}
                          Login
                        </a>
                      </li>
                      <form className="form-inline">
                        <input
                          className="list-your-business"
                          type="search"
                          placeholder="List your business"
                          aria-label="Search"
                        />
                      </form>
                    </ul>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex-container-logo logo-placement">
        <div className="logo-clr">
          <img src="./frontend/assets/images/overlay-logo.svg" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
