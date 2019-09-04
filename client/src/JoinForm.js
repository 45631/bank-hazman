import React, { Component } from "react";

export class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onNameChange(event) {
    const name = event.target.value;
    this.setState({ name: name });
  }

  submit() {
    const data = {
      name: this.state.name
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("save!");
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
