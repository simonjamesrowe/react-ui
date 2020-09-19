import {ISkillGroup} from "../../model/Skill";
import {ISocialMedia} from "../../model/SocialMedia";


export enum SocialMediaActionTypes {
    GETALL = "SM/GETALL",
    LOADING = "SM/LOADING"
}

export interface ISocialMediaGetAllAction {
    type: SocialMediaActionTypes.GETALL,
    socialMedias: ISocialMedia[]
}

export interface ISocialMediaLoadingAction {
    type: SocialMediaActionTypes.LOADING
}

export type SocialMediaActions = ISocialMediaGetAllAction | ISocialMediaLoadingAction