import {Reducer} from "redux";
import {ISimulateState} from "../Store";
import {SimulateActions, SimulationActionTypes} from "./Actions";

const isSimulationFinished = () : boolean => {
    let sessionValue = sessionStorage.getItem("simulationFinished")
    return (sessionValue != null && sessionValue === "true");
}

const initialSimulateState: ISimulateState = {
    searchQuery: "",
    simulationFinished: isSimulationFinished()
};

export const simulateReducer: Reducer<ISimulateState, SimulateActions> = (
    state = initialSimulateState,
    action
) => {
    switch (action.type) {
        case SimulationActionTypes.SEARCH: {
            return {
                ...state,
                searchQuery : action.query
            };
        }
        case SimulationActionTypes.FINISHED: {
            sessionStorage.setItem("simulationFinished", "true");
            return {
                ...state,
                simulationFinished: true
            };
        }
    }
    return state;
};

