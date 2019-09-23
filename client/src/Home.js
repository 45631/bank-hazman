import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faTv,
  faPen,
  faMotorcycle,
  faDog,
  faCar,
  faHamburger,
  faTools,
  faChalkboardTeacher
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
      { id: "tv", name: "עזרה טכנולוגית", icon: faTv },
      { id: "pen", name: "כתיבה", icon: faPen },
      { id: "motorcycle", name: "שליחויות", icon: faMotorcycle },
      {
        id: "ChalkboardTeacher",
        name: "שיעורי עזר ",
        icon: faChalkboardTeacher
      },
      { id: "dog", name: "דוגיסיטר ", icon: faDog },
      { id: "car", name: "הסעות ", icon: faCar },
      { id: "hamburger", name: "בישול ", icon: faHamburger },
      { id: "tools", name: "עבודות תחזוקה ", icon: faTools }
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
          <br />
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
