import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./Components/navigation";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import WorkPage from "./Pages/work";
import ContactPage from "./Pages/contact";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about/" exact >
          <AboutPage />
        </Route>
        <Route path="/work/" exact >
          <WorkPage />
        </Route>
        <Route path="/contact/" exact >
          <ContactPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
