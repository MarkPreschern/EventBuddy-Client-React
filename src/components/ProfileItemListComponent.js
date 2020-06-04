import React from 'react'
import ProfileItemComponent from "./ProfileItemComponent";

export default class ProfileItemListComponent
    extends React.Component {
    render() {
        return(
            <div className="row">
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
                <ProfileItemComponent/>
            </div>
        )
    }
}