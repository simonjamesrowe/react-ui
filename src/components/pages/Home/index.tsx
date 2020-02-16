import React from "react";
import { Headline } from "./Headline";
import { Profile } from "./Profile";
import { Resume } from "./Resume";
import { IProfile } from "../../../services/ProfileService";

interface IHomeProps {
  mobile: boolean;
  profile: IProfile;
}

const Home = ({ mobile, profile }: IHomeProps) => {
  return (
    <>
      {!mobile && <Headline profile={profile} />}
      <Profile />
      <Resume />
    </>
  );
};

export { Home };
