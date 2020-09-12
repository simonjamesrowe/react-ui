import {ITag} from "../../model/Tag";

export enum TagActionTypes {
    GETALL = "TAGS/GETALL",
    LOADING = "TAGS/LOADING",
}

export interface ITagsGetAllAction {
    type: TagActionTypes.GETALL,
    tags: ITag[]
}

export interface ITagsLoadingAction {
    type: TagActionTypes.LOADING
}

export type TagActions = ITagsGetAllAction | ITagsLoadingAction