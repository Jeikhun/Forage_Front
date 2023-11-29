import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FagPage from "./FagPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GithubState from "../context/GithubState";
import HomePage from "./HomePage";
import Contact from "./Contact";
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>;

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
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
