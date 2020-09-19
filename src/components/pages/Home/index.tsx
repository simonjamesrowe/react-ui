import React from "react";
import {Headline} from "./Headline";
import {Profile} from "./Profile";
import Resume from "./Resume";
import {IProfile} from "../../../model/Profile";
import {getAllJobs} from "../../../services/JobService";
import {connect} from "react-redux";
import {ISkillGroup} from "../../../model/Skill";

import {getAllSkills} from "../../../services/SkillsService";
import {IApplicationState} from "../../../state/Store";
import {ISocialMedia} from "../../../model/SocialMedia";
import {getAllSocialMedia} from "../../../services/SocialMediaService";

interface IHomeProps {
    mobile: boolean;
    profile: IProfile;
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
            <Profile profile={props.profile} skillsGroups={props.skillsGroups} socialMedias={props.socialMedias}/>
            <Resume />
        </>
    );
};
const mapStateToProps = (store: IApplicationState) => {
    return {
        skillsGroups: store.skills.skillsGroups,
        socialMedias: store.socialMedia.socialMedias
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
