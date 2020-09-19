import React from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import {properties} from "../../../services/Environment";
import {IProfile} from "../../../model/Profile";

interface IHeadlineProps {
  profile: IProfile;
  mobile: boolean;
}

const Headline = ({ profile, mobile }: IHeadlineProps) => {
  const style: CSSProperties = {
    backgroundImage: mobile ?  `url(${properties.apiUrl}${profile.backgroundImage.formats?.small?.url})` :
      `url(${properties.apiUrl}${profile.backgroundImage.formats?.large?.url})`
  };
  return (
    <>
      <section
        className="module-header full-height parallax bg-dark bg-dark-30 d-sm-block"
        id="home"
        style={style}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h1 m-b-15">{profile.name}</h1>
              <h1 className="h5">{profile.title}</h1>
            </div>
          </div>
        </div>
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
      </section>
    </>
  );
};

export { Headline };
