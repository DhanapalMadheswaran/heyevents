import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="topMargin"></div>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <Link className="navbar-brand" to={"/"}>
                <img src="./frontend/assets/images/logo.svg" alt="..." />
              </Link>
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
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12 nav-alignment collapse navbar-collapse"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="venue-selection.html">
                    Venue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="decor.html">
                    Decor
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#!">
                    Caterers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col">
            <hr className="hrCol" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
