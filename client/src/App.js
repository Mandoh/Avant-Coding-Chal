import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav";
import Transaction from "./pages/Transaction";
import SignUpCustomer from "./pages/SignUpCustomer";
import userInterface from "./pages/Dashboard";
import Footer from "./components/Footer"



const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SignUpCustomer} />
        <Route exact path="/transaction/:id" component={Transaction} />
        <Route exact path="/dashboard" component={userInterface} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
