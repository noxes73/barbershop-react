import _ from "lodash";
import React from "react";
import { Button, Segment, Input, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AddAppointment extends React.Component {
  getOptions = (number, prefix = "Choice ") => {
    _.times(number, (index) => ({
      key: index,
      text: `${prefix}${index}`,
      value: index,
    }));
  };
  play = () => {};
  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <Link to="/calendar">
            <Button content="Calendar" primary></Button>
          </Link>
        </div>
        <Segment>
          <Input label="Name" style={{ padding: "5px" }}></Input> <br />
          <Dropdown
            button
            style={{ margin: "10px" }}
            placeholder="Select Hour"
            scolling
            options={this.getOptions()}
          />
          <br />
          <Dropdown
            style={{ margin: "10px" }}
            text="Color"
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Divider />
              <Dropdown.Item text="Red" />
              <Dropdown.Item text="Blue" />
              <Dropdown.Item text="Green" />
            </Dropdown.Menu>
          </Dropdown>
        </Segment>
      </div>
    );
  }
}

export default AddAppointment;
