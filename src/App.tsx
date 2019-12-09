import React from "react";
import "./App.css";
import { MobileMenu } from "./components/pages/MobileMenu";
import { Menu } from "./components/pages/Menu";
import { Headline } from "./components/pages/Headline";
import { Profile } from "./components/pages/Profile";
import { Resume } from "./components/pages/Resume";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App = () => {
  const mobile = useMediaQuery("(max-width:991px)");
  const [loading, setLoading] = React.useState<boolean>(true);

  const onScroll = (event: any) => {
    const header = document.getElementById("header") as HTMLElement;
    if (header) {
      let darkMenu = true;
      if ((window.scrollY as number) > 5) {
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
    setTimeout(() => setLoading(false), 2000);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [window.scrollY]);

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
