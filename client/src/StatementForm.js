import React, { Component } from "react";

export class StatementForm extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", domain: "", traffic: "", Reference: false };
    this.submit = this.submit.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onCheckTraffic = this.onCheckTraffic.bind(this);
  }
  onCheckTraffic(event) {
    const target = event.target;
    const name = target.name;
    let traffic;
    if (target.checked) {
      traffic = name;
    } else {
      traffic = "";
    }
    this.setState({ traffic });
  }
  onCheck(event) {
    const target = event.target;
    if (target.type === "checkbox") {
      const name = target.name;
      let domain = [...this.state.domain];
      if (target.checked) {
        // domain.push(name);
        domain = name;
      } else {
        domain = "";
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
      date: this.state.date,
      domain: this.state.domain,
      traffic: this.state.traffic
    };
    fetch("http://localhost:3000/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("save!");
      this.setState({ date: "", domain: "", traffic: "" });
      this.setState({ Reference: true });
    });
  }
  render() {
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <div className="form-group">
          <h3>דיווח על הפקדה </h3>
          <label>
            תאריך
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onCheck}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="הפקדה"
              checked={this.state.traffic === "הפקדה"}
              onChange={this.onCheckTraffic}
            />
            הפקדה
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="משיכה"
              checked={this.state.traffic === "משיכה"}
              onChange={this.onCheckTraffic}
            />
            משיכה
          </label>
          <br />
          <p>בתחום:</p>
          <label>
            <input
              type="checkbox"
              name="שמרטפות"
              checked={this.state.domain === "שמרטפות"}
              onChange={this.onCheck}
            />
            שמרטפות
            <br />
            <input
              type="checkbox"
              name="טכנולוגיה"
              checked={this.state.domain === "טכנולוגיה"}
              onChange={this.onCheck}
            />
            טכנולוגיה
            <br />
            <input
              type="checkbox"
              name="כתיבה"
              checked={this.state.domain === "כתיבה"}
              onChange={this.onCheck}
            />
            כתיבה
            <br />
            <input
              type="checkbox"
              name="שליחויות"
              checked={this.state.domain === "שליחויות"}
              onChange={this.onCheck}
            />
            שליחויות
            <br />
            <input
              type="checkbox"
              name="לימודי עזר"
              checked={this.state.domain === "לימודי עזר"}
              onChange={this.onCheck}
            />
            לימודי עזר
            <br />
            <input
              type="checkbox"
              name="דוגיסיטר"
              checked={this.state.domain === "דוגיסיטר"}
              onChange={this.onCheck}
            />
            דוגיסיטר
            <br />
            <input
              type="checkbox"
              name="הסעות"
              checked={this.state.domain === "הסעות"}
              onChange={this.onCheck}
            />
            הסעות
            <br />
            <input
              type="checkbox"
              name="בישול"
              checked={this.state.domain === "בישול"}
              onChange={this.onCheck}
            />
            בישולים
            <br />
            <input
              type="checkbox"
              name="עבודות תחזוקה"
              checked={this.state.domain === "עבודות תחזוקה"}
              onChange={this.onCheck}
            />
            עבודות תחזוקה <br />
          </label>
          <button className="btn btn-primary" onClick={this.submit}>
            דווח
          </button>{" "}
          {this.state.Reference && (
            <p>דיווחת בהצלחה, כל הכבוד! המשך לשמור על סדר ברישומים</p>
          )}
        </div>
      </div>
    );
  }
}
