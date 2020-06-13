import React from 'react'
import {Link} from "react-router-dom";

export default class OPVenueItemComponent extends React.Component {

    render() {
        return(
            <div className="">
                <Link to='/venue/venueId'>
                    Madison Square Garden
                </Link>
            </div>
        )
    }
}