import React, { Component } from "react";

export class CategoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const queryParams = this.props.history.location.search;
    const categoryName = queryParams.split("=")[1];
    console.log(categoryName);
    const Categories = [
      {
        name: "car",
        text: ""
      }
    ];
    return (
      <div>
        <p>hi my CategoryInfo</p>
      </div>
    );
  }
}
