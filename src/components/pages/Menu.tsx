import React from "react";

const Menu = () => {
  return (
    <header id="header" className="header header-center header-light">
      <div className="container-fluid">
        <div className="inner-navigation collapse">
          <div className="inner-nav onepage-nav" id="navbarContent">
            <ul>
              <li>
                <a href="#home">
                  <span className="menu-item-span">Home</span>
                </a>
              </li>
              <li>
                <a href="#profile">
                  <span className="menu-item-span">Profile</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <span className="menu-item-span">Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Menu };
