import React, { Component } from "react";
import Star from "./svg/Star";

import "./Form.css";

class Form extends Component {
  state = {
    stars: 0,
    text: "",
    email: "",
    textSize: 0
  };

  onTextChange = e => {
    this.setState({ text: e.target.value, textSize: e.target.length });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onFormSubimit = e => {
    e.preventDefault();
    if (this.state.stars < 1) {
      alert("Please, select number of stars");
      return;
    }
    alert("Thank you for your feedback");
    console.log(this.state);
  };

  onClickStar = count => {
    this.setState({ stars: count });
  };

  getStarStyle = () => {
    return "star-yellow";
  };

  render() {
    const maxLenght = 400;
    const starNumber = [1, 2, 3, 4, 5];

    return (
      <div className="form-container">
        <form onSubmit={this.onFormSubimit}>
          <div className="form-header">
            <h3 className="form-star-title">Service</h3>
            <div className="star-box">
              {starNumber.map((star, index) => (
                <Star
                  classProp={this.state.stars > index ? "star-yellow" : null}
                  onClickStar={this.onClickStar}
                  count={star}
                />
              ))}
            </div>
          </div>
          <label htmlFor="form-textarea" className="form-label">
            Ihr Kommentar zur Bewertung
          </label>
          <textarea
            onChange={this.onTextChange}
            value={this.state.text}
            id="form-textarea"
            className="form-textarea"
            maxLength="400"
            required
          />
          <p className="form-remaining-char">
            Noch {maxLenght - this.state.text.length} Zeichen möglich
          </p>
          <label htmlFor="form-email" className="form-email-label">
            E-Mail Address
          </label>
          <div className="email-container">
            <div className="email-box">
              <input
                onChange={this.onEmailChange}
                id="form-email"
                type="email"
                className="form-email"
                required
              />
            </div>
            <div className="email-warning">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              neque temporibus. Provident doloribus, delectus molestias eaque
              qui tempora, aliquid quibusdam dolor debitis cumque iure
              cupiditate accusantium necessitatibus. Est, nemo et?
            </div>
          </div>
          <input type="submit" className="form-btn" value="Jetzt bewerten" />
        </form>
      </div>
    );
  }
}
export default Form;
