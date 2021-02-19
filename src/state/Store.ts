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
import {ISkillGroup} from "../model/Skill";
import {skillsReducer} from "./skills/Reducer";
import {ISocialMedia} from "../model/SocialMedia";
import {socialMediaReducer} from "./socialMedia/Reducer";
import {simulateReducer} from "./simulation/Reducer";

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

export interface ISkillsState {
    loading: boolean,
    skillsGroups: ISkillGroup[]
}

export interface ISocialMediaState {
    loading: boolean,
    socialMedias: ISocialMedia[]
}

export interface ISimulateState {
    searchQuery: string;
}

export interface IApplicationState {
    jobs: IJobState,
    blogs: IBlogsState,
    tags: ITagsState,
    profile: IProfileState,
    skills: ISkillsState,
    socialMedia: ISocialMediaState,
    simulate: ISimulateState
}

const rootReducer = combineReducers<IApplicationState>({
    jobs: jobsReducer,
    blogs: blogsReducer,
    tags: tagsReducer,
    profile: profileReducer,
    skills: skillsReducer,
    socialMedia: socialMediaReducer,
    simulate: simulateReducer
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}