import React from 'react'
import OPEventItemComponent from "./OP-EventItemComponent";

export default class OPEventListComponent extends React.Component {
    render() {
        return(
            <div className="row EB-scroll-list">
                <OPEventItemComponent/>
                <OPEventItemComponent/>
                <OPEventItemComponent/>
            </div>
        )
    }
}