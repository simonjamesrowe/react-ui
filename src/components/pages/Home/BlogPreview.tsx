import React from "react";
import {IBlog} from "../../../model/Blog";
import {HashLink as Link} from "react-router-hash-link";
import {BlogVertical} from "../Blog/BlogVertical";
import {BlogHorizontalImageRight} from "../Blog/BlogHorizontalImageRight";
import {BlogHorizontalImageLeft} from "../Blog/BlogHorizontalImageLeft";

interface IProps {
    blogs: IBlog[];
}

const BlogPreview = ({blogs}: IProps) => {
    return (
        <>
            {blogs && blogs.length >= 3 && (
                <div className="port_blog_setions prt_toppadder80 prt_bottompadder50">
                    <div className="blog_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="port_heading_wrapper text-center prt_bottompadder40">
                                        <Link to="/blogs">
                                            <div className="port_sub_heading_wrapper">
                                                <h2 className="port_sub_heading">My Blog</h2>
                                            </div>
                                            <h1 className="port_heading">Recent News</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <BlogVertical blog={blogs[0]} />
                                </div>

                                <div className="col-lg-8 col-md-12 ">
                                    <BlogHorizontalImageRight blog={blogs[1]} />
                                    <BlogHorizontalImageLeft blog={blogs[2]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export {BlogPreview};
