import React, { Component } from "react";

export class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], domain: "", help: false };
    this.submit = this.submit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  submit() {
    fetch("http://localhost:3000/users/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ domain: this.state.domain })
    })
      .then(response => response.json())
      .then(users => {
        this.setState({ users });
      });
    this.setState({ help: true });
  }

  createUsersViews() {
    return this.state.users.map(action => {
      return (
        <div className="card userCard">
          <img
            src={require("../assets/placeholder.png")}
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">{action.userName}</p>
            <p className="card-text">{action.mail}</p>
            <p className="card-text">{action.phone}</p>
          </div>
        </div>
      );
    });
  }

  onCheck(event) {
    const target = event.target;
    const name = target.name;
    let domain;
    if (target.checked) {
      domain = name;
    } else {
      domain = "";
    }
    this.setState({ domain });
  }

  render() {
    const usersViews = this.createUsersViews();
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <div className="form-group">
          <h3>אני זקוק לעזרה ב:</h3>
          <label>
            <input
              type="checkbox"
              name="baby"
              checked={this.state.domain === "baby"}
              onChange={this.onCheck}
            />
            שמרטפות
            <br />
            <input
              type="checkbox"
              name="tv"
              checked={this.state.domain === "tv"}
              onChange={this.onCheck}
            />
            טכנולוגיה
            <br />
            <input
              type="checkbox"
              name="pen"
              checked={this.state.domain === "pen"}
              onChange={this.onCheck}
            />
            כתיבה
            <br />
            <input
              type="checkbox"
              name="motorcycle"
              checked={this.state.domain === "motorcycle"}
              onChange={this.onCheck}
            />
            שליחויות
            <br />
            <input
              type="checkbox"
              name="cap"
              checked={this.state.domain === "cap"}
              onChange={this.onCheck}
            />
            לימודי עזר
            <br />
            <input
              type="checkbox"
              name="dog"
              checked={this.state.domain === "dog"}
              onChange={this.onCheck}
            />
            דוגיסיטר
            <br />
            <input
              type="checkbox"
              name="car"
              checked={this.state.domain === "car"}
              onChange={this.onCheck}
            />
            הסעות
            <br />
            <input
              type="checkbox"
              name="hamburger"
              checked={this.state.domain === "hamburger"}
              onChange={this.onCheck}
            />
            בישולים
            <br />
            <input
              type="checkbox"
              name="tools"
              checked={this.state.domain === "tools"}
              onChange={this.onCheck}
            />
            עבודות תחזוקה <br />
          </label>

          <div>
            <button className="btn btn-primary" onClick={this.submit}>
              מי יכול לעזור לי?
            </button>
          </div>
        </div>
        {this.state.help && (
          <div className="userDiv">
            <p> נסה לפנות ל:</p>
            {usersViews}
          </div>
        )}
      </div>
    );
  }
}
