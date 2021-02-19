import React from "react";
import {Steps} from 'intro.js-react';
import {simulateSearch} from "../../services/SimulateService";
import {connect} from "react-redux";

interface ITourProps {
    simulateSearch: typeof simulateSearch
}

const Tour = ({simulateSearch} : ITourProps) => {
    const steps = [
        {
            element: '.tour-search',
            title: 'Site Search',
            position: 'bottom-left-aligned',
            intro: (<>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </>
            )
        },
        {
            title: 'Download CV',
            element: ".tour-download-cv",
            position: 'bottom-left-aligned',
            intro: (<div>Download my CV</div>),

        },
        {
            title: 'About Me',
            element: ".tour-about",
            intro: (<div>About Me</div>),
            position: 'bottom-left-aligned',
        },
        {
            title: "Experience",
            element: ".tour-experience",

            intro: (<div>My Experience</div>)
        }
    ]

    const onAfterChange = (index: number) => {

        const step = steps[index];
        if (step && step.title === "Site Search") {
            alert("about to run a simulation");
            simulateSearch("spring boot");
            setTimeout(() => {
                simulateSearch("kubernetes")
                setTimeout(() => {
                    simulateSearch("jenkins")
                }, 1500)
            }, 1500);
        }

    }
    return (
        <Steps
            enabled={true}
            initialStep={0}
            steps={steps}
            onAfterChange={onAfterChange}
            onExit={() => {
            }}
        />
    );


}

const mapDispatchToProps = (dispatch: any) => {
    return {
        simulateSearch: (searchQuery: string) => dispatch(simulateSearch(searchQuery)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Tour);
