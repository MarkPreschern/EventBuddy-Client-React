import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import './css/App.css'
import MenuComponent from "./components/MenuComponent";
import UserContainer from "./containers/UserContainer"
import EventContainer from "./containers/EventContainer"

class App extends React.Component {

    render() {
        return (
            <div className="AppContainer">
                <BrowserRouter>
                    <Redirect exact from="/" to='/event/search'/>
                    <Route path='/' component={MenuComponent}/>
                    <Route path='/user' component={UserContainer}/>
                    <Route path='/event/search' component={EventContainer}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;