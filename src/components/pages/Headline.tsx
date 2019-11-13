import React from "react";

const Headline = () => {
  return (
    <>
      <section
        className="module-header full-height parallax bg-dark bg-dark-30 d-none d-sm-block"
        data-jarallax-video="https://www.youtube.com/watch?v=vNrZTCmtAos"
        id="home"
      >
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
