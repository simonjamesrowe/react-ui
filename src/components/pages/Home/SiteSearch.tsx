import React from "react";
import axios from "axios";
import {properties} from "../../../services/Environment";
import {AsyncTypeahead, Menu, MenuItem, TypeaheadResult} from "react-bootstrap-typeahead";
import {useHistory} from "react-router-dom";
import {IHit, ISiteResult} from "../../../model/Site";

interface ISiteSearchOption {
    hit: IHit;
    name: string;
    results: ISiteResult[];
}

const SiteSearch = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = React.useState(false);
    const [options, setOptions] = React.useState<ISiteSearchOption[]>([]);
    const handleSearch = (query) => {
        axios.get<ISiteResult[]>(`${properties.apiUrl}/search/site?q=${query}`)
            .then((response) => {
                const options: ISiteSearchOption[] = [];
                response.data.forEach(siteResult =>
                    siteResult.hits.forEach(
                        hit => options.push({hit: hit, name: hit.name, results: response.data})
                    )
                )
                setOptions(options);
            })
    };

    const selectSite = (hits: ISiteSearchOption[]) => {
        if (!hits || hits.length == 0) {
            return;
        }
        history.push(hits[0].hit.link);
    }

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;
    return (
        <div className="site-search widget search_widget prt_bottompadder20">
            <AsyncTypeahead
                filterBy={filterBy}
                id="async-example"
                isLoading={isLoading}
                labelKey="name"
                minLength={1}
                onSearch={handleSearch}
                onChange={selectSite}
                options={options}
                placeholder="Search for skills, experience, blogs ..."
                renderMenu={(results: TypeaheadResult<ISiteSearchOption>[], menuProps) => (
                    <Menu {...menuProps}>
                        {options.length == 0 && (

                            <span className="site-search-result-heading">No results found</span>

                        )}
                        {options.length > 0 && options[0].results.map((result, resultIndex) =>
                            <>
                                <span className="site-search-result-heading">{result.type}</span>
                                {result.hits.map((hit, hitIndex) => (
                                    <MenuItem
                                        label={hit.name}
                                        option={options[options.findIndex(it => it.name == hit.name)]}
                                        position={options.findIndex(it => it.name == hit.name)}
                                        className="site-search-result-hit"
                                    >
                                        <img src={`${properties.apiUrl}${hit.imageUrl}`}/>
                                        <span>{hit.name}</span>
                                    </MenuItem>
                                ))}

                            </>
                        )}
                    </Menu>
                )}
            />
        </div>
    )
}

export {SiteSearch};