import React from "react";
import background from "../../../assets/videos/background.mp4";

const Headline = () => {
  return (
    <>
      <section
        className="module-header full-height parallax bg-dark bg-dark-30 d-none d-sm-block"
        id="home"
      >
        <video
          loop={true}
          id="video-background"
          src={background}
          autoPlay={true}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="h1 m-b-15">Simon Rowe</h1>
              <h1 className="h5">Software Engineer</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Headline };
