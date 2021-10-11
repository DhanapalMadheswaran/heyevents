import React, { Component } from "react";
import SideBar from "./sideBar";
import Header from "./header";
import Footer from "./footer";
import ContentArea from "./contentArea";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="nk-app-root">
        <div className="nk-main ">
          <SideBar />
          <div className="nk-wrap ">
            <Header />
            <ContentArea />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
