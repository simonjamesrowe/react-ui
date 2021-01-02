import React from "react";
import {getAllTags} from "../../../services/TagService";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {IBlog} from "../../../model/Blog";
import {ITag} from "../../../model/Tag";
import {connect} from "react-redux";
import {IApplicationState} from "../../../state/Store";
import {getAllBlogs, getOneBlog} from "../../../services/BlogService";
import {BlogDetail} from "./BlogDetail";
import {BlogPreview} from "./BlogPreview";

interface IBlogProps {
  blogs: IBlog[],
  tags: ITag[],
  currentBlog: IBlog,
  getAllBlogs: typeof getAllBlogs;
  getAllTags: typeof getAllTags;
  getOneBlog: typeof getOneBlog;
}

const Blog = (props : IBlogProps & RouteComponentProps<{ id?: string }>) => {

  React.useEffect(() => {
    props.getAllBlogs();
    props.getAllTags();
  }, []);

  React.useEffect(() => {
    if (props.match.params.id) {
      props.getOneBlog(props.match.params.id)
    }
  }, [props.blogs, props.match.params])

  return (
    <>
      <div className="port_sec_warapper" id="top">
        <div className="port_singleblog_wrapper prt_toppadder20 prt_bottompadder80 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" >
                {props.currentBlog && (
                  <BlogDetail blog={props.currentBlog} />
                )}
              </div>
              <div className="col-lg-4">
                <div className="blogsidebar_wrapper">
                  <div className="widget search_widget">
                    <form>
                      <input className="form-control" type="text"  name="search"
                             placeholder="Search here..." />
                        <a href="javascript:;" className="blog_searchicon"><i className="fas fa-search"></i></a>
                    </form>
                  </div>
                  <div className="widget repost_widget">
                    <h4 className="widget_title">Recent Post</h4>
                    <div className="widget_rp">
                      <ul>
                        {props.blogs.map(blog => (
                            <BlogPreview blog={blog} />
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="widget tag_widget">
                    <h4 className="widget_title">Tag</h4>
                    <ul>
                      {props.tags.map(tag => (
                          <li><a href="javascript:;" className="comment_reply">{tag.name}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

const mapStateToProps = (store: IApplicationState) => {
  return {
    blogs: store.blogs.blogs,
    currentBlog: store.blogs.currentBlog!!,
    tags: store.tags.tags
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllBlogs: () => dispatch(getAllBlogs()),
    getAllTags: () => dispatch(getAllTags()),
    getOneBlog: (id: string) => dispatch(getOneBlog(id))
  };
};

const BlogWithRouter = withRouter(Blog);

export default connect(mapStateToProps, mapDispatchToProps)(BlogWithRouter);



