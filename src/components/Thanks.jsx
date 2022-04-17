import React from "react";
import "./thanks.css";
import THX from "../images/illustration-thank-you.svg";

function Thanks(props) {
  return (
    <section
      className="thanks__container"
      style={props.mostrar ? { display: "none" } : {}}
    >
      <div className="container__image">
        <img src={THX} alt="Thanks" />
      </div>
      <span className="span__rating">You selected {props.rating} out of 5</span>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}

export default Thanks;
