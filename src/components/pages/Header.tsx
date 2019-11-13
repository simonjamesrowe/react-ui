import React from "react";

const Header = () => {
  return (
    <header className="header header-center">
      <div className="container-fluid">
        <div className="nav-toggle">
          <a href="#" data-toggle="collapse" data-target=".inner-navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
        </div>

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

export { Header };
