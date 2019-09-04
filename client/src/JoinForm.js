import React, { Component } from "react";

export class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
    const name = event.target.value;
    this.setState({ name: name });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
        />
      </div>
    );
  }
}
