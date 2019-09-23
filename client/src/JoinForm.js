import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export class JoinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      domain: [
        // "עבודות תחזוקה",
        // "בישולים",
        // "הסעות",
        // "דוגיסיטר",
        // "לימודי עזר",
        // "שליחויות",
        // "כתיבה",
        // "עזרה טכנולוגית",
        // "שמרטפות"
      ],
      user: false
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onNameChange(event) {
    const target = event.target;
    if (target.type === "checkbox") {
      const name = target.name;
      let domain = [...this.state.domain];
      if (target.checked) {
        domain.push(name);
      } else {
        domain = this.state.domain.filter(d => {
          d !== name;
        });
      }
      this.setState({ domain });
    } else {
      const name = target.name;
      const value = target.value;
      this.setState({ [name]: value });
    }
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
      this.setState({ name: "" });
      console.log("save!");
    });
    this.setState({ user: true });
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
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
                checked={this.state.domain.includes("baby")}
                onChange={this.onNameChange}
              />
              שמרטפות
              <br />
              <input
                type="checkbox"
                name="tv"
                checked={this.state.domain.includes("tv")}
                onChange={this.onNameChange}
              />
              טכנולוגיה
              <br />
              <input
                type="checkbox"
                name="pen"
                checked={this.state.domain.includes("pen")}
                onChange={this.onNameChange}
              />
              כתיבה
              <br />
              <input
                type="checkbox"
                name="motorcycle"
                checked={this.state.domain.includes("motorcycle")}
                onChange={this.onNameChange}
              />
              שליחויות
              <br />
              <input
                type="checkbox"
                name="cap"
                checked={this.state.domain.includes("cap")}
                onChange={this.onNameChange}
              />
              לימודי עזר
              <br />
              <input
                type="checkbox"
                name="dog"
                checked={this.state.domain.includes("dog")}
                onChange={this.onNameChange}
              />
              דוגיסיטר
              <br />
              <input
                type="checkbox"
                name="car"
                checked={this.state.domain.includes("car")}
                onChange={this.onNameChange}
              />
              הסעות
              <br />
              <input
                type="checkbox"
                name="hamburger"
                checked={this.state.domain.includes("hamburger")}
                onChange={this.onNameChange}
              />
              בישולים
              <br />
              <input
                type="checkbox"
                name="tools"
                checked={this.state.domain.includes("tools")}
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
          {this.state.user && <p>תודה שהצטרפת לקהילה שלנו וברוך הבא!</p>}
        </div>
        <Footer />
      </div>
    );
  }
}
