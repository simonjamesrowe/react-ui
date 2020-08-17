import React from "react";
import { Headline } from "./Headline";
import { Profile } from "./Profile";
import { Resume } from "./Resume";
import {IProfile} from "../../../model/Profile";

interface IHomeProps {
  profile: IProfile;
}

const Home = ({profile }: IHomeProps) => {
  return (
    <>
      <Headline profile={profile} />
      <Profile profile={profile} />
      <Resume />
    </>
  );
};

export { Home };
