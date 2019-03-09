import React from "react";
import Welcome from "./Welcome";
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MeetupLocationIndex from "./MeetupLocationIndex";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route path="/" exact component={Welcome} />
        <Route path="/meetup_locations" exact component={MeetupLocationIndex} />
      </div>
    </BrowserRouter>
  );
}

export default App;
