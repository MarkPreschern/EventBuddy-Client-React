import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import './css/App.css'
import MenuComponent from "./components/MenuComponent";
import UserContainer from "./containers/UserContainer"
import EventContainer from "./containers/EventContainer"
import ProfileComponent from "./components/ProfileComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

class App extends React.Component {

    render() {
        return (
            <div className="AppContainer">
                <BrowserRouter>
                    <Redirect exact from="/" to='/event/search'/>
                    <Route path='/' component={MenuComponent}/>
                    <Route path='/user' component={UserContainer}/>
                    <Route path='/event/search' component={EventContainer}/>
                    <Route path='/profile' component={ProfileComponent}/>
                    <Route path='/profile/:userId' component={ProfileComponent}/>
                    <Route path='/login' component={LoginComponent}/>
                    <Route path='/register' component={RegisterComponent}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;