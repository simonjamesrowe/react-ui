import React from "react"
import {getVariant, ISkillGroup} from "../../../model/Skill";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {CmsImage} from "../../common/CmsImage";
import {ProgressBar} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import {ClosableHeader} from "../../common/CloseableHeader";

interface ISkillGroupProps {
    open: boolean;
    skillGroup: ISkillGroup;
    close();
}

const SkillGroup = ({open, skillGroup, close}: ISkillGroupProps) => {
    // tslint:disable-next-line:no-empty
    const onOpen = () => {
    };

    return (
        <SwipeableDrawer anchor={"right"} open={open} onClose={close} onOpen={onOpen} >

            <ClosableHeader close={close} />

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
                                    <ReactMarkdown source={skillGroup.description}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {skillGroup.skills.map(skill => (
                                <div className="col-lg-6 col-md-6 text-center">
                                    <div className="port_services_box_wrapper">
                                        <div className="port_services_box">
                                            <CmsImage src={skill.image} type={"thumbnail"}/>
                                            <h2 className="project_heading">{skill.name}</h2>
                                            <ProgressBar now={skill.rating * 10} variant={getVariant(skill.rating)}/>
                                            <br/>
                                            <ReactMarkdown
                                                source={skill.description}
                                                linkTarget="_blank"
                                            />
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

export {SkillGroup};
