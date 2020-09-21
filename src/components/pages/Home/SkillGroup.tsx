import React from "react"
import {getVariant, ISkillGroup} from "../../../model/Skill";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {CmsImage} from "../../common/CmsImage";
import {CmsThumbnail} from "../../common/CmsThumbnail";
import {ProgressBar} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import IconButton from "@material-ui/core/IconButton";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        <SwipeableDrawer anchor={"right"} open={open} onClose={close} onOpen={onOpen}>
            <header className="header header-small header-skills">
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="close"
                        edge="end"
                    >
                    <FontAwesomeIcon
                        className="pointer"
                        size="2x"
                        icon={faTimes}
                        onClick={close}
                    />
                    </IconButton>
                </div>
            </header>
            <div className="container content-skills">
                <div className="row">
                    <div className="col-md-12 headline m-title c-align">
                        <CmsImage src={skillGroup.image} type={"thumbnail"}/>
                        <h2> {skillGroup.name} </h2>
                    </div>
                    <p>{skillGroup.description}</p>
                </div>
                <div className="row">
                    {skillGroup.skills.map((skill, index) =>
                        <div className="col-sm-4 w">
                            <div className="service">
                                <div className="m-title c-align">
                                    <div className="icon">
                                        <CmsThumbnail src={skill.image} size={"medium"}  />
                                    </div>
                                    <h4>{skill.name}</h4>
                                </div>
                                <ProgressBar now={skill.rating * 10} variant={getVariant(skill.rating)} />
                                <div className="text">
                                    <ReactMarkdown
                                        source={skill.description}
                                        linkTarget="_blank"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SwipeableDrawer>

    )
}

export {SkillGroup};
