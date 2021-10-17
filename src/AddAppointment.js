import React from "react";
import { Button, Segment, Input, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AddAppointment extends React.Component {
  state = {
    appointment: { name: "asd", time: 0, color: "color" },
    appointments: [],
    hourOptions: [],
    colorOptions: [
      { key: 1, text: "Red", value: "red" },
      { key: 2, text: "Green", value: "green" },
      { key: 3, text: "Blue", value: "blue" },
      { key: 4, text: "Yellow", value: "yellow" },
    ],
  };
  // nem teljesen értem hogy ez hogy működik https://react.semantic-ui.com/modules/dropdown/#variations-scrolling
  componentDidMount = async () => {
    for (let i = 1; i < 25; i++) {
      await this.setState((prevState) => {
        let opt = prevState.hourOptions;
        opt.push({ key: i - 1, text: i + ":00 óra", value: i });
        return { houroptions: opt };
      });
    }
  };
  changeName = (e) => {
    this.setState((prevState) => {
      prevState.appointment.name = e.target.value;
      return { prevState };
    });
  };
  changeHour = (a, e) => {
    this.setState((prevState) => {
      prevState.appointment.time = e.value;
      return { prevState };
    });
  };
  changeColor = (a, e) => {
    this.setState((prevState) => {
      prevState.appointment.color = e.value;
      return { prevState };
    });
  };
  addToAppointments = () => {
    this.setState((prevState) => {
      prevState.appointments.push(this.state.appointment);
      return { prevState };
    });
  };
  testIt = () => {
    console.log(this.state.appointments);
  };

  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <Link to="/calendar">
            <Button content="Calendar" primary></Button>
          </Link>
        </div>
        <Segment>
          <Input
            label="Name"
            style={{ padding: "5px" }}
            onChange={this.changeName}
          ></Input>
          <Dropdown
            button
            style={{
              margin: "10px",
            }}
            placeholder="Select Hour"
            scrolling
            options={this.state.hourOptions}
            onChange={this.changeHour}
          />
          <Dropdown
            style={{
              margin: "10px",
            }}
            clearable
            options={this.state.colorOptions}
            selection
            onChange={this.changeColor}
          />

          <Button
            style={{
              margin: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            onClick={this.addToAppointments}
          >
            Add
          </Button>
          <Button onClick={this.testIt}>Test</Button>
        </Segment>
      </div>
    );
  }
}

export default AddAppointment;
