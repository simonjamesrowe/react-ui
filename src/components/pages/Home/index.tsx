import React from "react";
import {Headline} from "./Headline";
import {Profile} from "./Profile";
import {Resume} from "./Resume";
import {IProfile} from "../../../model/Profile";
import {getAllJobs} from "../../../services/JobService";
import {connect} from "react-redux";
import {ISkillGroup} from "../../../model/Skill";

import {getAllSkills} from "../../../services/SkillsService";
import {IApplicationState} from "../../../state/Store";
import {ISocialMedia} from "../../../model/SocialMedia";
import {getAllSocialMedia} from "../../../services/SocialMediaService";
import {IJob} from "../../../model/Job";
import {SkillsOutline} from "./SkillsOutline";

interface IHomeProps {
    mobile: boolean;
    profile: IProfile;
    jobs: IJob[];
    skillsGroups: ISkillGroup[];
    socialMedias: ISocialMedia[];
    getAllJobs: typeof getAllJobs;
    getAllSkills: typeof getAllSkills;
    getAllSocialMedia: typeof getAllSocialMedia;
}

const Home = ( props: IHomeProps) => {
    React.useEffect(() => {
        props.getAllJobs();
        props.getAllSkills();
        props.getAllSocialMedia();
    }, []);

    return (
        <>
            <Headline profile={props.profile} mobile={props.mobile}/>
            <div className="port_sec_warapper">
                <Profile profile={props.profile} socialMedias={props.socialMedias}/>
                <Resume jobs={props.jobs} />
                <SkillsOutline skillsGroups={props.skillsGroups} />
            </div>
            {/**
            <Profile profile={props.profile} skillsGroups={props.skillsGroups} socialMedias={props.socialMedias}/>
            <Resume />**/}
        </>
    );
};
const mapStateToProps = (store: IApplicationState) => {
    return {
        skillsGroups: store.skills.skillsGroups,
        socialMedias: store.socialMedia.socialMedias,
        jobs: store.jobs.jobs
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllJobs: () => dispatch(getAllJobs()),
        getAllSkills: () => dispatch(getAllSkills()),
        getAllSocialMedia: () => dispatch(getAllSocialMedia())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
