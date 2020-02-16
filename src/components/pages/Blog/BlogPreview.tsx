import React from "react";
import { IBlog } from "../../../services/BlogService";
import Moment from "moment";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
interface IBlogPreviewProps {
  blog: IBlog;
  i: number;
}

const BlogPreview = ({ blog, i }: IBlogPreviewProps) => {
  let tagColour = "#e41919";
  if (i % 3 === 1) {
    tagColour = "#ffbb44";
  }
  if (i % 3 === 2) {
    tagColour = "#4CAF50";
  }
  const tagStyle: CSSProperties = {
    backgroundColor: tagColour
  };
  return (
    <>
      <div className="col-md-6 post-item">
        <article className="post">
          <div className="post-preview">
            <a href="#">
              <img src={blog.imageUrl} alt="" />
            </a>
            {blog.tags.length > 0 && (
              <div className="post-category" style={tagStyle}>
                <a href="#">{blog.tags[0].name}</a>
              </div>
            )}
          </div>
          <div className="post-wrapper">
            <div className="post-header">
              <h2 className="post-title">
                <a href="blog-single.html">{blog.title}</a>
              </h2>
            </div>
            <div className="post-content">
              <p>{blog.shortDescription}</p>
            </div>
          </div>
          <div className="post-info">
            <a href="#">Simon Rowe</a> on
            {Moment(blog.createdAt).format(" MMMM DD, YYYY")}
          </div>
        </article>
      </div>
    </>
  );
};

export { BlogPreview };
