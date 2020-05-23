import React from 'react'

export default class EventDetailComponent
    extends React.Component {
    imageurl= "https://media.npr.org/assets/img/2016/07/11/jacob-collier2_wide-6e4700e64c8039b9148fa629b871d9afe1dd406f.jpg?s=1400"
    render() {
        return (
            <div>
                <h1>Event name</h1>
                <div className="row">
                    <div className="col-md-7">
                        <img src={this.imageurl} className="img-fluid "></img>
                        <p className="text-muted">This is a caption</p>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <ul>
                            <li>
                                <b>Location: </b>
                                Madison Square Garden, New York City, NY
                            </li>
                            <li>
                                <b>Date: </b>
                                Thu May 22 2020
                            </li>
                            <li>
                                <b>Doors open: </b>
                                7:00 PM
                            </li>
                            <li>
                                <b>Tickets: </b>
                                <a>Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                    This is a long paragraph with the description of the event.
                </p>

            </div>
        )
    }
}