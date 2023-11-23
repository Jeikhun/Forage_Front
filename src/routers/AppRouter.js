import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <NavLink exact to="/" activeclassname="active">
        Home|
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        Contact|
      </NavLink>
      <NavLink exact to="/product" activeclassname="active">
        Product|
      </NavLink>
      <NavLink to="/product/12" activeclassname="active">
        Product Detail
      </NavLink>
    </nav>
  );
};
const FagPage = () => {
  return (
    <>
      <div>HomePage</div>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/fags" component={FagPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
