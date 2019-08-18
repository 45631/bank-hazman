import React, { Component } from "react";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:3000/users").then(data =>
      data.json().then(data => this.setState({ users: data }))
    );
  }

  render() {
    const users = this.state.users;
    console.log(users);
    const usersViews = [];
    if (users) {
      users.forEach(user => {
        const view = <li>{user.name}</li>;
        usersViews.push(view);
      });
    }

    return <div>{usersViews}</div>;
  }
}
