import React, { Component } from 'react'



export default class Form extends Component {


  render () {
  return (
    <div>
    <form onSubmit={this.props.editing ? (e) => this.props.patchRequest(e, this.props.message, this.props.name, this.props.id) : (e) => this.props.postMessage(e, this.props.message, this.props.name)}>
      <label>Message</label>
        <input placeholder={this.props.message} onChange={this.props.handleMessage}/>
      <label>Name</label>
        <input placeholder={this.props.name} onChange={this.props.handleName}/>
        <button>Submit Message</button>
      </form>
      </div>
  )
}
}
