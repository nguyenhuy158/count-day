import React from "react";
import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string,
  day: PropTypes.string,
};

Card.defaultProps = {
  name: "",
  day: "",
};

function Card({ name, day }) {
  return (
    <section className="area">
      <p>{name}</p>
      <p className="day-start">{day}</p>
      <p className="count-day"></p>
    </section>
  );
}

export default Card;
