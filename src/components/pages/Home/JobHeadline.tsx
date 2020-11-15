import {IJob} from "../../../model/Job";
import Moment from "moment";
import React from "react";

interface IProps {
    job : IJob
}

const JobHeadline = ({job} : IProps) => {

    const jobTitlePrefix = (title : string) => {
        return title.substring(0, title.lastIndexOf(" "));
    }

    const jobTitleHighlighted = (title: string) => {
        return title.substring(title.lastIndexOf(" ") + 1)
    }

    return (
        <div className="col-lg-8 col-md-8 col-sm-8 col-12 w-100">
            <div className="ex_rightside">
                <h4>{jobTitlePrefix(job.title)} <span data-hover="Designer"
                                                      className="data_hover c-pink">{jobTitleHighlighted(job.title)}</span>
                </h4>
                <span className="c-pink">{job.company}</span>
                <p className="ex_details">{job.shortDescription}</p>
                <a className="ex_btn">Read More</a>
            </div>
        </div>
    )
}

export {JobHeadline}