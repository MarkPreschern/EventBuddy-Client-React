import React from "react";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import './css/App.css'
import MenuComponent from "./components/MenuComponent";
import UserContainer from "./containers/UserContainer"
import EventContainer from "./containers/EventContainer"
import ProfileComponent from "./components/userprofile/ProfileComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProfileVisitComponent from "./components/userprofile/ProfileVisitComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import OrganizerProfileComponent from "./components/organizerprofile/OrganizerProfileComponent";
import OrganizerProfileVisitComponent from "./components/organizerprofile/OrganizerProfileVisitComponent";
import EventHighlightComponent from "./components/EventHighlightComponent";
import MessageComponent from "./components/message/MessageComponent";
import SearchComponent from "./components/SearchComponent";
import EventDetailsEditComponent from "./components/EventDetailsEditComponent";

class App extends React.Component {

    render() {
        return (
            <div className="AppContainer">
                <div className="wrapper">
                <BrowserRouter>
                    <Redirect exact from="/home" to='/home'/>
                    <Route path='/' component={MenuComponent}/>
                    <Route path='/home' component={HomeComponent}/>
                    {/*<Route path='/user' component={UserContainer}/>*/}
                    <Route path='/event' component={EventContainer}/>
                    <Route path='/user/profile' exact component={ProfileComponent}/>
                    <Route path='/user/profile/:userId' component={ProfileVisitComponent}/>
                    <Route path='/messages' component={MessageComponent}/>
                    <Route path='/organizer/profile' exact component={OrganizerProfileComponent}/>
                    <Route path='/organizer/profile/:userId' component={OrganizerProfileVisitComponent}/>
                    <Route path='/organizer/event/:eventId' exact component={EventDetailsEditComponent}/>
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