import {IJob} from "../model/Job";
import {configureStore} from "@reduxjs/toolkit";
import {jobsReducer} from "./jobs/Reducer";
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
    simulationFinished: boolean;
}

export default function createAppStore() {
    return configureStore({
        reducer: {
            jobs: jobsReducer,
            blogs: blogsReducer,
            tags: tagsReducer,
            profile: profileReducer,
            skills: skillsReducer,
            socialMedia: socialMediaReducer,
            simulate: simulateReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: true,
                serializableCheck: false,
            }),
    });
}

const store = createAppStore();
export type IApplicationState = ReturnType<typeof store.getState>;