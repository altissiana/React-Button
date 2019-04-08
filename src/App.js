import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    likes: "likes"
  }

  add = (e) => {
    this.state.count === 0 ? this.setState({ likes: "like" }) : this.setState({ likes: "likes" })
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="button" onClick={this.add}>
        <button className="bt" type="button">{this.state.count}<br></br>{this.state.likes}</button>
      </div>
    );
  }

}


export default App;
