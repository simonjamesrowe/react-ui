import React from "react";
import { BlogService, IBlog, ITag } from "../../../services/BlogService";
import { BlogPreview } from "./BlogPreview";
import { TagService } from "../../../services/TagService";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const blogService = new BlogService();
const tagService = new TagService();

const Blog = () => {
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);
  const [tags, setTags] = React.useState<ITag[]>([]);
  React.useEffect(() => {
    blogService.getAll().then(data => setBlogs(data));
    tagService.getAll().then(data => setTags(data));
  }, []);

  return (
    <>
      <section className="module">
        <div className="container">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-4 float-left">
              <div className="sidebar">
                <aside className="widget widget_search">
                  <form>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Type search here"
                    />
                    <button className="search-button" type="submit">
                      <FontAwesomeIcon size="lg" icon={faSearch} />
                    </button>
                  </form>
                </aside>
                <aside className="widget widget_recent_entries_custom">
                  <div className="widget-title">
                    <h6>Recent Posts</h6>
                  </div>
                  <ul>
                    {blogs
                      .filter((blog, key) => key < 5)
                      .map((blog, key: number) => (
                        <li className="clearfix" key={key}>
                          <div className="wi">
                            <Link to={`/blog/${blog.id}`}>
                              <img src={blog.imageUrl} alt="" />
                            </Link>
                          </div>
                          <div className="wb">
                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            <span className="post-date">
                              {Moment(blog.createdAt).format(" MMMM DD, YYYY")}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </aside>
                <aside className="widget widget_tag_cloud">
                  <div className="widget-title">
                    <h6>Tags</h6>
                  </div>
                  <div className="tagcloud">
                    {tags.map(tag => (
                      <a href="#">{tag.name}</a>
                    ))}
                  </div>
                </aside>
              </div>
            </div>

            <div className="col-lg-8 float-right">
              <div className="row blog-grid">
                {blogs.map((blog, i) => (
                  <>
                    <BlogPreview blog={blog} i={i} />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Blog };
