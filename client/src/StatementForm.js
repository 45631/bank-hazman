import React, { Component } from "react";

export class StatementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.statement = this.statement.bind(this);
    this.submit = this.submit.bind(this);
  }
  statement(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }
  submit() {
    const data = {
      userId: this.state.userId,
      toId: this.state.toId,
      date: this.state.date,
      pull: this.state.pull,
      push: this.state.push
    };
    fetch("http://localhost:3000/account", {
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
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <div className="form-group">
          <h3>דיווח על הפקדה / משיכה</h3>
          <label>
            תאריך
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.statement}
            />
          </label>
          <label>
            משתמש שותף
            <input
              type="text"
              name="toId"
              value={this.state.toId}
              onChange={this.statement}
            />
          </label>
          <label>
            <input
              type="radio"
              name="name"
              value={this.state.value}
              onChange={this.statement}
            />
            משיכה
          </label>
          <label>
            <input
              type="radio"
              name="name"
              value={this.state.value}
              onChange={this.statement}
            />
            הפקדה
          </label>
          <br />
          <p>בתחום:</p>
          <label>
            <input
              type="radio"
              name="baby"
              checked={this.state.domain}
              onChange={this.statement}
            />
            שמרטפות
            <br />
            <input
              type="radio"
              name="tv"
              checked={this.state.domain}
              onChange={this.statement}
            />
            טכנולוגיה
            <br />
            <input
              type="radio"
              name="pen"
              checked={this.state.domain}
              onChange={this.statement}
            />
            כתיבה
            <br />
            <input
              type="radio"
              name="motorcycle"
              checked={this.state.domain}
              onChange={this.statement}
            />
            שליחויות
            <br />
            <input
              type="radio"
              name="cap"
              checked={this.state.domain}
              onChange={this.statement}
            />
            לימודי עזר
            <br />
            <input
              type="radio"
              name="dog"
              checked={this.state.domain}
              onChange={this.statement}
            />
            דוגיסיטר
            <br />
            <input
              type="radio"
              name="car"
              checked={this.state.domain}
              onChange={this.statement}
            />
            הסעות
            <br />
            <input
              type="radio"
              name="hamburger"
              checked={this.state.domain}
              onChange={this.statement}
            />
            בישולים
            <br />
            <input
              type="radio"
              name="tools"
              checked={this.state.domain}
              onChange={this.statement}
            />
            עבודות תחזוקה <br />
          </label>{" "}
          <button className="btn btn-primary" onClick={this.submit}>
            דווח
          </button>
        </div>
      </div>
    );
  }
}
