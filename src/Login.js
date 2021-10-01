import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Segment
          placeholder
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
            />
            <Link to={"/calendar"}>
              <Button content="Login" primary></Button>
            </Link>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default Login;
