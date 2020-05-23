import React from 'react'
import SearchSuggestionComponent from "./SearchSuggestionComponent";

export default class SearchComponent
    extends React.Component {
    render() {
        return (
            <div className="text-center EB-dark-component">
                <h3 className="on-dark-background">Search for your favorite events!</h3>
                <div className="form-group row justify-content-between">
                        <input className="form-control col-6 col-sm-3" type="search" placeholder="Location"/>
                        <input className="form-control col-6 col-sm-3" type="date" placeholder="Date"/>
                        <input className="form-control col-11 col-sm-5" type="search" placeholder="Search for events"/>
                        <button className="btn btn-dark col-1">
                            <i className="fa fa-search"></i>
                        </button>
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