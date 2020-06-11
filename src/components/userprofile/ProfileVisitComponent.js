import React from 'react'
import UPEventListComponent from "./UP-EventListComponent";

export default class ProfileVisitComponent
    extends React.Component {
    imageurl="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-sm-3 col-12 mb-3">
                        <img src={this.imageurl}
                             className="rounded EB-profile-pic mb-3"
                             alt=""/>
                        <button className="btn btn-dark d-block align-items-center">
                            Add friend
                        </button>
                    </div>
                    <div className="col-sm-8 col-12">
                        <h2>Danny Tran</h2>
                        <p>Username: dtran</p>
                        <p>Gender: Male</p>
                        <p>Birthday: June 12, 1998</p>
                        <p>Email: dtran@gmail.com</p>
                    </div>
                </div>
                <div className="row d-inline">
                    <h4>Liked events</h4>
                    <div className="EB-scroll-list">
                        <UPEventListComponent/>
                    </div>
                </div>
            </div>
        )
    }
}