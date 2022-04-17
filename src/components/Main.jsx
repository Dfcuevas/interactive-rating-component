import React from "react";
import "./main.css";
import Star from "../images/icon-star.svg";

function Main({ hacerClick, mostrar, cambiarDisplay, rating }) {
  const active = {
    backgroundColor: "hsl(216, 12%, 54%)",
    color: "white",
  };
  return (
    <main className="container" style={!mostrar ? { display: "none" } : {}}>
      <img className="star__icon" src={Star} alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <section className="rating-container" onClick={hacerClick}>
        <div style={rating === "1" ? active : {}}>1</div>
        <div style={rating === "2" ? active : {}}>2</div>
        <div style={rating === "3" ? active : {}}>3</div>
        <div style={rating === "4" ? active : {}}>4</div>
        <div style={rating === "5" ? active : {}}>5</div>
      </section>
      <button type="submit" onClick={cambiarDisplay}>
        SUBMIT
      </button>
    </main>
  );
}

export default Main;
