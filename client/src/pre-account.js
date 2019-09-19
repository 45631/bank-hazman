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
    this.state = {};
    this.login = this.login.bind(this);
    this.toAccount = this.toAccount.bind(this);
    this.ToStatementForm = this.ToStatementForm.bind(this);
    this.ToRequestForm = this.ToRequestForm.bind(this);
  }
  login() {}
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
          <div class="form-group">
            <label for="exampleInputEmail1">Email </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="הקלד כתובת "
            />
            <small id="emailHelp" class="form-text text-muted">
              לעולם לא נשתף את הדוא"ל שלך עם אף אחד אחר.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">שם משתמש</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
            <button type="submit" class="btn btn-primary" onClick={this.login}>
              התחבר
            </button>
          </div>
          <div className="twobtn">
            <button
              type="button"
              class="btn pbtn btn-secondary btn-lg"
              onClick={this.toAccount}
            >
              <FontAwesomeIcon icon={faCalculator} />
              <br />
              המשך לחשבון
            </button>
            <button
              type="button"
              class="btn pbtn btn-secondary btn-lg"
              onClick={this.ToStatementForm}
            >
              <FontAwesomeIcon icon={faMoneyCheck} />
              <br />
              לטופס דיווח
            </button>
            <button
              type="button"
              class="btn pbtn btn-secondary btn-lg"
              onClick={this.ToRequestForm}
            >
              <FontAwesomeIcon icon={faClock} />
              <br />
              לטופס בקשה
            </button>
          </div>
        </div>
      </div>
    );
  }
}
