import React from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import EventSearchSuggestionComponent from "./EventSearchSuggestionComponent";
import EventService from "../../services/EventService";
import {getEvents} from "../../actions/EventActions";

class EventSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            date: "",
            search: "",
        }
    }

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        this.props.getEvents(params);
    }

    searchClicked = () => {
        this.props.getEvents(this.getParams());
    };

    getParams = () => {
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
        return params
    };

    suggestionClick = (search) => {
        const params = {};
        params.keyword = search;
        this.props.getEvents(params);
    };

    render() {
        return (
            <div className="text-center EB-dark-component mb-2">
                <h3 className="on-dark-background">Search for your favorite events!</h3>
                <div className="form-row form-group d-sm-flex justify-content-between">
                        <input className="form-control col-sm-2 col-6 "
                               type="search"
                               placeholder="Location"
                               value={this.state.location}
                               onChange={(event) => this.setState({location: event.target.value})}
                        />
                        <input className="form-control col-sm-3 col-6 "
                               type="date"
                               placeholder="Date"
                               value={this.state.date}
                               onChange={(event) => this.setState({date: event.target.value})}
                        />
                        <input className="form-control col-sm-5 col-10 "
                               type="search"
                               placeholder="Enter any keyword here!"
                               value={this.state.search}
                               onChange={(event) => this.setState({search: event.target.value})}
                        />
                        <Link to={`/event/search/results?${new URLSearchParams(this.getParams())}`}
                              className="col-sm-1 col-2"
                              onClick={this.searchClicked}>
                            <button className="btn btn-dark form-control ">
                                <i className="fa fa-search"/>
                            </button>
                        </Link>
                </div>
                <div className="row justify-content-between flex-nowrap EB-content-overflow-scroll">
                    <Link to="/event/search/results?keyword=Harry+Styles" onClick={() => this.suggestionClick('Harry Styles')}>
                        <EventSearchSuggestionComponent content="Harry Styles"/>
                    </Link>
                    <Link to="/event/search/results?keyword=Business" onClick={() => this.suggestionClick('Business')}>
                        <EventSearchSuggestionComponent content="Business"/>
                    </Link>
                    <Link to="/event/search/results?keyword=New+York" onClick={() => this.suggestionClick('New York')}>
                        <EventSearchSuggestionComponent content="New York"/>
                    </Link>
                    <Link to="/event/search/results?keyword=Music" onClick={() => this.suggestionClick('Music')}>
                        <EventSearchSuggestionComponent content="Music"/>
                    </Link>
                    <Link to="/event/search/results?Keyword=Comedy" onClick={() => this.suggestionClick('Comedy')}>
                        <EventSearchSuggestionComponent content="Comedy"/>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        getEvents: async (params) => {
            const data = await EventService.getEvents(params);
            dispatch(getEvents(data))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventSearchComponent);