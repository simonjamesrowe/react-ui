import axios from "axios";
import {properties} from "./Environment";

import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {IBlogsState} from "../state/Store";
import {IBlog} from "../model/Blog";
import {BlogActions, BlogActionTypes} from "../state/blogs/Actions";

export const getAllBlogs: ActionCreator<
    ThunkAction<Promise<any>, IBlogsState, null, BlogActions>
    > = (limit?: number) => {
  return async (dispatch: Dispatch) => {
    let queryString =
        `${properties.apiUrl}/blogs?published=true&_sort=createdAt:desc`;
    if (limit) {
      queryString += `&_limit=${limit}`;
    }
    const response = await axios.get<IBlog[]>(queryString);
    dispatch({
      blogs: response.data,
      type: BlogActionTypes.GETALL
    });
  };
};

export const getOneBlog: ActionCreator<
    ThunkAction<Promise<any>, IBlogsState, null, BlogActions>
    > = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      blogId: id,
      type: BlogActionTypes.GETONE
    });
  };
};


