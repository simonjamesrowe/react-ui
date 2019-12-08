import React from "react";
import "./App.css";
import { MobileMenu } from "./components/pages/MobileMenu";
import { Menu } from "./components/pages/Menu";
import { Headline } from "./components/pages/Headline";
import { Profile } from "./components/pages/Profile";
import { Resume } from "./components/pages/Resume";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  const mobile = useMediaQuery("(max-width:991px)");

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="cssload-container">
            <div className="cssload-whirlpool">&nbsp;</div>
          </div>
        </div>
      )}
      {mobile && <MobileMenu />}
      {!mobile && <Menu />}
      <div className="wrapper">
        {!mobile && <Headline />}
        <Profile />
        <Resume />
      </div>
    </>
  );
};

export default App;
