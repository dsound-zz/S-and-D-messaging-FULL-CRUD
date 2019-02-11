import React from 'react'
import Message from './Message'


const MessageContainer = (props) => {
  const messageMapper = () => {
    return props.messages.map(message => {
     return  <Message key={message.id} message={message} deleteMessage={props.deleteMessage} editMessage={props.editMessage}/>
    })
  }
  return (
    <div>
      <h1>Messages</h1>
       {messageMapper()}
    </div>

  )
}

export default MessageContainer
