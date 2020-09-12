import React from "react";

import { BlogPreview } from "./BlogPreview";
import {getAllTags} from "../../../services/TagService";
import Moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CmsImage } from "../../common/CmsImage";
import {IBlog} from "../../../model/Blog";
import {ITag} from "../../../model/Tag";
import {connect} from "react-redux";
import {IApplicationState} from "../../../state/Store";
import {getAllBlogs} from "../../../services/BlogService";


interface IBlogProps {
  blogs: IBlog[],
  tags: ITag[],
  getAllBlogs: typeof getAllBlogs;
  getAllTags: typeof getAllTags;
}

const Blog = (props : IBlogProps) => {

  React.useEffect(() => {
    props.getAllBlogs();
    props.getAllTags();
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
                    {props.blogs
                      .filter((blog, key) => key < 5)
                      .map((blog, key: number) => (
                        <li className="clearfix" key={key}>
                          <div className="wi">
                            <Link to={`/blog/${blog.id}`}>
                              <CmsImage src={blog.image} />
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
                    {props.tags.map(tag => (
                      <a href="#">{tag.name}</a>
                    ))}
                  </div>
                </aside>
              </div>
            </div>

            <div className="col-lg-8 float-right">
              <div className="row blog-grid">
                {props.blogs.map((blog, i) => (
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

const mapStateToProps = (store: IApplicationState) => {
  return {
    blogs: store.blogs.blogs,
    tags: store.tags.tags
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllBlogs: () => dispatch(getAllBlogs()),
    getAllTags: () => dispatch(getAllTags())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog);
