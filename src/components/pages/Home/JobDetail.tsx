import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {CmsImage} from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";

import {IJob} from "../../../model/Job";
import Moment from "moment";
import {ClosableHeader} from "../../common/CloseableHeader";
import {Card, Tab, Tabs} from "react-bootstrap";
import {properties} from "../../../services/Environment";

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

            <ClosableHeader close={close} />

            <div>
                <div className="port_services_setions prt_toppadder10 swipe-container">
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
                        <Tabs id={`job-tabs-${job._id}`} defaultActiveKey="about">
                            <Tab eventKey="about" title="About">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog_wrapper">
                                            <div className="blog_data">
                                                <div className="blog_content blog_markdown">
                                                    <ReactMarkdown source={job.longDescription} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="skills" title="Skills">
                                <div className="row">
                                    {job.skills.sort((x,y) => (x.name > y.name) ? 1 : -1 ).map(skill => (
                                        <div className="col-md-6 col-lg-4 col-sm-12">
                                            <Card>
                                                <Card.Body>
                                                    <Card.Text><CmsImage src={skill.image} type={"thumbnail"}/> {skill.name}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>

        </SwipeableDrawer>

    )
}
export {JobDetail};
