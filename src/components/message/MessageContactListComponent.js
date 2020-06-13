import React from 'react'
import ContactCardComponent from "./ContactCardComponent";

export default class MessageContactListComponent extends React.Component {
    render(){
        return(
            <div className="">
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
                <ContactCardComponent/>
            </div>
        )
    }
}