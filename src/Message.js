import React from 'react'



const Message = (props) => {
  return (
    <div>
      <ul>
        <li>{props.message.message} - {props.message.real_name}</li>
        <button onClick={() => props.deleteMessage(props.message.id)}>Delete</button>
        <button onClick={() => props.editMessage(props.message.message, props.message.real_name, props.message.id)}>Edit and Forget It</button>
      </ul>
    </div>
  )

}

export default Message
