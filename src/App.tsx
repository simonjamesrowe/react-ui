import React from "react";
import MobileMenu from "./components/common/MobileMenu";
import Menu from "./components/common/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "./components/pages/Home/index";
import Blog from "./components/pages/Blog/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import loader from "./assets/images/loader.gif"
import BlogDetail from "./components/pages/Blog/BlogDetail";
import {IProfile} from "./model/Profile";
import {IApplicationState} from "./state/Store";
import {connect} from "react-redux";
import Analytics from 'react-router-ga';
import {getProfile} from "./services/ProfileService";
import ReactGA from 'react-ga';
import {hotjar} from 'react-hotjar';
import {properties} from "./services/Environment";
import SideBar from "./components/common/Sidebar";

interface IAppProps {
    loading: boolean,
    profile?: IProfile,
    getProfile: typeof getProfile;
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

        let top = true
        if (window.scrollY > 5) {
            top = false;
        }


    };

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 500);
        window.addEventListener("scroll", onScroll);
        props.getProfile();
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

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
                    <SideBar/>
                    {props.profile && (
                        <Switch>
                            <Route path="/" exact={true}>
                                <Home profile={props.profile} mobile={mobile}/>
                            </Route>
                            <Route path="/blog/:id" component={BlogDetail}/>
                            <Route path="/blog" component={Blog}/>

                            <Route>
                                <Home profile={props.profile} mobile={mobile}/>
                            </Route>
                        </Switch>
                    )}
                </Analytics>
            </Router>
        </>
    );
};


const mapStateToProps = (store: IApplicationState) => {
    return {
        profile: store.profile.profile,
        loading: store.profile.loading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: () => dispatch(getProfile())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


