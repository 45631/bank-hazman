import React, { Component } from "react";

export class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], result: [] };
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3000/users").then(data =>
      data.json().then(data => this.setState({ data: data }))
    );
  }
  submit() {
    const data = this.state.data;
    if (data) {
      console.log(data);
      const result = [];
      data.forEach(action => {
        if (action.domain[0]) {
          const view = (
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
          result.push(view);
          this.setState({ result: result });
        }
      });
    }
  }
  render() {
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <div className="form-group">
          <h3>אני זקוק לעזרה ב:</h3>
          <label>
            <input
              type="checkbox"
              name="baby"
              checked={this.state.domain}
              onChange={this.statement}
            />
            שמרטפות
            <br />
            <input
              type="checkbox"
              name="tv"
              checked={this.state.domain}
              onChange={this.statement}
            />
            טכנולוגיה
            <br />
            <input
              type="checkbox"
              name="pen"
              checked={this.state.domain}
              onChange={this.statement}
            />
            כתיבה
            <br />
            <input
              type="checkbox"
              name="motorcycle"
              checked={this.state.domain}
              onChange={this.statement}
            />
            שליחויות
            <br />
            <input
              type="checkbox"
              name="cap"
              checked={this.state.domain}
              onChange={this.statement}
            />
            לימודי עזר
            <br />
            <input
              type="checkbox"
              name="dog"
              checked={this.state.domain}
              onChange={this.statement}
            />
            דוגיסיטר
            <br />
            <input
              type="checkbox"
              name="car"
              checked={this.state.domain}
              onChange={this.statement}
            />
            הסעות
            <br />
            <input
              type="checkbox"
              name="hamburger"
              checked={this.state.domain}
              onChange={this.statement}
            />
            בישולים
            <br />
            <input
              type="checkbox"
              name="tools"
              checked={this.state.domain}
              onChange={this.statement}
            />
            עבודות תחזוקה <br />
          </label>

          <div>
            {" "}
            <button className="btn btn-primary" onClick={this.submit}>
              מי יכול לעזור לי?
            </button>
          </div>
        </div>
        <div className="userDiv">
          {" "}
          <p> נסה לפנות ל:</p>
          {this.state.result}
        </div>
      </div>
    );
  }
}
