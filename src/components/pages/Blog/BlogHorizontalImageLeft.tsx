import React from "react";
import {IBlog} from "../../../model/Blog";
import {HashLink as Link} from "react-router-hash-link";
import {CmsImage} from "../../common/CmsImage";
import Moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faTags, faUserEdit} from "@fortawesome/free-solid-svg-icons";

interface Props {
    blog: IBlog;
}

const BlogHorizontalImageLeft = ({blog}: Props) => {
    return (
        <Link to={`/blogs/${blog.id}#top`}>
            <div className="port_blog_mainbox right_content">
                <div className="row no-gutters">
                    <div className="col-md-6 align-self-center">

                        <div className="port_blog_imgbox blog_thumb">
                            <CmsImage src={blog.image} type={"small"}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="port_blog_contentbox">
                            <div className="tags">
                                <FontAwesomeIcon icon={faTags}/> {blog.tags.map(tag => tag.name).join(", ")}
                            </div>
                            <span
                                className="date_span"><FontAwesomeIcon
                                icon={faCalendarAlt}/> {Moment(blog.createdAt).format("DD-MMM-YYYY")}</span>


                            <h4 className="blog_heading">
                                <a href="blog.html">{blog.title}</a>
                            </h4>
                            <p>{blog.shortDescription}</p>
                            <div className="blog_readmore">
                                <a href="blog.html" className="readmore_btn">Read
                                    More <FontAwesomeIcon icon={faUserEdit}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export {BlogHorizontalImageLeft}

