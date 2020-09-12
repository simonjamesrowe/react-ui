import axios from "axios";
import {properties} from "./Environment";
import {ITag} from "../model/Tag";
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ITagsState} from "../state/Store";
import {TagActions, TagActionTypes} from "../state/tags/Actions";

export const getAllTags: ActionCreator<
    ThunkAction<Promise<any>, ITagsState, null, TagActions>
    > = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type : TagActionTypes.LOADING});
    const response = await axios.get<ITag[]>(
        `${properties.apiUrl}/tags?_sort=name:asc`
    );
    dispatch({
      tags: response.data,
      type: TagActionTypes.GETALL
    });
  };
};

