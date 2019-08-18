import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.toAccount = this.toAccount.bind(this);
  }

  onCategoryClick(category) {
    console.log("hi " + category);
    this.props.history.push("/categoryInfo?category=" + category);
  }

  toAccount() {
    this.props.history.push("/account");
  }

  render() {
    const categoreis = ["garden", "baby", "car", "food", "learn"];
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
              <li>אודות</li>
              <li>צור קשר</li>
              <li>טופס הצטרפות</li>
            </ul>
          </nav>
        </header>

        <div>{categoriesViews}</div>
      </div>
    );
  }
}
