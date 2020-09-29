import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    user: [],
  }

  fetchUser = (user) => {
    fetch('https://api.github.com/users/salza323')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        user: data.message
      })
    })
    .catch((err) => console.log('error:', err))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Sals GitHub User Card</h1>
        </header>
      </div>
    );
  }
}

export default App;
