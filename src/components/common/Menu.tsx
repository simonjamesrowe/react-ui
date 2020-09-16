import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Menu: React.SFC<RouteComponentProps> = props => {
  let cssClass = "header header-center header-light";
  if (props.location.pathname.startsWith("/blog")) {
    cssClass = "header header-center header-small"
  }
  return (
    <header id="header" className={cssClass} >
      <div className="container-fluid">
        <div className="inner-navigation collapse">
          <div className="inner-nav onepage-nav" id="navbarContent">
            <ul>
              <li>
                <Link to="/#home">
                  <span className="menu-item-span">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/#profile">
                  <span className="menu-item-span">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/#resume">
                  <span className="menu-item-span">Resume</span>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span className="menu-item-span">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Menu);
