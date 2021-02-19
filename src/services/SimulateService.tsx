import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ISimulateState} from "../state/Store";
import {SimulateActions, SimulationActionTypes} from "../state/simulation/Actions";

export const simulateSearch: ActionCreator<
    ThunkAction<Promise<any>, ISimulateState, null, SimulateActions>
    > = (queryString: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({type : SimulationActionTypes.SEARCH, query: queryString});
  };
};

