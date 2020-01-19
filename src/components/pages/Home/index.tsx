import React from "react";
import { Headline } from "./Headline";
import { Profile } from "./Profile";
import { Resume } from "./Resume";

interface IHomeProps {
  mobile: boolean;
}

const Home = (homeProps: IHomeProps) => {
  return (
    <>
      {!homeProps.mobile && <Headline />}
      <Profile />
      <Resume />
    </>
  );
};

export { Home };
