import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {Provider as AlertProvider} from "react-alert";
import './css/App.css'
import MenuComponent from "./components/MenuComponent";
import EventComponent from "./components/event/EventComponent"
import AttendeeComponent from "./components/attendee/AttendeeComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import OrganizerComponent from "./components/organizer/OrganizerComponent";
import MessageComponent from "./components/message/MessageComponent";
import VenueDetailsEditComponent from "./components/venue/VenueDetailsEditComponent";
import EventDetailsEditComponent from "./components/event/EventDetailsEditComponent";
import VenueAddFormComponent from "./components/venue/VenueAddFormComponent";
import VenueDetailsComponent from "./components/venue/VenueDetailsComponent"
import AttendeeService from "./services/AttendeeService";
import OrganizerService from "./services/OrganizerService";
import {selectAttendee} from "./actions/AttendeeActions";
import {selectOrganizer} from "./actions/OrganizerActions";
import AlertComponent from "./components/AlertComponent";

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

    AlertTemplate = ({ style, options, message, close }) => (
        <div style={style} className="EB-alert">
            <h6>Error! {message}</h6>
            <button className="btn btn-danger" onClick={close}>
                <i className="fa fa-times"/>
            </button>
        </div>
    );

    render() {
        return (
            <AlertProvider template={this.AlertTemplate} {...{timeout: 5000}}>
                <div className="AppContainer">
                    <div className="wrapper">
                        <BrowserRouter>
                            <Route path='/' component={MenuComponent}/>
                            <Route exact path='/' component={HomeComponent}/>
                            <Route path='/event' component={EventComponent}/>
                            <Route path='/profile' component={AttendeeComponent}/>
                            <Route path='/profile' component={OrganizerComponent}/>
                            <Route path="/organizer/:organizerId/venue/:venueId/edit" component={VenueDetailsEditComponent}/>
                            <Route path="/organizer/:organizerId/event/:eventId/edit" component={EventDetailsEditComponent}/>
                            <Route path='/attendee/:attendeeId/messages' component={MessageComponent}/>
                            <Switch>
                                <Route exact path='/venue/new' component={VenueAddFormComponent}/>
                                <Route path='/venue/:venueId' component={VenueDetailsComponent}/>
                            </Switch>
                            <Route path='/login' component={LoginComponent}/>
                            <Route path='/register' component={RegisterComponent}/>
                        </BrowserRouter>
                        {this.props.alertActive && <AlertComponent/>}
                    </div>
                    <FooterComponent/>
                </div>
            </AlertProvider>
        );
    }
}

const mapStateToProps = state => ({
    alertActive: state.AlertReducer.active,
});

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