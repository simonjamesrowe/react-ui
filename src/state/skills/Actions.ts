import {ISkillGroup} from "../../model/Skill";


export enum SkillsActionTypes {
    GETALL = "SKILLS/GETALL",
    LOADING = "SKILLS/LOADING"
}

export interface ISkillsGetAllAction {
    type: SkillsActionTypes.GETALL,
    skillsGroups: ISkillGroup[]
}

export interface ISkillsLoadingAction {
    type: SkillsActionTypes.LOADING
}

export type SkillsActions = ISkillsGetAllAction | ISkillsLoadingAction