import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageContainer from './MessageContainer'
import Header from './Header'

  const API = "http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages"

class App extends Component {
 state = {
   messages: [],
   message: "",
   name: "",
   editing: false,
   id: 0
 }

  componentDidMount ()  {
   fetch(API)
   .then(r => r.json())
   .then(data => {

     this.setState({ messages: data })
   })
  }

  deleteMessage = (messageId) => {
     fetch(`${API}/${messageId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(() => fetch(API))
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({ messages: data })
    })
  }

  postMessage = (e, message, realName) => {
      e.preventDefault()
      this.setState(prevState => {
        return { messages: [{real_name: realName, message: message, }, ...prevState.messages] }
      }, () => console.log(this.state.messages))
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
            message: { message: message, real_name: realName }
        })
      })
    }

    handleMessage = (e) => {
      this.setState({
        message: e.target.value
      }, () => console.log(this.state.message))
    }

    handleName = (e) => {
      this.setState({
        name: e.target.value
      }, () => console.log(this.state.name))
    }

    editMessage = (message, name, id) => {
      this.setState(prevState => {
        return {message: message,
        name: name,
        editing: !prevState.editing,
        id: id}
      })
    }

    patchRequest = (e, message, name, id) => {
      e.preventDefault()
      fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          message: {message: message, real_name: name}
        })
      })
      .then(() => fetch(API))
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({ messages: data })
      })
    }


  render() {

    return (

        <div>
          <Header
          postMessage={this.postMessage}
          handleMessage={this.handleMessage}
          handleName={this.handleName}
          name={this.state.name}
          message={this.state.message}
          id={this.state.id}
          editing={this.state.editing}
          patchRequest={this.patchRequest}
          />
          <MessageContainer messages={this.state.messages} deleteMessage={this.deleteMessage} editMessage={this.editMessage}/>
        </div>

    );
  }
}

export default App;
