import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./admin/components/dashboard";
import VendorList from "./admin/components/vendor/vendorList";
import AddVendor from "./admin/components/vendor/addVendor";
import Category from "./admin/components/category/categoryMain";
import Slider from "./admin/components/slider";
import Container from "./admin/components/Container";
import Login from "./admin/components/auth/login";
import Register from "./admin/components/auth/register";
import Banner from "./admin/components/banner";
import AddSlots from "./admin/components/slots/addSlots";
//FrontEnd
import Main from "./frontend/home/Main";
import VenuSelection from "./frontend/venuSelection";
import PrivateRoute from "./shared/PrivateRoute";
import CategoryList from "./frontend/categoryList";
import Cart from "./frontend/cart/cart";
import CartDetails from "./frontend/cart/cartDetails";
import Checkout from "./frontend/checkout";
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Switch>
            <PrivateRoute exact path="/" component={Main}></PrivateRoute>
            <PrivateRoute exact path="/home" component={Main}></PrivateRoute>
            <PrivateRoute
              exact
              path="/venu-selection-:value"
              component={VenuSelection}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/category-list-:value"
              component={CategoryList}
            ></PrivateRoute>
            <PrivateRoute exact path="/cart" component={Cart}></PrivateRoute>
            <PrivateRoute
              exact
              path="/cart-details"
              component={CartDetails}
            ></PrivateRoute>{" "}
            <PrivateRoute
              exact
              path="/checkout"
              component={Checkout}
            ></PrivateRoute>
            <PrivateRoute exact path="/login" component={Login}></PrivateRoute>
            <PrivateRoute
              exact
              path="/register"
              component={Register}
            ></PrivateRoute>
            <PrivateRoute exact path="/admin" component={Login}></PrivateRoute>
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/vendorList"
              component={VendorList}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/addVendor"
              component={AddVendor}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/editVendor"
              component={AddVendor}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/category"
              component={Category}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/add_slots"
              component={AddSlots}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/slider"
              component={Slider}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/banner"
              component={Banner}
            ></PrivateRoute>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
