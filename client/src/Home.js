import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

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
  }

  onCategoryClick(category) {
    console.log("hi " + category);
    this.props.history.push("/categoryInfo?category=" + category);
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
        <Header></Header>{" "}
        <div className="container">
          {" "}
          <h3> תחומים בבנק הזמן</h3>
          <div>{categoriesViews}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
