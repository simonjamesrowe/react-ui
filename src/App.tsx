import React from "react";
import "./App.css";
import MobileMenu  from "./components/common/MobileMenu";
import Menu from "./components/common/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import  Home  from "./components/pages/Home/index";
import { Blog } from "./components/pages/Blog/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  ProfileService } from "./services/ProfileService";
import BlogDetail from "./components/pages/Blog/BlogDetail";
import {IProfile} from "./model/Profile";

const profileService = new ProfileService();

const App = () => {
  const mobile = useMediaQuery("(max-width:991px)");
  const [loading, setLoading] = React.useState<boolean>(
    !window.location.pathname.startsWith("/blog")
  );
  const [profile, setProfile] = React.useState<IProfile>();

  const onScroll = (event: any) => {
    const header = document.getElementById("header") as HTMLElement;
    if (window.location.pathname.startsWith("/blog")) {
      return;
    }
    if (header) {
      let showMenu = false
      if (window.scrollY > 5) {
        showMenu = true;
      }

      if (showMenu) {
        header.style.display = "block"
      } else {
        header.style.display = "none"
      }

    }
  };

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.addEventListener("scroll", onScroll);
    profileService.getProfile().then(data => setProfile(data));
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Router>
        {(loading || !profile) && (
          <div className="page-loader">
            <div className="cssload-container">
              <div className="cssload-whirlpool">&nbsp;</div>
            </div>
          </div>
        )}
        {mobile && <MobileMenu />}
        {!mobile && <Menu />}
        {profile && (
          <Switch>
            <Route path="/" exact={true}>
              <Home profile={profile} />
            </Route>
            <Route path="/blog/:id" component={BlogDetail} />
            <Route path="/blog" component={Blog} />

            <Route>
              <Home profile={profile} />
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

export default App;
