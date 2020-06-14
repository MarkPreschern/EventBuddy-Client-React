import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './css/App.css'
import MenuComponent from "./components/MenuComponent";
import EventComponent from "./components/event/EventComponent"
import ProfileComponent from "./components/user-profile/ProfileComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProfileVisitComponent from "./components/user-profile/ProfileVisitComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import OrganizerProfileComponent from "./components/organizer-profile/OrganizerProfileComponent";
import MessageComponent from "./components/message/MessageComponent";
import EventDetailsEditComponent from "./components/event/EventDetailsEditComponent";
import VenueAddFormComponent from "./components/venue/VenueAddFormComponent";
import EventAddFormComponent from "./components/event/EventAddFormComponent";
import VenueDetailsEditComponent from "./components/venue/VenueDetailsEditComponent";

class App extends React.Component {

    render() {
        return (
            <div className="AppContainer">
                <div className="wrapper">
                    <BrowserRouter>
                        <Route path='/' component={MenuComponent}/>
                        <Route exact path='/' component={HomeComponent}/>
                        <Route path='/event' component={EventComponent}/>
                        <Route path='/user/profile' exact component={ProfileComponent}/>
                        <Route path='/user/profile/:userId' component={ProfileVisitComponent}/>
                        <Route path='/messages' component={MessageComponent}/>
                        <Route path='/organizer/profile' exact component={OrganizerProfileComponent}/>
                        <Route path='/organizer/event/:eventId' exact component={EventDetailsEditComponent}/>
                        <Route path='/venue/new' exact component={VenueAddFormComponent}/>
                        <Route path='/login' component={LoginComponent}/>
                        <Route path='/register' component={RegisterComponent}/>
                    </BrowserRouter>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;