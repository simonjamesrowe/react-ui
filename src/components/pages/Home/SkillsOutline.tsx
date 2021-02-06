import React from "react";
import {ISkillGroup} from "../../../model/Skill";
import {CmsImage} from "../../common/CmsImage";
import ReactGA from 'react-ga';
import {SkillGroup} from "./SkillGroup";
import {RouteComponentProps, useHistory, withRouter} from "react-router-dom";

interface IProps extends RouteComponentProps<{ id?: string }> {
    skillsGroups: ISkillGroup[];
}

const SkillsOutline = ({skillsGroups, match, location}: IProps & RouteComponentProps) => {
    const [skillsDraw, setSkillsDraw] = React.useState<{ [key: string]: boolean }>({});
    const history = useHistory();

    React.useEffect(() => {
        let newSkillsDraw = {};
        skillsGroups.forEach(sk => newSkillsDraw[sk._id] = match.params.id == sk._id);
        setSkillsDraw(newSkillsDraw);
    }, [skillsGroups, location]);


    const expandSkillGroup = (id: string, name: string) => {
        ReactGA.event({
            category: "Skill",
            action: `Skill Group Expanded: ${name}`,
        });
        history.replace(`/skills-groups/${id}`);
        setSkillsDraw({...skillsDraw, [id]: true});
    };


    const collapseSkillGroup = (id: string) => {
        history.replace(`/`);
        setSkillsDraw({...skillsDraw, [id]: false});
    }

    return (
        <>
            {skillsGroups.map(skillGroup => (
                    <SkillGroup open={skillsDraw[skillGroup._id] || false} skillGroup={skillGroup} close={() => {
                        collapseSkillGroup(skillGroup._id)
                    }}/>
                )
            )}
            <div className="port_services_setions prt_toppadder80" id="skills">
                <div className="services_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="port_heading_wrapper text-center prt_bottompadder40">
                                    <div className="port_sub_heading_wrapper">
                                        <h2 className="port_sub_heading">Take a look</h2>
                                    </div>
                                    <h1 className="port_heading">My Skills</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {skillsGroups.map(skillGroup => (
                                <div className="col-lg-4 col-md-6 text-center"
                                     onClick={() => expandSkillGroup(skillGroup._id, skillGroup.name)}>
                                    <div className="port_services_box_wrapper">
                                        <div className="port_services_box">
                                            <CmsImage src={skillGroup.image} type={"thumbnail"}/>
                                            <h2 className="project_heading">{skillGroup.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(SkillsOutline);
