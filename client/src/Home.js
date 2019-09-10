import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAd } from "@fortawesome/free-solid-svg-icons";

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
    this.props.history.push("/account");
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
        </div>
      );
      categoriesViews.push(view);
    });
    return (
      <div className="container">
        <header>
          <nav>
            <button
              onClick={() => {
                this.toAccount();
              }}
            >
              לחשבון שלי
            </button>

            <ul>
              <li>בית</li>
              <li onClick={this.toAbout}>אודות</li>
              <li onClick={this.toContact}>צור קשר</li>
              <li onClick={this.toJoinForm}>טופס הצטרפות</li>
            </ul>
          </nav>
        </header>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faAd} />
        <div>{categoriesViews}</div>
      </div>
    );
  }
}
