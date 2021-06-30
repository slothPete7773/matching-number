import styled from "@emotion/styled";
import React from "react";

import NumberTable from "./NumberTable";
import Cell from "./Cell";

// Import helper function
import { isChecked, checkPair } from "./helper";

class App extends React.Component {
  state = {
    current: {
      id: 0,
      value: 0,
    },
    numbers: [],
  };

  // Initialize state
  componentDidMount() {
    this.reset();
  }

  handleCellClick = (evt) => {
    // const event = evt.target.attributes;
    const cell = {
      id: parseInt(evt.target.attributes.id.value),
      value: parseInt(evt.target.attributes.value.value),
    };
    // If current cell is already checked, return;
    if (isChecked(cell.id, this.state.numbers)) return;

    /**
     * In case of the newly clicked cell have same value as the previous one
     * Wil iterate through <numbers> state and re-assign < { status: "checked" } >
     * to these two objects and setState
     * And return from handleCellClick()
     */
    if (checkPair(cell, this.state.current)) {
      this.setState((prevState, props) => {
        return {
          numbers: prevState.numbers.map((item) => {
            if (item.number === cell.value)
              return Object.assign({}, item, { status: "checked" });
            return item;
          }),
        };
      });
      return;
    }

    /**
     * Default setState behavior; setState newly clicked cell with { status: "active" }
     * And if any cell is 'checked' will leave its status as that,
     * otherwise set status to false(reset).
     */
    this.setState((prevState, props) => {
      const numbers = prevState.numbers.map((item) => {
        if (item.id === cell.id)
          return Object.assign({}, item, { status: "active" });
        return Object.assign({}, item, {
          status: item.status === "checked" ? "checked" : false,
        });
      });

      // Return object to setState()
      return {
        current: { id: cell.id, value: cell.value },
        numbers: numbers,
      };
    });
  };

  handleResetClick = () => {
    this.reset();
  };

  reset = () => {
    this.setState({
      current: {
        id: 0,
        value: 0,
      },
      numbers: [
        {
          id: 1,
          number: 1,
          status: false,
        },
        {
          id: 2,
          number: 1,
          status: false,
        },
        {
          id: 3,
          number: 2,
          status: false,
        },
        {
          id: 4,
          number: 2,
          status: false,
        },
        {
          id: 5,
          number: 3,
          status: false,
        },
        {
          id: 6,
          number: 3,
          status: false,
        },
        {
          id: 7,
          number: 4,
          status: false,
        },
        {
          id: 8,
          number: 4,
          status: false,
        },
        {
          id: 9,
          number: 5,
          status: false,
        },
        {
          id: 10,
          number: 5,
          status: false,
        },
        {
          id: 11,
          number: 6,
          status: false,
        },
        {
          id: 12,
          number: 6,
          status: false,
        },
      ],
    });
  };

  render() {
    const NumberTableContainer = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
    `;

    return (
      <NumberTableContainer>
        <h1>Hello Matching Number Game !</h1>
        <NumberTable>
          {this.state.numbers.map((item) => (
            <Cell
              key={item.id}
              id={item.id}
              value={item.number}
              status={item.status}
              onCellClick={this.handleCellClick}
            />
          ))}
        </NumberTable>
        <input type="button" value="Reset" onClick={this.handleResetClick} />
      </NumberTableContainer>
    );
  }
}

export default App;
