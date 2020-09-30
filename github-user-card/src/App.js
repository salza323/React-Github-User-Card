import React from 'react';
import './App.css';

import Followers from './Followers'

class App extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    this.fetchUsers(this.state.users)
  }

  fetchUsers = (users) => {
    fetch('https://api.github.com/users/salza323')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        users: data
      })
    })
    .catch((err) => console.log('error:', err))
  }

  render(){
    console.log(this.state.users)
    return (
      <div className="App">
        <header className="App-header">
          <div className='user-container'>
            <h1>Sals GitHub User Card</h1>
            <img width="200px" src={this.state.users.avatar_url} alt={this.state.users.avatar_url}/>
            <h2>{this.state.users.name}</h2>
            <h3>{this.state.users.login}</h3>
            <p>Followers: {this.state.users.followers}</p>
            <p>Following: {this.state.users.following}</p>
            <p>Bio: {this.state.users.bio}</p>
          </div>
        </header>
        <div className = 'followers-container'>
          <Followers/>
        </div>
      </div>
    );
  }
}

export default App;
