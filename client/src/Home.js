import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  onCategoryClick(category) {
    console.log("hi " + category);
    this.setState({ category: category });
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
    const myCategory = this.state.category;
    return (
      <div className="container">
        <header>
          <nav>
            <a href="#">
              <button>לחשבון שלי</button>
            </a>
            <ul>
              <li>בית</li>
              <li>אודות</li>
              <li>צור קשר</li>
              <li>טופס הצטרפות</li>
            </ul>
          </nav>
        </header>

        <div>{categoriesViews}</div>
        <p>{myCategory}</p>
      </div>
    );
  }
}
