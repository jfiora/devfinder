import React from "react";

const StatItem = ({ img, value }) => {
  if (value) {
    return (
      <div className="user__link" style={{ color: "white" }}>
        <img src={img} alt="location icon" style={{ color: "white" }} />
        <span>{value}</span>
      </div>
    );
  } else {
    return (
      <div className="user__link" style={{ color: "grey" }}>
        <img src={img} alt="location icon" />
        <span>Not available</span>
      </div>
    );
  }
};

export default StatItem;
