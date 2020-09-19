import { Reducer } from "redux";
import { ISocialMediaState} from "../Store";
import { SocialMediaActions, SocialMediaActionTypes} from "./Actions";


const initialSocialMediaState: ISocialMediaState = {
    loading: false,
    socialMedias: []
};

export const socialMediaReducer: Reducer<ISocialMediaState, SocialMediaActions> = (
    state = initialSocialMediaState,
    action
) => {
    switch (action.type) {
        case SocialMediaActionTypes.GETALL: {
            return {
                socialMedias : action.socialMedias,
                loading: false
            };
        }
    }
    return state;
};