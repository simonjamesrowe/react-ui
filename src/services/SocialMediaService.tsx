import axios from "axios";
import {properties} from "./Environment";
import {IJob} from "../model/Job";
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {IJobState, ISocialMediaState} from "../state/Store";
import {JobActions, JobActionTypes} from "../state/jobs/Actions";
import {SocialMediaActions, SocialMediaActionTypes} from "../state/socialMedia/Actions";
import {ISocialMedia} from "../model/SocialMedia";

export const getAllSocialMedia: ActionCreator<
    ThunkAction<Promise<any>, ISocialMediaState, null, SocialMediaActions>
    > = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type : SocialMediaActionTypes.LOADING});
    const response = await axios.get<ISocialMedia[]>(
        `${properties.apiUrl}/social-medias`
    );
    dispatch({
      socialMedias: response.data,
      type: SocialMediaActionTypes.GETALL
    });
  };
};

