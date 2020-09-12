import axios from "axios";
import {properties} from "./Environment";
import {IProfile} from "../model/Profile";
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {IProfileState} from "../state/Store";
import {ProfileActions, ProfileActionTypes} from "../state/profile/Actions";

export const getProfile: ActionCreator<
    ThunkAction<Promise<any>, IProfileState, null, ProfileActions>
    > = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type : ProfileActionTypes.LOADING});
    const response = await axios.get<IProfile[]>(
        `${properties.apiUrl}/profiles`
    );
    dispatch({
      profile: response.data[0],
      type: ProfileActionTypes.GET
    });
  };
};
