import React from 'react'

export default class VenueAddFormComponent extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <h3>Create New Venue</h3>
                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Venue name:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Venue name"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row align-items-center">
                        <label className="col-md-2 col-12">
                            Country:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Country"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            State:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="State"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            City:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="City"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Address:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Address"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Phone number:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Phone number"
                            type="number"/>
                    </div>
                </div>

                <button className="btn btn-success">Save</button>
                <button className="btn btn-danger ml-2">Cancel</button>
            </div>
        )
    }
}