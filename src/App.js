import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class App extends React.Component {
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

            <Button content="Login" primary />
          </Form>
        </Segment>
      </div>
    );
  }
}
export default App;
