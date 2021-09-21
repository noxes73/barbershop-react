import React from "react";
import Login from "./Login";
import Calendar from "./Calendar";
import AddAppointment from "./AddAppointment";
import Items from "./Items";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/calendar" component={Calendar}></Route>
          <Route exact path="/calendar/add" component={AddAppointment}></Route>
          <Route exact path="/items" component={Items}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
