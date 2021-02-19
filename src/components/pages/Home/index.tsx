import React from "react";
import Headline from "./Headline";
import {Profile} from "./Profile";
import Resume from "./Resume";
import {IProfile} from "../../../model/Profile";
import {getAllJobs} from "../../../services/JobService";
import {connect} from "react-redux";
import {ISkillGroup} from "../../../model/Skill";
import {getAllSkills} from "../../../services/SkillsService";
import {IApplicationState} from "../../../state/Store";
import {ISocialMedia} from "../../../model/SocialMedia";
import {IJob} from "../../../model/Job";
import SkillsOutline from "./SkillsOutline";
import {IBlog} from "../../../model/Blog";
import {getAllBlogs} from "../../../services/BlogService";
import {BlogPreview} from "./BlogPreview";
import {Contact} from "./Contact";
import {useHistory} from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tour from "../../common/Tour";


interface IHomeProps {
    mobile: boolean;
    profile: IProfile;
    jobs: IJob[];
    blogs: IBlog[];
    skillsGroups: ISkillGroup[];
    socialMedias: ISocialMedia[];
    getAllJobs: typeof getAllJobs;
    getAllSkills: typeof getAllSkills;
    getAllBlogs: typeof getAllBlogs;
}

const Home = (props: IHomeProps) => {
    const history = useHistory();
    const mobile = useMediaQuery("(max-width:991px)");

    React.useEffect(() => {
        props.getAllJobs();
        props.getAllSkills();
        props.getAllBlogs();

    }, []);


    return (
        <>
            <Tour />
            <Headline profile={props.profile} mobile={props.mobile}/>
            <div className="port_sec_warapper">
                <Profile profile={props.profile} socialMedias={props.socialMedias}/>
                <Resume jobs={props.jobs}/>
                <SkillsOutline skillsGroups={props.skillsGroups} jobs={props.jobs}/>
                <BlogPreview blogs={props.blogs}/>
                <Contact profile={props.profile}/>
            </div>
        </>
    );
};
const mapStateToProps = (store: IApplicationState) => {
    return {
        skillsGroups: store.skills.skillsGroups,
        jobs: store.jobs.jobs,
        blogs: store.blogs.blogs
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllJobs: () => dispatch(getAllJobs()),
        getAllSkills: () => dispatch(getAllSkills()),
        getAllBlogs: () => dispatch(getAllBlogs())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
