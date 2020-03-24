import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      friend: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  changeHandler(event) {
    this.setState({
      friend: event.target.value
    });
  }

  addFriend() {
    // this.state.friendsList.push(this.state.friend);
    this.setState({
      friendsList: [...this.state.friendsList, this.state.friend],
      friend: ''
    })
  }

  deleteFriend(index) {
    console.log('delete button fired')
    // this.state.friendsList.splice(index, 1);
    const filtered = this.state.friendsList.slice()
    filtered.splice(index, 1)
    this.setState({
      friendsList: filtered
    })
  }

  render() {
    const mappedFriends = this.state.friendsList.map((friend, index) => {
      return <div>
        <span key={index}>{friend}</span>
        <button onClick={() => this.deleteFriend(index)} />
      </div>;
    });
    return (
      <div className="App">
        <div>{mappedFriends}</div>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.friend}
        />
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}

export default App;