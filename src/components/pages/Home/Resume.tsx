import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {CmsImage} from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";
import Moment from "moment";
import {IJob} from "../../../model/Job";
import {IApplicationState} from "../../../state/Store";
import {connect} from "react-redux";
import {IProfile} from "../../../model/Profile";
import {properties} from "../../../services/Environment";
import {JobDate} from "./JobDate";
import {JobBlock} from "./JobBlock";

interface IProps {
    jobs: IJob[];
}

const Resume = ({jobs}: IProps) => {



    const experienceBoxStyle = (index :number) : string => {
        if ([0,1,4,5,8,9,12,13].find(left => left == index) !== undefined) {
           return "exprince_box ex_leftsidebox";
        }
        return "exprince_box ex_rightsidebox";
    }



    return (<>
            <div className="port_experience_setions prt_toppadder80">
                <div className="experience_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="port_heading_wrapper text-center prt_bottompadder40">
                                    <div className="port_sub_heading_wrapper">
                                        <h2 className="port_sub_heading">Involvement</h2>
                                    </div>
                                    <h1 className="port_heading">My Experience</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {jobs.map( (job,i)  => (
                                <div className="col-lg-6 col-md-12">
                                    <div className={experienceBoxStyle(i)}>
                                        <div className="row">
                                            <JobBlock job={job} index={i} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export {Resume}
