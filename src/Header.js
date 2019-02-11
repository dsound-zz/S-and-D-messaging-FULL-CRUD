import React from 'react'
import Form from './Form'


const Header = (props) => {
  return (
    <div>
      <Form
      postMessage={props.postMessage}
      handleMessage={props.handleMessage}
      handleName={props.handleName}
      name={props.name}
      message={props.message}
      editing={props.editing}
      id={props.id}
      patchRequest={props.patchRequest}
      />
      </div>
    )
}

export default Header
