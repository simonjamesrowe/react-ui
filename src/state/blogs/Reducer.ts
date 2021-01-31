import {Reducer} from "redux";
import {IBlogsState} from "../Store";
import {BlogActions, BlogActionTypes} from "./Actions";

const initialBlogsState: IBlogsState = {
    loading: false,
    blogs: []
};

export const blogsReducer: Reducer<IBlogsState, BlogActions> = (
    state = initialBlogsState,
    action
) => {
    switch (action.type) {
        case BlogActionTypes.GETALL: {
            return {
                blogs: action.blogs,
                currentBlog: action.blogs[0],
                loading: false
            };
        }
        case BlogActionTypes.LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        case BlogActionTypes.GETONE: {
            return {
                ...state,
                currentBlog: action.blog
            };
        }
    }
    return state;
};