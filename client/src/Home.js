import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAd,
  faWater,
  faBaby
} from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.toAccount = this.toAccount.bind(this);
    this.toAbout = this.toAbout.bind(this);
    this.toContact = this.toContact.bind(this);
    this.toJoinForm = this.toJoinForm.bind(this);
  }

  onCategoryClick(category) {
    console.log("hi " + category);
    this.props.history.push("/categoryInfo?category=" + category);
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
    const categoreis = [
      "baby",
      "tv",
      "pen",
      "motorcycle",
      "cap",
      "dog",
      "car",
      "hamburger",
      "tools"
    ];
    const categoriesViews = [];
    categoreis.forEach(category => {
      const view = (
        <div
          key={category}
          className="category"
          onClick={() => {
            this.onCategoryClick(category);
          }}
        >
          {category}
          <FontAwesomeIcon icon={faAd} />
        </div>
      );
      categoriesViews.push(view);
    });
    return (
      <div>
        <img className="logo" src={require("../assets/bank.jpg")} />{" "}
        <header>
          <ul className="nav nav-tabs">
            <li className="nav-link active">בית</li>
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
            class="btn  btn-secondary btn-lg btn-block"
            onClick={() => {
              this.toAccount();
            }}
          >
            לחשבון שלי
          </button>
          <h3 className="title">בנק הזמן</h3>
        </header>
        <div className="container">
          <div>{categoriesViews}</div>
        </div>
      </div>
    );
  }
}
