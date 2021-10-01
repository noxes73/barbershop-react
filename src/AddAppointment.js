import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AddAppointment extends React.Component {
  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <Link to="/calendar">
            <Button content="Calendar" primary></Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AddAppointment;
