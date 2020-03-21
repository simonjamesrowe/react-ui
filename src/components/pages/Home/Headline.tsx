import React from "react";
import { IProfile } from "../../../services/ProfileService";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface IHeadlineProps {
  profile: IProfile;
}

const Headline = ({ profile }: IHeadlineProps) => {
  const style: CSSProperties = {
    backgroundImage:
      "url(https://api.simonjamesrowe.com" + profile.backgroundImage.url + ")"
  };
  return (
    <>
      <section
        className="module-header full-height parallax bg-dark bg-dark-30 d-none d-sm-block"
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
      </section>
    </>
  );
};

export { Headline };
