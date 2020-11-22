import React from "react";
import Moment from "moment";
import {CmsImage} from "../../common/CmsImage";
import {IBlog} from "../../../model/Blog";
import { HashLink as Link } from "react-router-hash-link";

interface IBlogPreviewProps {
    blog: IBlog;
}

const BlogPreview = ({blog}: IBlogPreviewProps) => {

    return (
        <>
            <li>
                <div className="rp_thumb">
                    <Link to={`/blogs/${blog.id}#top`}>
                        <CmsImage src={blog.image} type={"thumbnail"}/>
                    </Link>
                </div>
                <div className="rp_data">
                    <Link to={`/blogs/${blog.id}#top`}>
                        <div>{blog.title}</div>
                        <div>{Moment(blog.createdAt).format("DD-MMM-YYYY")}</div>
                    </Link>
                </div>
            </li>
        </>
    );
};

export {BlogPreview};
