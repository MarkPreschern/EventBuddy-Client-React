import React from "react";
import EventSearchResultComponent from "./components/EventSearchResultComponent";
import SearchComponent from "./components/SearchComponent";
import './App.style.css'
import MenuComponent from "./components/MenuComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import EventDetailComponent from "./components/EventDetailComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        // TODO
    }

    render() {
        return (
            <div className="AppContainer">
                <MenuComponent/>
                <br/>
                <SearchComponent/>
                <LoginComponent/>
                <RegisterComponent/>
                <EventSearchResultComponent/>
                <EventDetailComponent/>
            </div>
        );
    }
}

export default App;