import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {CmsImage} from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IJob} from "../../../model/Job";
import Moment from "moment";

interface IProps {
    open: boolean;
    job: IJob;

    close();
}

const JobDetail = ({open, job, close}: IProps) => {
    // tslint:disable-next-line:no-empty
    const onOpen = () => {
    };

    const jobTitlePrefix = (title: string) => {
        return title.substring(0, title.lastIndexOf(" "));
    }

    const jobTitleHighlighted = (title: string) => {
        return title.substring(title.lastIndexOf(" ") + 1)
    }

    return (
        <SwipeableDrawer anchor={"right"} open={open} onClose={close} onOpen={onOpen}>
            <nav className="navbar navbar-default fixed-top-drawer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <FontAwesomeIcon
                                className="pointer"
                                size="2x"
                                icon={faTimes}
                                onClick={close}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <div className="port_services_setions prt_toppadder10">
                    <div className="services_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="port_heading_wrapper text-center ">
                                        <div className="port_sub_heading_wrapper">
                                            <CmsImage src={job.companyImage} type={"small"}/>
                                        </div>
                                        <h5>{Moment(job.startDate).format("MMM-YYYY")} to {Moment(job.endDate)?.format("MMM-YYYY") || "Now"}</h5>
                                        <h2 className="port_heading project_heading">{job.title}</h2>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="port_singleblog_wrapper ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog_wrapper">
                                    <div className="blog_data">
                                        <div className="blog_content">
                                            <ReactMarkdown source={job.shortDescription} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </SwipeableDrawer>

    )
}
export {JobDetail};
