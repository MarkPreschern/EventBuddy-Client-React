import React from 'react'
import {Link} from "react-router-dom";

export default class ContactCardComponent extends React.Component {
    imageurl='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'

    render() {
        return(
            <Link to='/messages/userIdaiajwioj'>
                <div className="card d-flex flex-row align-items-center">
                    <img className=" EB-contact-img" src={this.imageurl} alt="..."/>
                    <h6 className="card-title ml-1">Danny Tran</h6>
                </div>
            </Link>
        )
    }
}