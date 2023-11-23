import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fags from "./Fags";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Switch>
          <Route path="/fags" component={Fags} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
