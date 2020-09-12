import React from "react";
import Moment from "moment";
import {RouteComponentProps, withRouter} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {CmsImage} from "../../common/CmsImage";
import {properties} from "../../../services/Environment";
import {BlogTag} from "./BlogTag";
import {IBlog} from "../../../model/Blog";
import {getOneBlog} from "../../../services/BlogService";
import {IApplicationState} from "../../../state/Store";
import {connect} from "react-redux";

interface IBlogDetailProps extends RouteComponentProps<{ id: string }> {
    blog?: IBlog,
    getOneBlog: typeof getOneBlog;
}

const BlogDetail = (props : IBlogDetailProps) => {
    React.useEffect(() => {
        props.getOneBlog((props as RouteComponentProps<{id: string}> ).match.params.id);
    }, []);

    const imageUrl = (url: string) => {
        return `${properties.apiUrl}${url}`;
    };

    return (
        <>
            {props.blog && (
                <section className="module">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <article className="post">
                                    <div className="post-preview">
                                        <CmsImage src={props.blog.image}/>
                                        <div>
                                            {props.blog.tags.map((tag, i) => (
                                                <BlogTag tag={tag.name} link={"#"} key={i}/>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="post-wrapper">
                                        <div className="post-header">
                                            <h2 className="post-title">{props.blog.title}</h2>
                                            <ul className="post-meta h6">
                                                <li>
                                                    {Moment(props.blog.createdAt).format(" MMMM DD, YYYY")}
                                                </li>
                                            </ul>

                                        </div>
                                        <div className="post-content">
                                            <ReactMarkdown
                                                source={props.blog.content}
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
const mapStateToProps = (store: IApplicationState) => {
    return {
        blog: store.blogs.currentBlog,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getOneBlog: (id: string) => dispatch(getOneBlog(id))
    };
};

const BlogDetailWithRouter = withRouter(BlogDetail);

export default
    connect(mapStateToProps, mapDispatchToProps)(BlogDetailWithRouter);

