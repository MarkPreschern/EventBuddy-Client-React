import React from 'react'
import {Link} from "react-router-dom";

export default class EventAddFormComponent extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <h3>Create New Event</h3>
                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Event name:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Event name"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row align-items-center">
                        <label className="col-md-2 col-12">
                            Date:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            type="date"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Venue:
                        </label>
                        <select className="col-md-10 col-12 form-control">
                            <option>Venue A</option>
                            <option>Venue B</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Description:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Description"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Information:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Information"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Ticket Limit:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Ticket Limit"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Note:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Note"
                            type="text"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Ticket URL:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Ticket URL"
                            type="url"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <label className="col-md-2 col-12">
                            Image URL:
                        </label>
                        <input
                            className="col-md-10 col-12 form-control"
                            placeholder="Image URL"
                            type="url"/>
                    </div>
                </div>

                <button className="btn btn-success">Save</button>
                <Link to="/organizer/profile">
                    <button className="btn btn-danger ml-2">Cancel</button>
                </Link>
            </div>
        )
    }
}