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

const BlogVertical = ({blog}: Props) => {
    return (

        <Link to={`/blogs/${blog.id}#top`}>
            <div className="port_blog_mainbox vertical_content">
                <div className="port_blog_imgbox">
                    <div className="home-blog-0 blog_thumb">
                        <CmsImage src={blog.image} type={"small"}/>
                    </div>
                </div>


                <div className="port_blog_contentbox">

                    <div className="tags">
                        <FontAwesomeIcon
                            icon={faTags}/> {blog.tags.map(tag => tag.name).join(", ")}
                    </div>
                    <span className="date_span"> <FontAwesomeIcon
                        icon={faCalendarAlt}/> {Moment(blog.createdAt).format("DD-MMM-YYYY")}
                    </span>

                    <h4 className="blog_heading">
                        <span>{blog.title}</span>
                    </h4>
                    <p>{blog.shortDescription}</p>
                    <div className="blog_readmore">
                        <span className="readmore_btn">
                            Read More <FontAwesomeIcon icon={faUserEdit}/>
                        </span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export {BlogVertical}
