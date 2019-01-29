import React, { Component } from 'react';
import inventory, { categories } from './inventory';
import './App.css';

class App extends Component {
  getCategories() {
    return categories.map(cat => (
      <span key={cat}>
        <button>{cat}</button>
      </span>
    ));
  }

  getInventory() {
    return inventory.map(item => (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>

        <div>{this.getCategories()}</div>

        <div>{this.getInventory()}</div>
      </div>
    );
  }
}

export default App;
