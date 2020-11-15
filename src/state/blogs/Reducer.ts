import {Reducer} from "redux";
import {IBlogsState} from "../Store";
import {BlogActions, BlogActionTypes} from "./Actions";
import {IBlog} from "../../model/Blog";
import ReactGA from 'react-ga';

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
            const viewedBlog = state.blogs.find((blog: IBlog) => blog.id === action.blogId)
            if (viewedBlog) {
                ReactGA.event({
                    category: "Blog",
                    action: `Blog Post Viewed: ${viewedBlog.title}`
                });
            }
            return {
                ...state,
                currentBlog: viewedBlog
            };
        }
    }
    return state;
};