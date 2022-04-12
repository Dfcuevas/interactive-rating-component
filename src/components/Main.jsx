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
    </main>
  );
}

export default Main;
