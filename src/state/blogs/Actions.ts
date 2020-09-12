import {IBlog} from "../../model/Blog";


export enum BlogActionTypes {
    GETALL = "BLOGS/GETALL",
    LOADING = "BLOGS/LOADING",
    GETONE = "BLOGS/GETONE"
}

export interface IBlogsGetAllAction {
    type: BlogActionTypes.GETALL,
    blogs: IBlog[]
}

export interface IBlogsLoadingAction {
    type: BlogActionTypes.LOADING
}

export interface IBlogsGetOneAction {
    type: BlogActionTypes.GETONE,
    blogId: string
}

export type BlogActions = IBlogsGetAllAction | IBlogsGetOneAction | IBlogsLoadingAction