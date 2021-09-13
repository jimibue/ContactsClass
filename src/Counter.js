import React, { Component } from "react";

class Counter extends Component {
  /// shorthand method of setting intial state
  state = { value: 1, people: [], hat: "hat" };
  // like initialize in
  // setting initialize state using constructor
  // constructor(props) {
  //   super(props);
  //   // set default state
  //   this.state = { value: 1, people: [], hat: "hat" };
  //   this.add = this.add.bind(this);
  // }

  add = () => {
    console.log(this);
    this.setState({
      value: this.state.value + 1,
    });
  };

  dec = () => {
    console.log(this);
    this.setState({
      value: this.state.value - 1,
      hat: "hatChanged",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>

        <p>count: {this.state.value}</p>
        <p>count: {this.state.hat}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.dec}>minus</button>
      </div>
    );
  }
}

export default Counter;
