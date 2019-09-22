import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/users").then(data =>
      data.json().then(data => this.setState({ count: data.length }))
    );
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <div className="container">
          <h2>מהו בנק הזמן?</h2>
          <div className="aboutCon">
            <div className="aboutTxt">
              <h6>
                "כל יום הוא חשבון בנק, וזמן הוא המטבע. אף אחד לא עשיר, אף אחד לא
                עני - לכל אחד מאיתנו יש 24 שעות." (-כריסטופר רייס)
              </h6>

              <p className="p1">
                בנק הזמן מתייחד במספר דברים:
                <br /> 1. אי אפשר לשדוד אותו
                <br /> 2. קל מאד להתעשר
                <br /> 3. אין ירושות / זכיות בלוטו / אשראי ברגע / משכנתאות - כל
                הון הוא הון עצמי!
                <br />
                בבנק הזמן שותפים משתמשים רבים. לכל משתמש חשבון עו"ש, ממש כבכל
                בנק אחר, אך בבנק הזמן המטבע העובר לסוחר הנו - זמן, במטבעות של
                שעות.
              </p>
              <br />
              <p className="p2">
                כל משתמש נדרש לציין בעת פתיחת חשבונו באילו תחומים הנו מעוניין /
                מוכשר / יכול לתרום לקהילה.
                <br />
                כל תרומת שעה נרשמת בחשבון העו"ש כהפקדה של שעה. במקביל יכול
                המשתמש להיעזר בשירותיו של משתמש אחר וכך "למשוך" שעות מן היתרה
                שצבר.
                <br /> בבנק הזמן מתנהל סחר-מכר ענף ועירני של שירותים וסיוע, איש
                איש בתחומו הוא. כל אחד יכול למצוא את מקומו עפ"י החוזקות והחולשות
                האישיים שלו.
                <br />
                <b>
                  {" "}
                  לתשומת לב - מכירת שירותים בתמורה לתשלום בכסף "אמיתי" אסורה
                  בבנק הזמן!
                </b>
              </p>
            </div>
            <div className="aboutImgDiv">
              {" "}
              <img
                src={require("../assets/aboutClock.jpg")}
                className="aboutImg"
              />
            </div>
          </div>
          <p>דף חשבון לדוגמא:</p>
          <img />
          <hr />
          <h6> כיום בבנק הזמן - </h6>
          <p>
            <span> {this.state.count} </span>
            משתמשים ב <span> 9 </span>
            תחומים
          </p>{" "}
        </div>
        <Footer />
      </div>
    );
  }
}
