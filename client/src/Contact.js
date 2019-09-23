import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faPen } from "@fortawesome/free-solid-svg-icons";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "",
      NoMoney: false,
      NoDog: false,
      NoBalance: false,
      NoSuccess: false,
      user: false
    };
    this.saveName = this.saveName.bind(this);
    this.comment = this.comment.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.put = this.put.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.showNoSuccess = this.showNoSuccess.bind(this);
    this.showNoBalance = this.showNoBalance.bind(this);
    this.showNoDog = this.showNoDog.bind(this);
    this.showNoMoney = this.showNoMoney.bind(this);
  }
  saveName(event) {
    this.setState({ name: event.target.value });
  }
  comment() {
    const name = this.state.name;
    this.setState({ user: true });
  }
  onNameChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }
  showNoSuccess() {
    this.setState({ NoSuccess: true });
  }
  showNoBalance() {
    this.setState({ NoBalance: true });
  }
  showNoDog() {
    this.setState({ NoDog: true });
  }
  showNoMoney() {
    this.setState({ NoMoney: true });
  }
  put() {
    console.log("put");
    const data = {
      oldName: this.state.oldName,
      newName: this.state.newName
    };
    fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("put!");
    });
  }
  deleteUser() {
    const data = {
      name: this.state.name
    };
    fetch("http://localhost:3000/users", {
      method: "DELETE"
    }).then(() => {
      console.log("delete!");
    });
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <div className="container">
          <h3>כל הדרכים ליצור איתנו קשר</h3>
          <div className="card-deck">
            <div className="card">
              <FontAwesomeIcon icon={faPhone} />
              <div className="card-body">
                <h5 className="card-title">התקשרו אלינו</h5>
                <p className="card-text">
                  נייד: 0527145631 <br />
                  נייח: 02-5712946 <br />
                  מרכזייה: 02-3333333
                </p>
              </div>
              <small className="text-muted">
                במידה ואין מענה אנא השאירו הודעה ונחזור אליכם בהקדם
              </small>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faMailBulk} />
              <div className="card-body">
                <h5 className="card-title">שלחו לנו פניה בדוא"ל</h5>
                <p className="card-text">
                  כתובת הדוא"ל שלנו: uvilevy@gmail.com
                </p>
              </div>
              <small className="text-muted">מענה בתוך שני ימי עסקים</small>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faPen} />
              <div className="card-body">
                <h5 className="card-title">השאירו פרטים</h5>
                <p className="card-text">
                  תוכלו להשאיר פרטים כאן ונציגינו יחזרו אליכם בהקדם
                </p>
                <form>
                  <label>
                    שם
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.saveName}
                    />
                  </label>
                  <label>
                    טלפון
                    <input type="text" />
                  </label>
                  <label>
                    כמה מילים על סיבת הפנייה:
                    <textarea></textarea>
                  </label>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.comment}
                  >
                    שלח
                  </button>
                </form>
                {this.state.user && (
                  <p>
                    תודה<span> {this.state.name}, </span>תיכף חוזרים אליך
                  </p>
                )}
              </div>{" "}
              <small className="text-muted">
                בלחיצה על "שלח" הנכם נותנים הסכמתכם כי פרטיכם ישמרו במאגרי המידע
                שלנו
              </small>
            </div>
          </div>
          <div className="problems">
            <h5>בעיות נפוצות:</h5>

            <ul>
              <li onClick={this.showNoSuccess}>לא מצליח להכנס לחשבון שלי</li>
              {this.state.NoSuccess && (
                <p className="answer">
                  פנה למתנדבים שלנו בתמיכה הטכנית, בטל 02-5712946
                </p>
              )}
              <li onClick={this.showNoBalance}>
                מעוניין למשוך שעות אך אין לי יתרה בחשבון
              </li>
              {this.state.NoBalance && (
                <p className="answer">
                  יתרת חובה אסורה באיסור חמור בבנק הזמן. הפקד שעות ורק לאחר מכן
                  תוכל לחזור ולמשוך
                </p>
              )}
              <li onClick={this.showNoDog}>
                קבעתי עם מישהו שיוציא את הכלב שלי לטיול והוא לא הגיע
              </li>
              {this.state.NoDog && (
                <p className="answer">
                  פנה אלינו בדוא"ל או בטלפון, משתמש שאינו אחראי ייחסם ויושלך
                  מהקהילה בבושת פנים.
                </p>
              )}
              <li onClick={this.showNoMoney}>
                יש החזר כספי על הוצאות כמו דלק / חומרי גלם לבישול וכו'?
              </li>
              {this.state.NoMoney && (
                <p className="answer">
                  ממש לא. כל הפעילות הנה התנדבותית לחלוטין, השימוש במטבעות מכל
                  סוג שהוא לבד מ"מטבעות זמן" אסור.
                </p>
              )}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
