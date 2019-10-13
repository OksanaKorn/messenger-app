import React from "react";
import PropTypes from "prop-types";
import "../../styles/header.scss";

const Header = ({ user }) => {
  function handleOpenMenu() {
    let aside = document.getElementById("aside-wrapper");
    aside.classList.toggle("mob-visible");
  }

  return (
    <div className="flex-row alignCenter header">
      <div className="menu-icon" onClick={handleOpenMenu}>
        <img src={require("../../images/menu-icon.png")} alt="open menu icon" />
      </div>
      <div className="user-data-ctn">
        <div className="user-name">{user.name}</div>
        <div>
          <img
            className="App-image user-logo"
            src={user.avatarUrl}
            alt={user.name}
          />
        </div>
      </div>
    </div>
  );
};

Header.propeTypes = {
  user: PropTypes.object.isRequired
};

export default Header;
