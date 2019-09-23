import React, { Component } from "react";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { pullcounter: 0, pushCounter: 0 };
  }

  componentDidMount() {
    fetch("http://localhost:3000/account").then(data =>
      data.json().then(data => this.setState({ data: data }))
    );
  }

  render() {
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
              <td>{action.traffic}</td>
            </tr>
          );

          pullViews.push(view);
        }
        if (action.traffic == "משיכה") {
          const view = (
            <tr>
              <th scope="row">{action.date}</th>
              <td>{action.category}</td>
              <td>{action.traffic}</td>
            </tr>
          );

          pushViews.push(view);
        }
      });
    }

    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />
        <div className="pull">
          {" "}
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">תאריך</th>
                <th scope="col">בתחום</th>
              </tr>
            </thead>
            <tbody>{pullViews}</tbody>
          </table>
        </div>
        <div className="push">
          {" "}
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">תאריך</th>
                <th scope="col">בתחום</th>
              </tr>
            </thead>
            <tbody>{pushViews}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
