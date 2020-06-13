import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from "react-redux"
import EventSearchComponent from "./EventSearchComponent";
import EventSearchResultComponent from "./EventSearchResultComponent";
import EventDetailComponent from "./EventDetailComponent";
import EventService from "../../services/EventService";
import {selectEvent} from "../../actions/EventActions";
import EventAddFormComponent from "./EventAddFormComponent";

class EventComponent extends React.Component {

    componentDidMount() {
        const pathParts = window.location.pathname.split('/');
        const id = pathParts.pop() || pathParts.pop();
        const before_id = pathParts.pop() || pathParts.pop();
        if (before_id === "external") {
            EventService.getExternalEvent(id).then(data => this.props.selectEvent(data))
        } else if (before_id === "event") {
            EventService.getEvent(id).then(data => this.props.selectEvent(data))
        }
    }

    render() {
        return (
            <div>
                <Route path="/event/search/" component={EventSearchComponent}/>
                <Route path="/event/new/" component={EventAddFormComponent}/>
                <Route path="/event/search/results" component={EventSearchResultComponent}/>
                <Route path={`/event/${this.props.event._id}`} component={EventDetailComponent}/>
                <Route path={`/event/external/${this.props.event._id}`} component={EventDetailComponent}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.EventReducer.event
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        selectEvent: (event) => {
            dispatch(selectEvent(event))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(EventComponent);