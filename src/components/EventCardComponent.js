import React from 'react'

export default class EventCardComponent
    extends React.Component {
    imageurl= "https://media.npr.org/assets/img/2016/07/11/jacob-collier2_wide-6e4700e64c8039b9148fa629b871d9afe1dd406f.jpg?s=1400"
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.imageurl} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">
                        <small className="text-muted float-right">
                            Click for more info</small>
                    </p>
                </div>
            </div>
        )
    }
}