import React from 'react'
import {Link} from "react-router-dom";

export default class AttendeeMessageItemComponent extends React.Component {
    imageurl='https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun_wide-dec768eb01368bcf1c6991987422efaf320bf877.jpg?s=1400'

    render() {
        return(
            <Link to='/messages/userId'>
                <div className="d-inline-flex EB-list-item">
                    <img src={this.imageurl} className="rounded EB-item-pic" alt=""/>
                    <div className="EB-list-content ">
                        <span>
                            <h5 className="EB-list-text">Danny Tran wadwadawd awd awd awd awd awd aw</h5>
                            <p className="EB-list-text">Hey this is a snipdwadawd waadwdaw dwa awd ada d awda wpet</p>
                        </span>
                    </div>
                </div>
            </Link>
        )
    }
}