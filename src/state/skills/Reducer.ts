import { Reducer } from "redux";
import { ISkillsState} from "../Store";
import {SkillsActions, SkillsActionTypes} from "./Actions";


const initialSkillsState: ISkillsState = {
    loading: false,
    skillsGroups: []
};

export const skillsReducer: Reducer<ISkillsState, SkillsActions> = (
    state = initialSkillsState,
    action
) => {
    switch (action.type) {
        case SkillsActionTypes.GETALL: {
            return {
                skillsGroups : action.skillsGroups,
                loading: false
            };
        }
    }
    return state;
};