import React from 'react'

export default class EventHighlightCardComponent extends React.Component {
    render() {
        return(
            <div className="row mt-5 mb-5">
                <div className="col-4">
                    <img src={this.imageurl} className="rounded EB-event-highlight-pic" alt=""/>
                </div>
                <div className="col-8">
                    <h4>Event Title</h4>
                    <p>Event date</p>
                    <p>Event description</p>
                </div>
            </div>
        )
    }
}