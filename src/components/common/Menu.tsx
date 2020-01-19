import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const Menu: React.SFC<RouteComponentProps> = props => {
  let headerClass = "header header-center header-mobile";
  if (props.location.pathname === "/blog") {
    headerClass = "header header-center header-small";
  }
  return (
    <header id="header" className={headerClass}>
      <div className="container-fluid">
        <div className="inner-navigation collapse">
          <div className="inner-nav onepage-nav" id="navbarContent">
            <ul>
              <li>
                <a href="/#home">
                  <span className="menu-item-span">Home</span>
                </a>
              </li>
              <li>
                <a href="/#profile">
                  <span className="menu-item-span">Profile</span>
                </a>
              </li>
              <li>
                <a href="/#resume">
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

export default withRouter(Menu);
