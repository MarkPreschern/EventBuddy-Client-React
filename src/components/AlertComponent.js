import React from 'react';
import {connect} from "react-redux";
import {useAlert} from 'react-alert'
import {closeAlert} from "../actions/AlertActions";

const AlertComponent = (props) => {
    const alert = useAlert();

    const showAlert = () => {
        alert.show(props.alertMessage);
        props.closeAlert();
        return "";
    };

    return(
        <div>
            {showAlert()}
        </div>
    );
};

const mapStateToProps = state => ({
    alertMessage: state.AlertReducer.message
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        closeAlert: () => {
            dispatch(closeAlert())
        }
    }
};

export default connect(mapStateToProps, dispatchToPropertyMapper)(AlertComponent);