import {Reducer} from "redux";
import {IBlogsState} from "../Store";
import {BlogActions, BlogActionTypes} from "./Actions";
import {IBlog} from "../../model/Blog";

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
                currentBlog: state.blogs.find((blog: IBlog) => blog.id === action.blogId)
            };
        }
    }
    return state;
};