import React from "react";
import Moment from "moment";
import {CmsImage} from "../../common/CmsImage";
import {IBlog} from "../../../model/Blog";
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

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
                                    <Link to={`/blogs/${blogs[0].id}#top`}>
                                        <div className="port_blog_mainbox vertical_content">
                                            <div className="port_blog_imgbox">
                                                <div className="home-blog-0 blog_thumb">
                                                    <CmsImage src={blogs[0].image} type={"small"}/>
                                                </div>
                                            </div>


                                            <div className="port_blog_contentbox">
                                            <span
                                                className="date_span">{Moment(blogs[0].createdAt).format("DD-MMM-YYYY")}</span>
                                                <h4 className="blog_heading">
                                                    <a href="blog.html">{blogs[0].title}</a>
                                                </h4>
                                                <p>{blogs[0].shortDescription}</p>
                                                <div className="blog_readmore">
                                                    <a href="blog.html" className="readmore_btn">Read
                                                        More <FontAwesomeIcon
                                                            icon={faUserEdit}/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-lg-8 col-md-12 ">
                                    <Link to={`/blogs/${blogs[1].id}#top`}>
                                        <div className="port_blog_mainbox left_content">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 order-md-1 order-2">
                                                    <div className="port_blog_contentbox">
                                                    <span
                                                        className="date_span">{Moment(blogs[1].createdAt).format("DD-MMM-YYYY")}</span>
                                                        <h4 className="blog_heading">
                                                            <a href="blog.html">{blogs[1].title}</a>
                                                        </h4>
                                                        <p>{blogs[1].shortDescription}</p>
                                                        <div className="blog_readmore">
                                                            <div className="blog_readmore">
                                                                <a href="blog.html" className="readmore_btn">Read
                                                                    More <FontAwesomeIcon icon={faUserEdit}/></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 order-1 align-self-center">
                                                    <div className="port_blog_imgbox blog_thumb">
                                                        <CmsImage src={blogs[1].image} type={"small"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={`/blogs/${blogs[2].id}#top`}>
                                        <div className="port_blog_mainbox right_content">
                                            <div className="row no-gutters">
                                                <div className="col-md-6 align-self-center">

                                                    <div className="port_blog_imgbox blog_thumb">
                                                        <CmsImage src={blogs[2].image} type={"small"}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="port_blog_contentbox">
                                                    <span
                                                        className="date_span">{Moment(blogs[2].createdAt).format("DD-MMM-YYYY")}</span>
                                                        <h4 className="blog_heading">
                                                            <a href="blog.html">{blogs[2].title}</a>
                                                        </h4>
                                                        <p>{blogs[2].shortDescription}</p>
                                                        <div className="blog_readmore">
                                                            <a href="blog.html" className="readmore_btn">Read
                                                                More <FontAwesomeIcon icon={faUserEdit}/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
