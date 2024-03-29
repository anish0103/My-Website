import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Navigation from "./Components/Navigation/navigation";
import HomePage from "./Pages/HomePage/home";
import AboutPage from "./Pages/AboutPage/about";
import WorkPage from "./Pages/WorkPage/work";
import ContactPage from "./Pages/ContactPage/contact";

const App = () => {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
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
    </HelmetProvider>
  );
}

export default App;
