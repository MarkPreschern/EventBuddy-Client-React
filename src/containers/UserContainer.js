import React from 'react'
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

export default class UserContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        // TODO
    }

    render() {
        return(
            <div>
                <LoginComponent/>
                <RegisterComponent/>
            </div>
        )
    }
}