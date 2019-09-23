import React, { Component } from "react";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushViews: [],
      pullViews: [],
      button: false,
      balance: false
    };
    this.counter = this.counter.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/account").then(data =>
      data.json().then(data => this.setState({ data: data }))
    );
  }
  counter() {
    const pullcounter = this.state.pullViews.length;
    this.setState({ pullcounter });
    const pushCounter = this.state.pushViews.length;
    this.setState({ pushCounter });
    let result = pullcounter - pushCounter;
    this.setState({ result });
    this.setState({ balance: true });
  }
  show() {
    const data = this.state.data;

    const pullViews = [];
    const pushViews = [];

    if (data) {
      data.forEach(action => {
        if (action.traffic == "הפקדה") {
          const view = (
            <tr>
              <th scope="row">{action.date}</th>
              <td>{action.category}</td>
            </tr>
          );

          pullViews.push(view);
        }
        if (action.traffic == "משיכה") {
          const view = (
            <tr>
              <th scope="row">{action.date}</th>
              <td>{action.category}</td>
            </tr>
          );

          pushViews.push(view);
        }
      });
    }
    this.setState({ pullViews });
    this.setState({ pushViews });
    this.setState({ button: true });
  }
  render() {
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />
        <div className="accHeader">
          <button className="btn-lg btn-block" onClick={this.show}>
            הצג תנועות עו"ש
          </button>
          {this.state.button && (
            <button className="btn-lg btn-block" onClick={this.counter}>
              יתרה
            </button>
          )}
        </div>
        {this.state.balance && (
          <div className="balance">
            <h6> סה"כ הפקדות: {this.state.pullcounter}</h6>
            <h6> סה"כ משיכות: {this.state.pushCounter}</h6>
            <h6> יתרתך למשיכה: {this.state.result}</h6>
          </div>
        )}

        <div className="account">
          <div className="pull">
            <h3>הפקדות</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">תאריך</th>
                  <th scope="col">בתחום</th>
                </tr>
              </thead>
              <tbody>{this.state.pullViews}</tbody>
            </table>
          </div>
          <div className="push">
            <h3>משיכות</h3>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">תאריך</th>
                  <th scope="col">בתחום</th>
                </tr>
              </thead>
              <tbody>{this.state.pushViews}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
