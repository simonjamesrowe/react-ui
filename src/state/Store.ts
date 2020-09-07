import {IJob} from "../model/Job";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {jobsReducer} from "./jobs/Reducer";
import thunk from "redux-thunk";
import {IBlog} from "../model/Blog";
import {blogsReducer} from "./blogs/Reducer";

export interface IJobState {
    loading: boolean,
    jobs: IJob[]
}

export interface IBlogsState {
    loading: boolean,
    blogs: IBlog[],
    currentBlog? : IBlog
}

export interface IApplicationState {
    jobs: IJobState,
    blogs: IBlogsState
}

const rootReducer = combineReducers<IApplicationState>({
    jobs: jobsReducer,
    blogs: blogsReducer
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}