import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookTicket from "./Components/BookTicket";
import FlightList from "./Components/FlightList";
import RegisterPassenger from "./Components/RegisterPassenger";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <Route path="/flight-list">
          <FlightList />
        </Route>
        <Route path="/book-ticket">
          <BookTicket />
        </Route>
        <Route path="/register-passenger">
          <RegisterPassenger />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
