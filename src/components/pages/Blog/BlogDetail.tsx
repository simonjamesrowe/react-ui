import React from "react";
import { IBlog, BlogService } from "../../../services/BlogService";
import Moment from "moment";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const blogService = new BlogService();

const BlogDetail: React.SFC<RouteComponentProps<{ id: string }>> = props => {
  const [blog, setBlog] = React.useState<IBlog>();
  React.useEffect(() => {
    blogService.get(props.match.params.id).then(data => setBlog(data));
  }, []);

  const imageUrl = (url: string) => {
    return `https://content.simonjamesrowe.com/${url}`;
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
                    <img src={blog.imageUrl} alt="" />
                  </div>
                  <div className="post-wrapper">
                    <div className="post-header">
                      <h2 className="post-title">{blog.title}</h2>
                      <ul className="post-meta h6">
                        <li>
                          {Moment(blog.createdAt).format(" MMMM DD, YYYY")}
                        </li>
                        <li>
                          {blog.tags.map(tag => (
                            <span>{tag.name}</span>
                          ))}
                        </li>
                      </ul>
                    </div>
                    <div className="post-content">
                      <ReactMarkdown
                        source={blog.content}
                        transformImageUri={imageUrl}
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
