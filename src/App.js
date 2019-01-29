import React, { Component } from 'react';
import inventory, { categories } from './inventory';

import Button from './components/button';
import Item from './components/item';

import './App.css';

class App extends React.Component {
  getCategories() {
    return categories.map(cat => (
      <span key={cat}>
        <Button value={cat} />
      </span>
    ));
  }

  getInventory() {
    return inventory.map(({id, name, price}) => (
      <Item 
        key={id}
        name={name}
        price={price}
      />
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
