import React from 'react'

export default class ChatBubbleComponent extends React.Component {
    state = {
        userId: this.props.userId,
        messageUserId: this.props.messageUserId,
        incoming: true
    }

    componentDidMount() {
        if(this.state.messageUserId === this.state.userId) {
            this.setState({
                incoming: true
            })
        } else {
            this.setState({
                incoming: false
            })
        }
    }


    render() {
        return(
            <div className="row d-flex ">
                {
                    this.state.incoming &&
                    <div className="EB-sent-message">
                        <small>Danny Tran</small>
                        <div className="EB-receive-bubble">
                            hello this is a message sent from danny
                        </div>
                    </div>
                }
                {
                    !this.state.incoming &&
                    <div className="">
                        <small>Mark Preschern</small>
                        <div className="EB-sent-bubble">
                            hello this is a message received from Mark
                        </div>
                    </div>
                }
            </div>
        )
    }
}