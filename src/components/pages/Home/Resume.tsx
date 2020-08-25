import React from "react";

import resumePdf from "../../../assets/SimonRowe.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CmsImage } from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";
import Moment from "moment";
import {IJob} from "../../../model/Job";
import {IApplicationState} from "../../../state/Store";
import {connect} from "react-redux";

interface IProps {
  jobs : IJob[]
}

const Resume = ({jobs}: IProps) => {
  return (
    <>
      <section className="module module-gray" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="m-title c-align">
                <h2>
                  Resumé{" "}
                  <a href={resumePdf} target="_blank">
                    <FontAwesomeIcon size="xs" icon={faDownload} />
                  </a>
                </h2>
                <h6>My education and experience</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                <div className="timeline-top" />
                {jobs.map((job, i) => (
                  <React.Fragment key={i}>
                    <li>
                      <div className="timeline-badge" />
                      <div className="timeline-panel">
                        <div className="timeline-preview">
                          <CmsImage src={job.companyImage} />
                        </div>
                        <div className="timeline-body">
                          <h5 className="timeline-title">{job.title}</h5>
                          <h6 className="timeline-description">
                            {job.company}&nbsp;|&nbsp;
                            {Moment(job.startDate).format("MMM YYYY")}
                            &nbsp;to&nbsp;
                            {job.endDate
                              ? Moment(job.endDate).format("MMM YYYY")
                              : "Present"}
                          </h6>
                          <div>
                            <ReactMarkdown source={job.shortDescription} />
                          </div>
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    jobs: store.jobs.jobs,
  };
};

export default connect(
    mapStateToProps
)(Resume);
