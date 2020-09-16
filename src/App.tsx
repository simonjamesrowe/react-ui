import React from "react";
import "./App.css";
import MobileMenu  from "./components/common/MobileMenu";
import Menu from "./components/common/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import  Home  from "./components/pages/Home/index";
import  Blog  from "./components/pages/Blog/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BlogDetail from "./components/pages/Blog/BlogDetail";
import {IProfile} from "./model/Profile";
import {IApplicationState} from "./state/Store";
import {connect} from "react-redux";
import {getProfile} from "./services/ProfileService";

interface IAppProps {
  loading: boolean,
  profile? : IProfile,
  getProfile: typeof getProfile;
}

const App = (props: IAppProps) => {
  const mobile = useMediaQuery("(max-width:991px)");
  const [loading, setLoading] = React.useState<boolean>(
    !window.location.pathname.startsWith("/blog")
  );


  const onScroll = (event: any) => {
    const isMobile = window.innerWidth <= 991;
    const header = document.getElementById("header") as HTMLElement;
    if (window.location.pathname.startsWith("/blog")) {
      return;
    }
    if (header) {
      let top = true
      if (window.scrollY > 5) {
        top = false;
      }
      
      if (isMobile && top) {
        header.style.display = "none";
      } else if (isMobile && !top) {
        header.style.display = "block";
      } else if (top) {
        header.className = "header header-center header-light";
      } else {
        header.className = "header header-center header-small";
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.addEventListener("scroll", onScroll);
    props.getProfile();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Router>
        {(loading || !props.profile) && (
          <div className="page-loader">
            <div className="cssload-container">
              <div className="cssload-whirlpool">&nbsp;</div>
            </div>
          </div>
        )}
        {mobile && <MobileMenu />}
        {!mobile && <Menu />}
        {props.profile && (
          <Switch>
            <Route path="/" exact={true}>
              <Home profile={props.profile} />
            </Route>
            <Route path="/blog/:id" component={BlogDetail} />
            <Route path="/blog" component={Blog} />

            <Route>
              <Home profile={props.profile} />
            </Route>
          </Switch>
        )}
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <span className="copyright">© 2020 www.simonjamesrowe.com</span>
              </div>
              <div className="col-md-6">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
};


const mapStateToProps = (store: IApplicationState) => {
  return {
    profile: store.profile.profile,
    loading: store.profile.loading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProfile: () => dispatch(getProfile())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


