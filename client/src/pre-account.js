import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAd,
  faWater,
  faBaby,
  faMoneyCheck,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";

export class PreAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
    this.toAccount = this.toAccount.bind(this);
    this.ToStatementForm = this.ToStatementForm.bind(this);
  }
  login() {}
  toAccount() {
    this.props.history.push("/account");
  }
  ToStatementForm() {
    this.props.history.push("/statementForm");
  }
  render() {
    return (
      <div>
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
          <input type="text" class="form-control" id="exampleInputPassword1" />
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
        </div>
      </div>
    );
  }
}
