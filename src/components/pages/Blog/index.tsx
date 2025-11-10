import React from "react";
import {IBlog} from "../../../model/Blog";
import {connect} from "react-redux";
import {IApplicationState} from "../../../state/Store";
import {getAllBlogs} from "../../../services/BlogService";
import {BlogSearch} from "./BlogSearch";
import {BlogVertical} from "./BlogVertical";
import {BlogHorizontalImageRight} from "./BlogHorizontalImageRight";
import {BlogHorizontalImageLeft} from "./BlogHorizontalImageLeft";

interface IBlogProps {
    blogs: IBlog[],
    getAllBlogs: typeof getAllBlogs;
}

const Blog = (props: IBlogProps) => {

    React.useEffect(() => {
        props.getAllBlogs();
    }, []);

    return (
        <>
            <div className="port_sec_warapper" id="top">
                <div className="port_blog_setions prt_toppadder20 prt_bottompadder20">
                    <div className="blog_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="port_heading_wrapper text-center">
                                        <div className="port_sub_heading_wrapper">
                                            <h2 className="port_sub_heading">My Blog</h2>
                                        </div>
                                        <h1 className="port_heading">Recent News</h1>
                                        <div className="port_singleblog_wrapper">
                                            <BlogSearch/>
                                        </div>
                                    </div>
                                </div>
                                {props.blogs.map((blog, i) => (
                                    <React.Fragment key={`${blog.id}-${i}`}>
                                        {(i % 6 == 0 || i % 6 == 5) && (
                                            <div className="col-md-12 col-lg-4">
                                                <BlogVertical blog={blog}/>
                                            </div>
                                        )}
                                        {(i % 6 == 1) && (
                                            <div className="col-lg-8 col-md-12 ">
                                                <BlogHorizontalImageRight blog={blog}/>
                                                {props.blogs.length - 1 > i && (
                                                    <BlogHorizontalImageLeft blog={props.blogs[i + 1]}/>
                                                )}
                                            </div>
                                        )}
                                        {i % 6 == 3 && (
                                            <div className="col-lg-8 col-md-12 ">
                                                <BlogHorizontalImageLeft blog={blog}/>
                                                {props.blogs.length - 1 > i && (
                                                    <BlogHorizontalImageRight blog={props.blogs[i + 1]}/>
                                                )}
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store: IApplicationState) => {
    return {
        blogs: store.blogs.blogs
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllBlogs: () => dispatch(getAllBlogs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);


