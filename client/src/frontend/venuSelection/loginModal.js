import React, { useState } from "react";

function LoginModal({ handleSubmit, value }) {
  const [input, setInput] = useState({});
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <div class="border-popup">
        <div class="row login-block">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="login-part">
              <h3>Login</h3>

              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Enter Email id"
                onChange={inputChange}
                required
              />

              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={inputChange}
                required
              />

              <div class="login-btn">
                <button
                  className="tablinks btn btn-heyEvents"
                  onClick={(e) => handleSubmit(input)}
                >
                  Login
                </button>
              </div>

              <div class="row">
                <div class="other-option">
                  <p>Or</p>

                  <a href="#">
                    <p>Login with Social Media</p>
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 login-option">
                  <button
                    class="btn btn-heyEvents"
                    id="apply_coupon"
                    type="button"
                  >
                    <i class="fab fa-facebook"></i>Facebook
                  </button>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 login-option">
                  <button
                    class="btn btn-heyEvents"
                    id="apply_coupon"
                    type="button"
                  >
                    <i class="fab fa-google"></i>Google
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="register-part">
              <h3>Registration</h3>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone no"
                    placeholder="Enter Phone no"
                    value=""
                    required
                  />

                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email id"
                    value=""
                    required
                  />

                  <input
                    type="password"
                    class="form-control"
                    name="phone"
                    id="password"
                    placeholder="Password"
                    value=""
                    required
                  />

                  <input
                    type="password"
                    class="form-control"
                    name="phone"
                    id="password"
                    placeholder="Confirm Password"
                    value=""
                    required
                  />

                  <div class="reg-btn">
                    <button class="tablinks btn btn-heyEvents" type="Register">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
