import React from "react";
import { Button, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { continueStatement } from "@babel/types";

class Items extends React.Component {
  state = {
    tempPriceList: { name: "nameNone", netPrice: null, grossPrice: null },
    priceList: [],
    asd: [
      { aka: "1", taka: "2" },
      { aka: "2", taka: "2" },
    ],
  };

  tmpNameChange = (e) => {
    this.setState((prevState) => {
      prevState.tempPriceList.name = e.target.value;
      return { prevState };
    });
  };
  tmpNetPriceChange = (e) => {
    this.setState((prevState) => {
      prevState.tempPriceList.netPrice = e.target.value;
      return { prevState };
    });
  };
  tmpGrossPriceChange = (e) => {
    this.setState((prevState) => {
      prevState.tempPriceList.grossPrice = e.target.value;
      return { prevState };
    });
  };
  addToPriceList = () => {
    this.setState((prevState) => {
      prevState.priceList.push(this.state.tempPriceList);
      return { prevState };
    });
  };
  test = () => {
    console.log(this.state.priceList);
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
            onChange={this.tmpNameChange}
          />
          <Input
            label="Net amount"
            style={{ padding: "5px" }}
            onChange={this.tmpNetPriceChange}
          />
          <Input
            label="Gross amount"
            style={{ padding: "5px" }}
            onChange={this.tmpGrossPriceChange}
          />
          <Button content="Add" onClick={this.addToPriceList} />
          <Button content="test" onClick={this.test} />
        </Segment>
      </div>
    );
  }
}

export default Items;
