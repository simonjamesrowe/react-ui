import React from "react";
import ReactMarkdown from "react-markdown";
import {CmsImage} from "../../common/CmsImage";
import {properties} from "../../../services/Environment";
import {IBlog} from "../../../model/Blog";
import {faCalendarAlt, faTags, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Moment from "moment";
import {getOneBlog} from "../../../services/BlogService";
import {useNavigate, useParams} from "react-router-dom";
import {IApplicationState} from "../../../state/Store";
import {connect} from "react-redux";
import {ClosableHeader} from "../../common/CloseableHeader";
import {CodeBlock} from "../../common/CodeBlock";

interface IProps {
    blog: IBlog,
    getOneBlog: typeof getOneBlog;
}

const BlogDetail = ({blog, getOneBlog}: IProps) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    React.useEffect(() => {
        getOneBlog(id!)
    }, [])

    const imageUrl = (url: string) => {
        return `${properties.apiUrl}${url}`;
    };

    const close = () => {
        navigate(-1);
    }

    return (
        <> {blog && blog.id == id &&  (
            <div className="port_sec_warapper" id="top">

                <div className="port_blog_setions prt_toppadder20 prt_bottompadder20">
                    <div className="blog_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blog_wrapper">
                                        <div className="blog_data">
                                            <ClosableHeader close={close}/>
                                            <div className="blog_thumb">
                                                <CmsImage src={blog.image} type={"medium"}/>
                                            </div>
                                            <div className="blog_content">
                                                <div className="blog_postinfo pb-3">
                                                    <ul>
                                                        <li><FontAwesomeIcon
                                                            icon={faCalendarAlt}/> {Moment(blog.createdAt).format("DD-MMM-YYYY")}
                                                        </li>
                                                        <li><FontAwesomeIcon icon={faUserEdit}/> by Simon Rowe</li>
                                                        <li><FontAwesomeIcon
                                                            icon={faTags}/> {blog.tags.map(tag => tag.name).join(", ")}
                                                        </li>
                                                    </ul>
                                                </div>

                                                <h4 className="blog_heading">{blog.title}</h4><br/>

                                                <ReactMarkdown
                                                    className="blog_markdown"
                                                    source={blog.content}
                                                    transformImageUri={imageUrl}
                                                    linkTarget="_blank"
                                                    allowDangerousHtml={true}
                                                    renderers={{ code: CodeBlock }}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )}
        </>

    );
};

const mapStateToProps = (store: IApplicationState) => {
    return {
        blog: store.blogs.currentBlog!!
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getOneBlog: (id) => dispatch(getOneBlog(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);


