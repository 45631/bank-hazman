import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAd,
  faWater,
  faBaby,
  faTv
} from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  onCategoryClick(category) {
    console.log("hi " + category);
    this.props.history.push("/categoryInfo?category=" + category);
  }

  render() {
    const categoreis = [
      { id: "baby", name: "שמרטפות", icon: faBaby },
      { id: "tv", name: "עזרה טכנולוגית", icon: faTv }
      // "tv",
      // "pen",
      // "motorcycle",
      // "cap",
      // "dog",
      // "car",
      // "hamburger",
      // "tools"
    ];
    const categoriesViews = [];
    categoreis.forEach(category => {
      const view = (
        <div
          key={category.id}
          className="category"
          onClick={() => {
            this.onCategoryClick(category.id);
          }}
        >
          {category.name}
          <FontAwesomeIcon icon={category.icon} />
        </div>
      );
      categoriesViews.push(view);
    });
    return (
      <div>
        <Header history={this.props.history} />
        <div className="container">
          <h3> תחומים בבנק הזמן</h3>
          <div>{categoriesViews}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
