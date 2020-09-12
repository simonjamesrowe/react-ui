import {IJob} from "../model/Job";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {jobsReducer} from "./jobs/Reducer";
import thunk from "redux-thunk";
import {IBlog} from "../model/Blog";
import {blogsReducer} from "./blogs/Reducer";
import {ITag} from "../model/Tag";
import {tagsReducer} from "./tags/Reducer";
import {IProfile} from "../model/Profile";
import {profileReducer} from "./profile/Reducer";

export interface IJobState {
    loading: boolean,
    jobs: IJob[]
}

export interface IBlogsState {
    loading: boolean,
    blogs: IBlog[],
    currentBlog? : IBlog
}

export interface ITagsState {
    loading: boolean,
    tags: ITag[]
}

export interface IProfileState {
    loading: boolean,
    profile?: IProfile
}

export interface IApplicationState {
    jobs: IJobState,
    blogs: IBlogsState,
    tags: ITagsState,
    profile: IProfileState
}



const rootReducer = combineReducers<IApplicationState>({
    jobs: jobsReducer,
    blogs: blogsReducer,
    tags: tagsReducer,
    profile: profileReducer
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}