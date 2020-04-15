import React from "react";

import logo from "../../logo.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">
        Icongeek26
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  );
};

export default Header;
