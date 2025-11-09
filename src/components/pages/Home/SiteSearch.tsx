import React from "react";
import axios from "axios";
import {properties} from "../../../services/Environment";
import {AsyncTypeahead, Menu, MenuItem, TypeaheadResult} from "react-bootstrap-typeahead";
import {useNavigate} from "react-router-dom";
import {IHit, ISiteResult} from "../../../model/Site";

interface ISiteSearchOption {
    hit: IHit;
    name: string;
}

interface ISearchProps {
    searchQuery: string;
}

const SiteSearch = ({searchQuery}: ISearchProps) => {
    const [minLength, setMinLength] = React.useState<number>(searchQuery.length > 0 ? 0 : 1);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false);
    const [options, setOptions] = React.useState<ISiteSearchOption[]>([]);
    const [groupedResults, setGroupedResults] = React.useState<ISiteResult[]>([]);
    const handleSearch = (query) => {
        setIsLoading(true);
        axios.get<ISiteResult[]>(`${properties.apiUrl}/site?q=${query}`)
            .then((response) => {
                const flattenedOptions: ISiteSearchOption[] = [];
                response.data.forEach(siteResult =>
                    siteResult.hits.forEach(
                        hit => flattenedOptions.push({hit, name: hit.name})
                    )
                );
                setOptions(flattenedOptions);
                setGroupedResults(response.data);
            })
            .finally(() => setIsLoading(false));
    };
    React.useEffect(() => {
        if (searchQuery.length > 0) {
            handleSearch(searchQuery);
        }
        setMinLength(searchQuery.length > 0 ? 0 : 1);
    }, [searchQuery]);

    const selectSite = (hits: ISiteSearchOption[]) => {
        if (!hits || hits.length == 0) {
            return;
        }
        navigate(hits[0].hit.link);
    }


    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;
    return (
        <div className="tour-search site-search widget search_widget prt_bottompadder20">
            <AsyncTypeahead
                filterBy={filterBy}
                id="site-search-input"
                isLoading={isLoading}
                autoFocus={true}
                labelKey="name"
                minLength={minLength}
                onSearch={handleSearch}
                onChange={selectSite}
                defaultInputValue={searchQuery}
                options={options}
                placeholder="Search for skills, experience, blogs ..."
                renderMenu={(results: TypeaheadResult<ISiteSearchOption>[], menuProps) => {
                    const {
                        newSelectionPrefix,
                        paginationText,
                        renderMenuItemChildren,
                        ...safeMenuProps
                    } = menuProps;
                    void newSelectionPrefix;
                    void paginationText;
                    void renderMenuItemChildren;
                    return (
                        <Menu {...safeMenuProps}>
                            {groupedResults.length === 0 && (
                                <span className="site-search-result-heading">No results found</span>
                            )}
                            {groupedResults.map((result) => (
                                <React.Fragment key={result.type}>
                                    <span className="site-search-result-heading">{result.type}</span>
                                    {result.hits.map((hit) => {
                                        const optionIndex = results.findIndex(it => it.hit.link === hit.link);
                                        if (optionIndex === -1) {
                                            return null;
                                        }
                                        const option = results[optionIndex];
                                        return (
                                            <MenuItem
                                                key={hit.link}
                                                label={hit.name}
                                                option={option}
                                                position={optionIndex}
                                                className="site-search-result-hit"
                                            >
                                                <img src={`${properties.apiUrl}${hit.imageUrl}`} alt={hit.name}/>
                                                <span>{hit.name}</span>
                                            </MenuItem>
                                        );
                                    })}
                                </React.Fragment>
                            ))}
                        </Menu>
                    );
                }}
            />
        </div>
    )
}

export {SiteSearch}
