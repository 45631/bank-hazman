import React, { Component } from "react";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:3000/account").then(data =>
      data.json().then(data => this.setState({ data: data }))
    );
  }

  render() {
    const data = this.state.data;
    console.log(data);
    const dataViews = [];
    if (data) {
      data.forEach(action => {
        const view = (
          <tr>
            <th scope="row">{action.date}</th>
            <td>{action.category}</td>
            <td>{action.to}</td>
            <td>{action.push}</td>
          </tr>
        );
        dataViews.push(view);
      });
    }

    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">תאריך</th>
              <th scope="col">בתחום</th>
              <th scope="col">משתמש שותף</th>
            </tr>
          </thead>
          <tbody>{dataViews}</tbody>
        </table>
      </div>
    );
  }
}
