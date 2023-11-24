import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FagPage from "./FagPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GithubState from "../context/GithubState";
import HomePage from "./HomePage";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <div className="wrapper">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/fags" component={FagPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
