import {Reducer} from "redux";
import {IProfileState, ITagsState} from "../Store";
import {ProfileActions, ProfileActionTypes} from "./Actions";

const initialProfileState: IProfileState = {
    loading: false
};

export const profileReducer: Reducer<IProfileState, ProfileActions> = (
    state = initialProfileState,
    action
) => {
    switch (action.type) {
        case ProfileActionTypes.GET: {
            return {
                profile: action.profile,
                loading: false
            };
        }
    }
    return state;
};