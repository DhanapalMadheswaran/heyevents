import React, { useState, useEffect } from "react";
import "./order.css";
export default function OrdersList(props) {
  let profile = JSON.parse(localStorage.getItem("profile"));
  const { data = [] } = props;
  useEffect(() => {}, [data]);
  console.log(data.length);
  return (
    <div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-12 my-lg-0 my-1">
            <div id="main-content" class="bg-white border">
              <div class="d-flex flex-column">
                <div class="h5">Hello {profile.name},</div>
                <div>Logged in as: {profile.email}</div>
              </div>
              <div class="d-flex my-4 flex-wrap">
                <div class="box me-4 my-1 bg-light">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                    alt=""
                  />
                  <div class="d-flex align-items-center mt-2">
                    <div class="tag">Orders placed: </div>
                    <div class="ms-auto number">{data.length}</div>
                  </div>
                </div>
                <div class="box me-4 my-1 bg-light">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                    alt=""
                  />
                  <div class="d-flex align-items-center mt-2">
                    <div class="tag">Items in Cart</div>
                    <div class="ms-auto number">10</div>
                  </div>
                </div>
                <div class="box me-4 my-1 bg-light">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                    alt=""
                  />
                  <div class="d-flex align-items-center mt-2">
                    <div class="tag">Wishlist</div>
                    <div class="ms-auto number">10</div>
                  </div>
                </div>
              </div>
              <div class="text-uppercase">My recent orders</div>
              {data.length > 0 ? (
                <div>
                  {data?.map((row, i) => (
                    <div class="order my-3 bg-light">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="d-flex flex-column justify-content-between order-summary">
                            <div class="d-flex align-items-center">
                              <div class="text-uppercase">{row._id}</div>
                              <div class="blue-label ms-auto text-uppercase">
                                {row.payment_status}
                              </div>
                            </div>
                            <div class="fs-8">Session: {row.session}</div>
                            <div class="fs-8">
                              Event Date: {row.event_date}{" "}
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                            <div class="status">Status : {row.status}</div>
                            <div class="btn btn-primary text-uppercase">
                              order info
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <h4>Data Not Found</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
