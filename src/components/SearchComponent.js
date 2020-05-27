import React from 'react'
import { Link } from "react-router-dom"
import SearchSuggestionComponent from "./SearchSuggestionComponent";

export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            date: "",
            search: "",
        }
    }

    searchClicked = () => {
        const params = {};
        if (this.state.location !== "") {
            params.city = this.state.location;
        }
        if (this.state.date !== "") {
            params.startDateTime = this.state.date + "T00:00:00Z";
            params.endDateTime = this.state.date + "T23:59:59Z";
        }
        if (this.state.search !== "") {
            params.keyword = this.state.search;
        }
        this.props.searchEventHandler.bind(this, params)();
    };

    suggestionClick = (search) => {
        const params = {};
        params.keyword = search;
        this.props.searchEventHandler.bind(this, params)();
    };

    render() {
        return (
            <div className="text-center EB-dark-component mb-2">
                <h3 className="on-dark-background">Search for your favorite events!</h3>
                <div className="form-group d-sm-flex  justify-content-between">
                        <input className="form-control col-sm-3 col-6 d-inline"
                               type="search"
                               placeholder="Location"
                               value={this.state.location}
                               onChange={(event) => this.setState({location: event.target.value})}
                        />
                        <input className="form-control col-sm-3 col-6 d-inline"
                               type="date"
                               placeholder="Date"
                               value={this.state.date}
                               onChange={(event) => this.setState({date: event.target.value})}
                        />
                        <input className="form-control col-sm-5 col-12 d-inline"
                               type="search"
                               placeholder="Search for events"
                               value={this.state.search}
                               onChange={(event) => this.setState({search: event.target.value})}
                        />
                        <Link to="/event/search/results" onClick={this.searchClicked}>
                            <button className="btn btn-dark d-inline">
                                <i className="fa fa-search"/>
                            </button>
                        </Link>
                </div>
                <div className="row justify-content-between flex-nowrap EB-content-overflow-scroll">
                    <Link to="/event/search/results" onClick={() => this.suggestionClick('One Direction')}>
                        <SearchSuggestionComponent content="One Direction"/>
                    </Link>
                    <Link to="/event/search/results" onClick={() => this.suggestionClick('Boston Celtics')}>
                        <SearchSuggestionComponent content="Boston Celtics"/>
                    </Link>
                    <Link to="/event/search/results" onClick={() => this.suggestionClick('New York')}>
                        <SearchSuggestionComponent content="New York"/>
                    </Link>
                    <Link to="/event/search/results" onClick={() => this.suggestionClick('Music')}>
                        <SearchSuggestionComponent content="Music"/>
                    </Link>
                    <Link to="/event/search/results" onClick={() => this.suggestionClick('Comedy')}>
                        <SearchSuggestionComponent content="Comedy"/>
                    </Link>
                </div>
            </div>
        )
    }
}