import React from 'react'
import EventHighlightCardComponent from "./EventHighlightCardComponent";

export default class EventHighlightComponent extends React.Component {
    imageurl='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'

    render() {
        return(
            <div className="">
                <h2 className="text-center">Highlights</h2>
                <EventHighlightCardComponent/>
                <EventHighlightCardComponent/>
                <EventHighlightCardComponent/>
            </div>
        )
    }
}