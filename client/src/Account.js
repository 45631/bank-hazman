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
          <ul>
            <li>{action.date}</li>
            <li>{action.category}</li>
            <li>{action.pull}</li>
            <li>{action.push}</li>
          </ul>
        );
        dataViews.push(view);
      });
    }

    return <div>{dataViews}</div>;
  }
}
