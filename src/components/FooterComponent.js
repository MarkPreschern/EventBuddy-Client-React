import React from 'react'

export default class FooterComponent extends React.Component {
    render() {
        return(
            <div className="EB-footer mt-5 text-center">
                <div className="row pt-3">
                    <div className="col-4 ">
                        <h5 className="on-dark-background">EventBuddy</h5>
                        <p>Bring a buddy to your next event!</p>
                    </div>
                    <div className="col-4">
                        <h6 className="on-dark-background">About Us</h6>
                        <p>EventBuddy is a location-based networking application
                            that facilitates communication between users based on mutual event interests.</p>
                    </div>
                    <div className="col-4">
                        <h6 className="on-dark-background">Contact Us</h6>
                        <p>+1 (000) 000-0000</p>
                        <p>contact@eventbuddy.com</p>
                    </div>
                </div>
                <div className="text-center on-dark-background pb-3">
                    <small>© 2020 Copyright:
                        CS4550 Summer 1 2020 - Mark Preschern & Duy (Danny) Tran</small>
                </div>
            </div>
        )
    }
}