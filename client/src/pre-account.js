import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheck,
  faCalculator,
  faClock
} from "@fortawesome/free-solid-svg-icons";

export class PreAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "", err: false };
    this.login = this.login.bind(this);
    this.toAccount = this.toAccount.bind(this);
    this.ToStatementForm = this.ToStatementForm.bind(this);
    this.ToRequestForm = this.ToRequestForm.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
  }
  onInputValueChange() {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value, err: false });
  }
  login() {
    const data = {
      userName: this.state.userName,
      password: this.state.password
    };
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(user => {
        if (user.err) {
          this.setState({ err: true });
        } else {
          this.setState({ user });
        }
        console.log("ok!");
      });
  }
  toAccount() {
    this.props.history.push("/account");
  }
  ToStatementForm() {
    this.props.history.push("/statementForm");
  }
  ToRequestForm() {
    this.props.history.push("/requestForm");
  }
  render() {
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <div className="container">
          <h3>התחבר</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email </label>
            <input
              name="userName"
              onChange={this.onInputValueChange}
              value={this.state.userName}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="הקלד כתובת "
            />
            <small id="emailHelp" className="form-text text-muted">
              לעולם לא נשתף את הדוא"ל שלך עם אף אחד אחר.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">שם משתמש</label>
            <input
              name="password"
              onChange={this.onInputValueChange}
              value={this.state.password}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.login}
            >
              התחבר
            </button>
          </div>
          {this.state.err && <p>משתמש לא קיים :(</p>}
          {this.state.user && (
            <div className="twobtn">
              <button
                type="button"
                className="btn pbtn btn-secondary btn-lg"
                onClick={this.toAccount}
              >
                <FontAwesomeIcon icon={faCalculator} />
                <br />
                המשך לחשבון
              </button>
              <button
                type="button"
                className="btn pbtn btn-secondary btn-lg"
                onClick={this.ToStatementForm}
              >
                <FontAwesomeIcon icon={faMoneyCheck} />
                <br />
                לטופס דיווח
              </button>
              <button
                type="button"
                className="btn pbtn btn-secondary btn-lg"
                onClick={this.ToRequestForm}
              >
                <FontAwesomeIcon icon={faClock} />
                <br />
                לטופס בקשה
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
