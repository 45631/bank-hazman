import React, { Component } from "react";

export class Home extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/users").then(data =>
      data.json().then(data => console.log(data))
    );
  }

  render() {
    const categoreis = ["garden", "baby", "car", "food", "learn"];
    const categoriesViews = [];
    categoreis.forEach(category => {
      const view = <div className="category">{category}</div>;
      categoriesViews.push(view);
    });
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
      </div>
    );
  }
}
