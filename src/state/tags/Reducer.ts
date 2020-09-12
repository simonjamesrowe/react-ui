import {Reducer} from "redux";
import {ITagsState} from "../Store";
import {TagActions, TagActionTypes} from "./Actions";

const initialTagsState: ITagsState = {
    loading: false,
    tags: []
};

export const tagsReducer: Reducer<ITagsState, TagActions> = (
    state = initialTagsState,
    action
) => {
    switch (action.type) {
        case TagActionTypes.GETALL: {
            return {
                tags: action.tags,
                loading: false
            };
        }
    }
    return state;
};