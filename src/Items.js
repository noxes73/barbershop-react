import React from "react";
import {
  Button,
  Input,
  Segment,
  Icon,
  Menu,
  Table,
  Tab,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Items extends React.Component {
  state = {
    tempPriceList: { name: "nameNone", netPrice: null, grossPrice: null },
    priceList: [],
  };
  componentDidMount = () => {
    let tmpList = localStorage.getItem("price-list");

    if (tmpList) {
      let tmpListParse = JSON.parse(tmpList);
      this.setState({ priceList: tmpListParse });
    }
    window.addEventListener("beforeunload", this.onUnload);
  };

  onUnload = () => {
    localStorage.setItem("price-list", JSON.stringify(this.state.priceList));
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
      return prevState;
    });
  };
  test = () => {
    console.log(this.state.priceList);
  };
  renderTable = () => {
    return this.state.priceList.map((e, index) => {
      return this.renerColumn(e, index);
    });
  };
  deleteItem = (index) => {
    this.setState((prevState) => {
      prevState.priceList.splice(index, 1);
      return prevState;
    });
  };
  renerColumn = (e, index) => {
    return (
      <React.Fragment>
        <Table.Row key={index}>
          <Table.Cell>{e.name}</Table.Cell>
          <Table.Cell>{e.netPrice}</Table.Cell>
          <Table.Cell>{e.grossPrice}</Table.Cell>
          <Table.Cell width={1}>
            <Button onClick={() => this.deleteItem(index)}>Delete </Button>
          </Table.Cell>
        </Table.Row>
      </React.Fragment>
    );
  };
  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <Link to="/calendar">
            <Button content="Calendar" primary onClick={this.onUnload}></Button>
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
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Net amount</Table.HeaderCell>
              <Table.HeaderCell>Gross amount</Table.HeaderCell>
              <Table.HeaderCell width={1}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderTable()}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default Items;
