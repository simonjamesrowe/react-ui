import React from "react";
import "./App.css";
import { Header } from "./components/pages/Header";
import { Headline } from "./components/pages/Headline";
import { Profile } from "./components/pages/Profile";
import { Resume } from "./components/pages/Resume";

const App = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="cssload-container">
            <div className="cssload-whirlpool">&nbsp;</div>
          </div>
        </div>
      )}
      <Header />
      <div className="wrapper">
        <Headline />
        <Profile />
        <Resume />
      </div>
    </>
  );
};

export default App;
