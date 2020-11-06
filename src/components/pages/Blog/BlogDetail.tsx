import React from "react";
import ReactMarkdown from "react-markdown";
import {CmsImage} from "../../common/CmsImage";
import {properties} from "../../../services/Environment";
import {IBlog} from "../../../model/Blog";
import {faCalendarAlt, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Moment from "moment";

interface IProps {
    blog: IBlog
}

const BlogDetail = ({blog} : IProps ) => {

    const imageUrl = (url: string) => {
        return `${properties.apiUrl}${url}`;
    };

    return (
        <>
            <div className="blog_wrapper">
                <div className="blog_data">
                    <div className="blog_thumb">
                        <CmsImage src={blog.image} type={"medium"} />
                    </div>
                    <div className="blog_content">
                        <div className="blog_postinfo pb-3">
                            <ul>
                                <li><FontAwesomeIcon icon={faCalendarAlt} /> {Moment(blog.createdAt).format("DD-MMM-YYYY")}
                                </li>
                                <li> <FontAwesomeIcon icon={faUserEdit} /> by Simon Rowe</li>
                            </ul>
                        </div>
                        <h4 className="blog_heading">{blog.title}</h4>
                        <ReactMarkdown
                            source={blog.content}
                            transformImageUri={imageUrl}
                            linkTarget="_blank"
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export {BlogDetail}


