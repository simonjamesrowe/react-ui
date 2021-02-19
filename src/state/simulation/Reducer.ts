import {Reducer} from "redux";
import {ISimulateState} from "../Store";
import {SimulateActions, SimulationActionTypes} from "./Actions";

const initialSimulateState: ISimulateState = {
    searchQuery: ""
};

export const simulateReducer: Reducer<ISimulateState, SimulateActions> = (
    state = initialSimulateState,
    action
) => {
    switch (action.type) {
        case SimulationActionTypes.SEARCH: {
            return {
                searchQuery : action.query
            };
        }
    }
    return state;
};