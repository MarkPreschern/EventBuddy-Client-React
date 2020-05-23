import React from 'react'

export default class SearchSuggestionComponent
    extends React.Component {
    state= {
        content: this.props.content
    }
    render() {
        return (
            <div>
                <button className="btn btn-light btn-outline-dark text-truncate">
                    {this.state.content}
                </button>
            </div>
        )
    }
}