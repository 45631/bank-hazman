import React, { Component } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faPen } from "@fortawesome/free-solid-svg-icons";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", name: "", changeName: false };
    this.saveName = this.saveName.bind(this);
    this.comment = this.comment.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.put = this.put.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.showChangeName = this.showChangeName.bind(this);
  }
  saveName(event) {
    this.setState({ name: event.target.value });
  }
  comment() {
    const name = this.state.value;
    this.setState({});
  }
  onNameChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }
  showChangeName() {
    this.setState({ changeName: true });
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
                <p className="card-text">
                  <small className="text-muted">
                    במידה ואין מענה אנא השאירו הודעה ונחזור אליכם בהקדם
                  </small>
                </p>
              </div>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faMailBulk} />

              <div className="card-body">
                <h5 className="card-title">שלחו לנו פניה בדוא"ל</h5>
                <p className="card-text">
                  כתובת הדוא"ל שלנו: uvilevy@gmail.com
                </p>
                <p className="card-text">
                  <small className="text-muted">מענה בתוך שני ימי עסקים</small>
                </p>
              </div>
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
                <p>
                  תודה<span> {this.state.name}, </span>תיכף חוזרים אליך
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    בלחיצה על "שלח" הנכם נותנים הסכמתכם כי פרטיכם ישמרו במאגרי
                    המידע שלנו
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="problems">
            <h5>בעיות נפוצות:</h5>

            <ul>
              <li onClick={this.showChangeName}>
                מעוניין להחליף את שם המשתמש שלי
              </li>
              {this.state.changeName && <p>תיכף נעזור לך</p>}
              <li>מעוניין למחוק את החשבון שלי</li>
              <form>
                <label>
                  שם משתמש
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onNameChange}
                  />
                </label>
                <button onClick={this.deleteUser}>
                  אין לי זמן להתנדב יותר. מחק אותי!
                </button>
              </form>
              <li>מעוניין למשוך שעות אך אין לי יתרה בחשבון</li>
              <li>לא מצליח להכנס לחשבון שלי</li>
              <li>קבעתי עם מישהו שיוציא את הכלב שלי לטיול והוא לא הגיע</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
