import React from "react";
import {IBlogSearchResult} from "../../../model/Blog";
import axios from "axios";
import {properties} from "../../../services/Environment";
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import Moment from "moment";
import {useNavigate} from "react-router-dom";

const BlogSearch = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false);
    const [options, setOptions] = React.useState<IBlogSearchResult[]>([]);
    const handleSearch = (query) => {
        axios.get<IBlogSearchResult[]>(`${properties.apiUrl}/search/blogs?q=${query}`)
            .then((response) => {
                setOptions(response.data);
            })
    };

    const selectBlog = (blogs: IBlogSearchResult[]) => {
        if (!blogs || blogs.length == 0) {
            return;
        }
        navigate(`/blogs/${blogs[0].id}`);
    }

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;
    return (
        <div className="widget search_widget">
            <AsyncTypeahead
                filterBy={filterBy}
                id="async-example"
                isLoading={isLoading}
                labelKey="title"
                minLength={2}
                onSearch={handleSearch}
                onChange={selectBlog}
                options={options}
                placeholder="What are you looking for..."
                renderMenuItemChildren={(option: IBlogSearchResult, props) => (
                    <>
                        <img src={`${properties.apiUrl}${option.thumbnailImage}`}></img>
                        <span>{option.title}</span>
                        <span className="float-right"><FontAwesomeIcon
                            icon={faCalendarAlt}/> {Moment(option.createdDate).format("DD-MMM-YYYY")}</span>
                    </>
                )}
            />
        </div>
    )
}

export {BlogSearch};