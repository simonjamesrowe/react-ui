import React from "react";
import {  BlogService } from "../../../services/BlogService";
import Moment from "moment";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { CmsImage } from "../../common/CmsImage";
import {properties} from "../../../services/Environment";
import {BlogTag} from "./BlogTag";
import {IBlog} from "../../../model/Blog";

const blogService = new BlogService();

const BlogDetail: React.SFC<RouteComponentProps<{ id: string }>> = props => {
  const [blog, setBlog] = React.useState<IBlog>();
  React.useEffect(() => {
    blogService.get(props.match.params.id).then(data => setBlog(data));
  }, []);

  const imageUrl = (url: string) => {
    return `${properties.apiUrl}${url}`;
  };

  return (
    <>
      {blog && (
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <article className="post">
                  <div className="post-preview">
                    <CmsImage src={blog.image} />
                    <div>
                      {blog.tags.map((tag, i) => (
                          <BlogTag tag={tag.name} link={"#"} key={i} />
                      ))}
                    </div>
                  </div>
                  <div className="post-wrapper">
                    <div className="post-header">
                      <h2 className="post-title">{blog.title}</h2>
                      <ul className="post-meta h6">
                        <li>
                          {Moment(blog.createdAt).format(" MMMM DD, YYYY")}
                        </li>
                      </ul>

                    </div>
                    <div className="post-content">
                      <ReactMarkdown
                        source={blog.content}
                        transformImageUri={imageUrl}
                        linkTarget="_blank"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default withRouter(BlogDetail);
