import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
import { CmsImage } from "../../common/CmsImage";
import {BlogTag} from "./BlogTag";
import {IBlog} from "../../../model/Blog";
interface IBlogPreviewProps {
  blog: IBlog;
  i: number;
}

const BlogPreview = ({ blog, i }: IBlogPreviewProps) => {

  return (
    <>
      <div className="col-md-6 post-item">
        <article className="post">
          <div className="post-preview">
            <Link to={`/blog/${blog.id}`}>
              <CmsImage src={blog.image} type={"small"} />
            </Link>
            <div>
              {blog.tags.map((tag) =>
                  <BlogTag tag={tag.name} link={"#"} />
              )}
            </div>
          </div>
          <div className="post-wrapper">

            <div className="post-header">
              <h2 className="post-title">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h2>
            </div>
            <div className="post-content">
              <p>{blog.shortDescription}</p>
            </div>
          </div>
          <div className="post-info">
            Simon Rowe on
            {Moment(blog.createdAt).format(" MMMM DD, YYYY")}
          </div>
        </article>
      </div>
    </>
  );
};

export { BlogPreview };
