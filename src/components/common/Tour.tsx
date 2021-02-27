import React from "react";
import {Steps} from 'intro.js-react';
import {finishSimulation, simulateSearch, sleep} from "../../services/SimulateService";
import {connect} from "react-redux";
import {mapStep, Step, TourStep} from "../../model/TourStep";
import Axios from "axios";
import {properties} from "../../services/Environment";
import $ from "jquery";
import {IApplicationState} from "../../state/Store";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface ITourProps {
    simulateSearch: typeof simulateSearch,
    finishSimulation: typeof finishSimulation,
    isRunning: boolean
}

const Tour = ({simulateSearch, isRunning, finishSimulation, location}: ITourProps & RouteComponentProps) => {
    const [steps, setSteps] = React.useState<Step[]>([]);

    React.useEffect(() => {
        Axios.get<TourStep[]>(`${properties.apiUrl}/tour-steps`).then(response => {
            setSteps(response.data.sort((x, y) => x.order - y.order).map(mapStep))
        })
    }, []);

    const onAfterChange = async (index: number) => {
        const step = steps[index];
        if (step && step.element === ".tour-search") {
            simulateSearch("spring boot");
            await sleep(1500);
            simulateSearch("spring boot kubernetes");
            await sleep(1500);
            simulateSearch("spring boot kubernetes jenkins");
        } else {
            simulateSearch("");
        }
    }

    const options = {
        "showProgress": true,
        "showStepNumbers": true
    };

    return (
        <>
            {steps.length > 0 && (
                <Steps
                    enabled={isRunning && location.pathname == "/" }
                    initialStep={0}
                    steps={steps}
                    options={options}
                    onAfterChange={onAfterChange}
                    onExit={() => {
                        finishSimulation();
                        $("html, body").animate({scrollTop: "0"}, 500);
                    }}
                />)
            }
        </>
    );


}

const mapDispatchToProps = (dispatch: any) => {
    return {
        simulateSearch: (searchQuery: string) => dispatch(simulateSearch(searchQuery)),
        finishSimulation: () => dispatch(finishSimulation())
    };
};

const mapStateToProps = (store: IApplicationState) => {
        return {
            isRunning: !store.simulate.simulationFinished
        };
    }
;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Tour));
