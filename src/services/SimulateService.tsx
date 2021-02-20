import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ISimulateState} from "../state/Store";
import {SimulateActions, SimulationActionTypes} from "../state/simulation/Actions";
import $ from "jquery";

export const simulateSearch: ActionCreator<ThunkAction<Promise<any>, ISimulateState, null, SimulateActions>> = (queryString: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({type: SimulationActionTypes.SEARCH, query: queryString});
        const searchInput = $(".tour-search > div > div > input");
        for (let i = 0; i < queryString.length; i++) {
            await sleep(50);
            searchInput.val(queryString.substr(0, i + 1))
        }
    };
};

export const finishSimulation: ActionCreator<ThunkAction<Promise<any>, ISimulateState, null, SimulateActions>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({type: SimulationActionTypes.FINISHED});
    };
};

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

