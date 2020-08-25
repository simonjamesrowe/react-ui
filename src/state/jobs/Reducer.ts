import { Reducer } from "redux";
import {IJobState} from "../Store";
import {JobActions, JobActionTypes} from "./Actions";

const initialProductState: IJobState = {
    loading: false,
    jobs: []
};

export const jobsReducer: Reducer<IJobState, JobActions> = (
    state = initialProductState,
    action
) => {
    switch (action.type) {
        case JobActionTypes.GETALL: {
            return {
                jobs : action.jobs,
                loading: false
            };
        }
        case JobActionTypes.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
    }
    return state;
};