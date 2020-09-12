import React from "react";
import {Headline} from "./Headline";
import {Profile} from "./Profile";
import Resume from "./Resume";
import {IProfile} from "../../../model/Profile";
import {getAllJobs} from "../../../services/JobService";
import {connect} from "react-redux";

interface IHomeProps {
    profile: IProfile;
    getAllJobs: typeof getAllJobs;
}

const Home = ( props: IHomeProps) => {
    React.useEffect(() => {
        props.getAllJobs();
    }, []);

    return (
        <>
            <Headline profile={props.profile}/>
            <Profile profile={props.profile}/>
            <Resume />
        </>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllJobs: () => dispatch(getAllJobs())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Home);
