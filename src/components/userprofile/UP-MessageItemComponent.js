import React from 'react'

export default class UPMessageItemComponent extends React.Component {
    imageurl='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'

    render() {
        return(
            <div className="">
                <img src={this.imageurl} className="rounded EB-item-pic" alt=""/>
            </div>
        )
    }
}