import React from "react";
import { BlogService, IBlog, ITag } from "../../../services/BlogService";
import { BlogPreview } from "./BlogPreview";
import { TagService } from "../../../services/TagService";

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
          <div className="row">
            <div className="col-lg-8">
              <div className="row blog-grid">
                {blogs.map((blog, i) => (
                  <>
                    <BlogPreview blog={blog} i={i} />
                  </>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <aside className="widget widget_search">
                  <form>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Type search here"
                    />
                    <button className="search-button" type="submit">
                      <span className="fa fa-search"></span>
                    </button>
                  </form>
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
          </div>
        </div>
      </section>
    </>
  );
};

export { Blog };
