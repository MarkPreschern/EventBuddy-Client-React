import React from 'react'
import UPEventItemComponent from "./UP-EventItemComponent";

export default class UPEventListComponent
    extends React.Component {
    render() {
        return(
            <div className="row">
                <UPEventItemComponent/>
                <UPEventItemComponent/>
            </div>
        )
    }
}