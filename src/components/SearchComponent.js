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
        console.log(this.state.date);
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

    render() {
        return (
            <div className="text-center EB-dark-component">
                <h3 className="on-dark-background">Search for your favorite events!</h3>
                <div className="form-group row justify-content-between">
                        <input className="form-control col-6 col-sm-3"
                               type="search"
                               placeholder="Location"
                               value={this.state.location}
                               onChange={(event) => this.setState({location: event.target.value})}
                        />
                        <input className="form-control col-6 col-sm-3"
                               type="date"
                               placeholder="Date"
                               value={this.state.date}
                               onChange={(event) => this.setState({date: event.target.value})}
                        />
                        <input className="form-control col-11 col-sm-5"
                               type="search"
                               placeholder="Seciarch for events"
                               value={this.state.search}
                               onChange={(event) => this.setState({search: event.target.value})}
                        />
                        <Link to="/event/search/results" onClick={this.searchClicked}>
                            <button className="btn btn-dark col-1">
                                <i className="fa fa-search"/>
                            </button>
                        </Link>
                </div>
                <div className="row justify-content-between flex-nowrap">
                    <SearchSuggestionComponent content="Cardi B"/>
                    <SearchSuggestionComponent content="Adele"/>
                    <SearchSuggestionComponent content="Michael Jackson"/>
                    <SearchSuggestionComponent content="Donald Trump"/>
                    <SearchSuggestionComponent content="Danny Tran"/>
                </div>
            </div>
        )
    }
}