import React, { Component } from 'react';
import './App.css';
import Counter from './counter'
import Input from './input'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store}/>
        <br/><br/><br/><br/>
        <Input store={store}/>
      </div>
    );
  }
}

export default App;
