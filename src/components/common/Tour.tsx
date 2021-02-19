import React from "react";
import {Steps} from 'intro.js-react';
import {simulateSearch, sleep} from "../../services/SimulateService";
import {connect} from "react-redux";
import {mapStep, Step, TourStep} from "../../model/TourStep";
import Axios from "axios";
import {properties} from "../../services/Environment";
import $ from "jquery";

interface ITourProps {
    simulateSearch: typeof simulateSearch
}

const Tour = ({simulateSearch}: ITourProps) => {
    const [steps, setSteps] = React.useState<Step[]>([]);
    const [enabled, setEnabled] = React.useState<boolean>(true);

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
    return (
        <>
            {steps.length > 0 && (
                <Steps
                    enabled={enabled}
                    initialStep={0}
                    steps={steps}
                    onAfterChange={onAfterChange}
                    onExit={() => {
                        setEnabled(false)
                        $("html, body").animate({ scrollTop: "0" },  500);
                    }}
                />)
            }
        </>
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
