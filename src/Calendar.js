import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class CalendarApp extends React.Component {
  state = {
    localAppointments: [],
  };
  onChange = (e) => {
    console.log(JSON.stringify(e));
  };
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            left: "85%",
            top: "1%",
          }}
        >
          <Link to={"/"}>
            <Button content="Log out" primary></Button>
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          <Link to={"/items"} style={{ paddingLeft: "15px" }}>
            <Button content="Price list" primary></Button>
          </Link>
          <Link
            to={"/calendar/add"}
            style={{ paddingLeft: "70px", position: "relative" }}
          >
            <Button content="Add appointment" primary></Button>
          </Link>
          <div style={{ paddingTop: "1%" }}>
            <Calendar onChange={this.onChange} value={this.value} />
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarApp;
