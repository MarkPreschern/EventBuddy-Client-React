import React from 'react'

const PopupComponent = (props) =>
    <div className="EB-popup rounded">
        <div className="EB-popup-content">
            <b>
                Error Message: {props.message}
            </b>
        </div>
    </div>;

export default PopupComponent