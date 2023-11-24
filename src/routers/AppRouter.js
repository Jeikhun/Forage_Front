import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import FagPage from "../components/FagPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/fags" component={FagPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
