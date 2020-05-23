import React from 'react'
import "../css/EventCard.css"
import EventCardComponent from "./EventCardComponent";

export default class EventSearchResultComponent extends React.Component {

    render() {
        return(
            <div>
                <h1>Search results</h1>
                <div className="row card-row">
                    {
                        this.props.events.map(event =>
                                                  <EventCardComponent
                                                      event={event}
                                                      key={event.id}
                                                      selectEventHandler={this.props.selectEventHandler}
                                                  />)
                    }
                </div>
            </div>
        )
    }
}