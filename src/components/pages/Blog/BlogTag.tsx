import React from "react";
import {Link} from "react-router-dom";

interface IBlogTagProps {
    tag: string
    link: string
}

const BlogTag = (props: IBlogTagProps) => {
    return (
        <>
            <span className="post-category">
                <Link to={props.link}>{props.tag}</Link>
            </span>
        </>
    );
}

export {BlogTag}