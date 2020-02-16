import React from "react";
import "./App.css";
import { MobileMenu } from "./components/common/MobileMenu";
import Menu from "./components/common/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Home } from "./components/pages/Home/index";
import { Blog } from "./components/pages/Blog/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IProfile, ProfileService } from "./services/ProfileService";

const profileService = new ProfileService();

const App = () => {
  const mobile = useMediaQuery("(max-width:991px)");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [profile, setProfile] = React.useState<IProfile>();

  const onScroll = (event: any) => {
    const header = document.getElementById("header") as HTMLElement;
    if (header) {
      let darkMenu = true;
      if (window.scrollY > 5) {
        darkMenu = false;
      }

      if (
        darkMenu &&
        header.className !== "header header-center header-light"
      ) {
        header.className = "header header-center header-light";
      }

      if (
        !darkMenu &&
        header.className !== "header header-center header-small"
      ) {
        header.className = "header header-center header-small";
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
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
              <Home mobile={mobile} profile={profile} />
            </Route>
            <Route path="/blog" component={Blog} />
            <Route>
              <Home mobile={mobile} profile={profile} />
            </Route>
          </Switch>
        )}
      </Router>
    </>
  );
};

export default App;
