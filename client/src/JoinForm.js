import React, { Component } from "react";

export class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onNameChange = this.onNameChange.bind(this);
    this.submit = this.submit.bind(this);
    this.toHome = this.toHome.bind(this);
    this.toAccount = this.toAccount.bind(this);
    this.toAbout = this.toAbout.bind(this);
    this.toContact = this.toContact.bind(this);
    this.toJoinForm = this.toJoinForm.bind(this);
  }

  onNameChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  submit() {
    const data = {
      name: this.state.name,
      userName: this.state.userName,
      phone: this.state.phone,
      mail: this.state.mail,
      city: this.state.city,
      domain: this.state.domain
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
  toHome() {
    this.props.history.push("/");
  }
  toAccount() {
    this.props.history.push("/pre-account");
  }
  toAbout() {
    this.props.history.push("/about");
  }
  toContact() {
    this.props.history.push("/contact");
  }
  toJoinForm() {
    this.props.history.push("/joinForm");
  }

  render() {
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <header>
          <ul className="nav nav-tabs">
            <li className="nav-link " onClick={this.toHome}>
              בית
            </li>
            <li className="nav-link " onClick={this.toAbout}>
              אודות
            </li>

            <li className="nav-link " onClick={this.toContact}>
              צור קשר
            </li>
            <li className="nav-link active" onClick={this.toJoinForm}>
              טופס הצטרפות
            </li>
          </ul>
          <button
            type="button"
            className="btn  btn-secondary btn-lg btn-block"
            onClick={() => {
              this.toAccount();
            }}
          >
            לחשבון שלי
          </button>
          <div className="clockimg"></div>
          <div className="clockimg"></div>
        </header>
        <div className="container">
          <h3>ברוך הבא לבנק הזמן</h3>
          <div className="form-group">
            <p>
              להצטרפות נא מלא את פרטיך וסמן בתיבות הסימון ליד התחומים בהם הנך
              מעוניין לתרום
            </p>
            <label>
              שם
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </label>

            <label>
              שם משתמש (יוצג באתר)
              <input
                type="text"
                name="userName"
                value={this.state.userName}
                onChange={this.onNameChange}
              />
            </label>
            <label>
              כתובת דוא"ל
              <input
                type="text"
                name="mail"
                value={this.state.mail}
                onChange={this.onNameChange}
              />
            </label>
            <label>
              טלפון
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.onNameChange}
              />
            </label>

            <label>
              עיר מגורים
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onNameChange}
              />
            </label>
          </div>
          <hr />
          <div className="domain">
            <label>
              <input
                type="checkbox"
                name="baby"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              שמרטפות
              <br />
              <input
                type="checkbox"
                name="tv"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              טכנולוגיה
              <br />
              <input
                type="checkbox"
                name="pen"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              כתיבה
              <br />
              <input
                type="checkbox"
                name="motorcycle"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              שליחויות
              <br />
              <input
                type="checkbox"
                name="cap"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              לימודי עזר
              <br />
              <input
                type="checkbox"
                name="dog"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              דוגיסיטר
              <br />
              <input
                type="checkbox"
                name="car"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              הסעות
              <br />
              <input
                type="checkbox"
                name="hamburger"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              בישולים
              <br />
              <input
                type="checkbox"
                name="tools"
                checked={this.state.domain}
                onChange={this.onNameChange}
              />
              עבודות תחזוקה <br />
            </label>
          </div>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.submit}
          >
            שלח
          </button>
        </div>
      </div>
    );
  }
}
