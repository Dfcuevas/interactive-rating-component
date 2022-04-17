import React from "react";
import "./main.css";
import Star from "../images/icon-star.svg";

function Main() {
  return (
    <main className="container">
      <img className="star__icon" src={Star} alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-container">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <button type="submit">SUBMIT</button>
    </main>
  );
}

export default Main;
