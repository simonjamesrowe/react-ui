import {IJob} from "../../../model/Job";
import Moment from "moment";
import React from "react";

interface IProps {
    job : IJob
}

const JobDate = ({job} : IProps) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 padding-0">
            <div className="ex_leftside">
                <h1>{Moment(job.startDate).format("YYYY")}</h1>
                <h4>{Moment(job.startDate).format("MMM")} to {job.endDate ? Moment(job.endDate)?.format("MMM") : ""}</h4>
                <h1>{job.endDate ? Moment(job.endDate)?.format("YYYY") : "Now"}</h1>
            </div>
        </div>
    )
}

export {JobDate}
