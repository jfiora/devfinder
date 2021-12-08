import React, { useState, useEffect } from "react";
import sunIcon from "../../images/icon-sun.svg";
import moonIcon from "../../images/icon-moon.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <h1 className="custom__title">devfinder</h1>
      </div>
      <div className="toggle-btn">
        <button className="toggle-btn__btn" onClick={() => setShow(!show)}>
          {show ? <span>dark</span> : <span>light</span>}
          {show ? (
            <img src={moonIcon} alt="moon icon" />
          ) : (
            <img src={sunIcon} alt="sun icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
