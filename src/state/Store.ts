import {IJob} from "../model/Job";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {jobsReducer} from "./jobs/Reducer";
import thunk from "redux-thunk";

export interface IJobState {
    loading: boolean,
    jobs: IJob[]
}

export interface IApplicationState {
    jobs: IJobState;
}

const rootReducer = combineReducers<IApplicationState>({
    jobs: jobsReducer
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}