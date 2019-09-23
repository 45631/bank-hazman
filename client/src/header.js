import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toHome = this.toHome.bind(this);
    this.toAccount = this.toAccount.bind(this);
    this.toAbout = this.toAbout.bind(this);
    this.toContact = this.toContact.bind(this);
    this.toJoinForm = this.toJoinForm.bind(this);
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
        {" "}
        <header>
          <img className="logo" src={require("../assets/bank.jpg")} />{" "}
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
            <li className="nav-link " onClick={this.toJoinForm}>
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
        </header>
      </div>
    );
  }
}

export default Header;
