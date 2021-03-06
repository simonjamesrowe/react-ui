import React, {Ref, RefObject} from "react"
import {getVariant, ISkill, ISkillGroup} from "../../../model/Skill";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {CmsImage} from "../../common/CmsImage";
import {Card, ProgressBar} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import {ClosableHeader} from "../../common/CloseableHeader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import $ from 'jquery'
import {IJob} from "../../../model/Job";
import {properties} from "../../../services/Environment";
import Moment from "moment";

interface ISkillGroupProps extends RouteComponentProps {
    open: boolean;
    skillGroup: ISkillGroup;
    jobs: IJob[];
    close();
}

const SkillGroup = ({open, skillGroup, close, location, jobs}: ISkillGroupProps & RouteComponentProps) => {

    const getJobsWithSkill = (skill: ISkill) : IJob[] => {
        const jobsWithSkill: IJob[] = [];
        jobs.forEach(job => {
            if (job.skills.find(jobSkill => jobSkill.id === skill.id)) {
                jobsWithSkill.push(job);
            }
        })
        return jobsWithSkill;
    }

    const scrollToSkill = () => {
        if (open && location.hash && skillGroup.skills.find(skill => skill.id == location.hash.substr(1))) {
            const selectedSkillId = location.hash.substr(1);
            setTimeout(() => {
                const skillId = window.location.hash.substr(1);
                const skillGroup = window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1);
                const offsetTop = $(`#${skillId}`).offset().top - 55;
                $(`#${skillGroup} div.MuiDrawer-paper`).animate({scrollTop: offsetTop});
            }, 300)
        }
    }

    React.useEffect(() => {
        scrollToSkill()
    }, [open, location.hash]);

    const onOpen = () => {
       scrollToSkill()
    };

    return (
        <SwipeableDrawer anchor={"right"} open={open} onClose={close} onOpen={onOpen} id={skillGroup._id}>

            <ClosableHeader close={close}/>

            <div className="port_services_setions prt_toppadder20 swipe-container">
                <div className="services_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="port_heading_wrapper text-center prt_bottompadder40 port_services_box_header">
                                    <div className="port_sub_heading_wrapper">
                                        <CmsImage src={skillGroup.image} type={"thumbnail"}/>
                                    </div>
                                    <h1 className="port_heading">{skillGroup.name}</h1>
                                    <br/>
                                    <ReactMarkdown source={skillGroup.description!!}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {skillGroup.skills.map(skill => (
                                <div className="col-lg-6 col-md-6 text-center">
                                    <div className="port_services_box_wrapper">
                                        <div className="port_services_box" id={skill.id}>
                                            <CmsImage src={skill.image} type={"thumbnail"}/>
                                            <h2 className="project_heading">{skill.name}</h2>
                                            <ProgressBar now={skill.rating * 10} variant={getVariant(skill.rating)}/>
                                            <br/>
                                            <ReactMarkdown
                                                source={skill.description!!}
                                                linkTarget="_blank" />
                                            <hr />
                                            {getJobsWithSkill(skill).map(job => (
                                                <Card title={`${job.company} - ${Moment(job.startDate).format("MMM-YYYY")} to ${job.endDate ? Moment(job.endDate)?.format("MMM-YYYY") : "Now"}`}>
                                                    <Card.Body>
                                                        <Card.Text><CmsImage src={job.companyImage} type={"thumbnail"}/> {job.title}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </SwipeableDrawer>

    )
}

export default withRouter(SkillGroup);
