import {IProfile} from "../../model/Profile";

export enum ProfileActionTypes {
    GET = "PROFILES/GET",
    LOADING = "PROFILES/LOADING",
}

export interface IProfileGetAction {
    type: ProfileActionTypes.GET,
    profile: IProfile
}

export interface IProfileLoadingAction {
    type: ProfileActionTypes.LOADING
}

export type ProfileActions = IProfileGetAction | IProfileLoadingAction