import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import './css/App.css'
import MenuComponent from "./components/MenuComponent";
import EventComponent from "./components/event/EventComponent"
import AttendeeProfileComponent from "./components/attendee-profile/AttendeeProfileComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import OrganizerProfileComponent from "./components/organizer-profile/OrganizerProfileComponent";
import MessageComponent from "./components/message/MessageComponent";
import VenueDetailsEditComponent from "./components/venue/VenueDetailsEditComponent";
import EventDetailsEditComponent from "./components/event/EventDetailsEditComponent";
import VenueAddFormComponent from "./components/venue/VenueAddFormComponent";
import AttendeeService from "./services/AttendeeService";
import OrganizerService from "./services/OrganizerService";
import {selectAttendee} from "./actions/AttendeeActions";
import {selectOrganizer} from "./actions/OrganizerActions";
class App extends React.Component {

    // attempts to login user if possible via sessionStorage
    componentDidMount() {
        if (window.sessionStorage.hasOwnProperty("userType")) {
            const userType = window.sessionStorage.getItem("userType").replace(/"/g, "").replace(",", "");
            const args = {
                username: window.sessionStorage.getItem("username").replace(/"/g, "").replace(",", ""),
                password: window.sessionStorage.getItem("password").replace(/"/g, "").replace(",", "")
            };
            if (userType === "attendee") {
                AttendeeService.loginAttendee(args).then(data => {
                    if (!data.hasOwnProperty("message")) {
                        this.props.loginAttendee(data);
                    }
                });
            } else if (userType === "organizer") {
                OrganizerService.loginOrganizer(args).then(data => {
                    if (!data.hasOwnProperty("message")) {
                        this.props.loginOrganizer(data);
                    }
                });
            }
        }
    }

    render() {
        return (
            <div className="AppContainer">
                <div className="wrapper">
                    <BrowserRouter>
                        <Route path='/' component={MenuComponent}/>
                        <Route exact path='/' component={HomeComponent}/>
                        <Route path='/event' component={EventComponent}/>
                        <Route path='/attendee/profile' component={AttendeeProfileComponent}/>
                        <Route path='/organizer/profile' component={OrganizerProfileComponent}/>
                        <Route path="/organizer/:organizerId/venue/:venueId/edit" component={VenueDetailsEditComponent}/>
                        <Route path="/organizer/:organizerId/event/:eventId/edit" component={EventDetailsEditComponent}/>
                        <Route path='/messages' component={MessageComponent}/>
                        <Route exact path='/venue/new' component={VenueAddFormComponent}/>
                        <Route path='/login' component={LoginComponent}/>
                        <Route path='/register' component={RegisterComponent}/>
                    </BrowserRouter>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        loginAttendee: (attendee) => {
            dispatch(selectAttendee(attendee))

        },
        loginOrganizer: (organizer) => {
            dispatch(selectOrganizer(organizer))
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(App);