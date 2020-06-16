import React from 'react'
import {Link} from "react-router-dom";
import {DEFAULT_IMAGE_URL} from "../../common/Constants";

const OrganizerListItemComponent = (props) =>
    <div className="d-inline-flex EB-list-item-double">
        {
            !(props.item.image_url === '' || props.item.image_url === undefined)  ?
            <img src={props.item.image_url} className="rounded EB-item-pic" alt=""/>
            :
            <img src={DEFAULT_IMAGE_URL} className="rounded EB-item-pic" alt=""/>
        }
        <div className="EB-list-content">
            <span>
                <h5 className="EB-list-text">{props.item.name}</h5>
                {
                    props.item.start_date !== undefined &&
                    <p className="EB-list-text">{props.item.start_date.split("T")[0]}</p>
                }
            </span>
        </div>
    </div>;


export default OrganizerListItemComponent;