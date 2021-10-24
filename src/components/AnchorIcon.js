import React from "react";
import PropTypes from "prop-types";

function AnchorIcon(props) {
  const { url, urlImg, urlImgHover } = { ...props };

  function handleMouseEnter(e) {
    e.target.src = process.env.PUBLIC_URL + urlImgHover;
  }
  function handleMouseLeave(e) {
    e.target.src = process.env.PUBLIC_URL + urlImg;
  }
  return (
    <div>
      <a
        href={url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={process.env.PUBLIC_URL + urlImg} alt="error" />
      </a>
    </div>
  );
}

AnchorIcon.propTypes = {
  url: PropTypes.string,
  urlImg: PropTypes.string,
  name: PropTypes.string,
  urlImgHover: PropTypes.string,
};

AnchorIcon.defaultProps = {
  url: "",
  urlImg: "",
  name: "",
  urlImgHover: "",
};

export default AnchorIcon;
