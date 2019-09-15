import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk, faPen } from "@fortawesome/free-solid-svg-icons";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", name: "" };
    this.saveName = this.saveName.bind(this);
    this.comment = this.comment.bind(this);
  }
  saveName(event) {
    this.setState({ value: event.target.value });
  }
  comment() {
    const name = this.state.value;
    this.setState({ name });
  }

  render() {
    return (
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
              <p className="card-text">כתובת הדוא"ל שלנו: uvilevy@gmail.com</p>
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
                    value={this.state.value}
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
      </div>
    );
  }
}
