import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "./components/pages/Home/index";
import Blog from "./components/pages/Blog/index";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import loader from "./assets/images/loader.gif"
import {IProfile} from "./model/Profile";
import {IApplicationState} from "./state/Store";
import {connect} from "react-redux";
import Analytics from 'react-router-ga';
import {getProfile} from "./services/ProfileService";
import ReactGA from 'react-ga';
import {hotjar} from 'react-hotjar';
import {properties} from "./services/Environment";
import SideBar from "./components/common/Sidebar";
import {ISocialMedia} from "./model/SocialMedia";
import {getAllSocialMedia} from "./services/SocialMediaService";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import $ from 'jquery'

interface IAppProps {
    loading: boolean,
    profile?: IProfile,
    socialMedias: ISocialMedia[],
    getProfile: typeof getProfile;
    getAllSocialMedia: typeof getAllSocialMedia;
}

const App = (props: IAppProps) => {
    ReactGA.initialize(properties.gaTrackingToken);
    hotjar.initialize(Number(properties.hotJarTrackingToken), 6);

    const mobile = useMediaQuery("(max-width:991px)");
    const [loading, setLoading] = React.useState<boolean>(
        !window.location.pathname.startsWith("/blog")
    );


    const onScroll = (event: any) => {
        if (window.location.pathname.startsWith("/blog")) {
            return;
        }
        const scrolled = window.scrollY;
        if (scrolled > 600) {$('.bottom_top').addClass("active");}
        if (scrolled < 600) {$('.bottom_top').removeClass("active");}

    };

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 500);
        window.addEventListener("scroll", onScroll);
        props.getProfile();
        props.getAllSocialMedia();
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const scrollToTop = (event: any) => {
        $("html, body").animate({ scrollTop: "0" },  500);
    }

    return (
        <>
            <Router>
                <Analytics id={properties.gaTrackingToken}>
                    {(loading || !props.profile) && (
                        <div className="preloader">
                            <div className="status"><img src={loader} id="preloader_image"
                                                         alt="loader"/>
                            </div>
                        </div>
                    )}

                    {props.profile && (
                        <>
                            <SideBar socialMedias={props.socialMedias} profile={props.profile}/>
                            <Switch>
                                <Route path="/" exact={true}>
                                    <Home profile={props.profile} mobile={mobile} socialMedias={props.socialMedias}/>
                                </Route>
                                <Route path="/blogs/:id" component={Blog}/>
                                <Route path="/blogs" component={Blog}/>

                                <Route>
                                    <Home profile={props.profile} mobile={mobile} socialMedias={props.socialMedias}/>
                                </Route>
                            </Switch>
                        </>
                    )}

                    <div className="bottom_top" onClick={scrollToTop} >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>

                </Analytics>
            </Router>
        </>
    );
};


const mapStateToProps = (store: IApplicationState) => {
    return {
        profile: store.profile.profile,
        loading: store.profile.loading,
        socialMedias: store.socialMedia.socialMedias
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: () => dispatch(getProfile()),
        getAllSocialMedia: () => dispatch(getAllSocialMedia())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


