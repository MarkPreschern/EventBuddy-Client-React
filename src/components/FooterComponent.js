import React from 'react'

export default class FooterComponent extends React.Component {
    render() {
        return(
            <footer className="EB-footer mt-5 text-center">
                <div className="row pt-3">
                    <div className="col-sm-4 col-12">
                        <h6 className="on-dark-background">EventBuddy</h6>
                        <p>Like an event, message a friend!</p>
                    </div>
                    <div className="col-sm-4 col-12">
                        <h6 className="on-dark-background">About Us</h6>
                        <p>EventBuddy is a networking application that facilitates communication between users based on mutual event interests.</p>
                    </div>
                    <div className="col-sm-4 col-12">
                        <h6 className="on-dark-background">Contact Us</h6>
                        <p>
                            Mark: preschern.m@husky.neu.edu<br/>
                            Danny: tran.duy@husky.neu.edu
                        </p>
                    </div>
                </div>
                <div className="text-center on-dark-background pb-3">
                    <small>© 2020 Copyright:
                        CS4550 Summer 1 2020 - Mark Preschern & Duy (Danny) Tran</small>
                </div>
            </footer>
        )
    }
}