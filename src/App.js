import React, { Component } from 'react';
import inventory, { categories } from './inventory';

import Button from './components/button';
import Item from './components/item';

import './App.css';

class App extends React.Component {
  state = {
    currentCat: 'All'
  };

  buttonClasses(cat) {
    return cat === this.state.currentCat ? 'button active' : 'button';
  }

  getCategories() {
    return categories.map(cat => (
      <span key={cat}>
        <Button
          value={cat}
          classes={this.buttonClasses(cat)}
          onClick={c => this.changeCategory(c)}
        />
      </span>
    ));
  }

  getInventory() {
    return inventory
      .filter(
        item =>
          item.category === this.state.currentCat ||
          this.state.currentCat === 'All'
      )
      .map(({ id, name, price }) => (
        <Item key={id} name={name} price={price} />
      ));
  }

  changeCategory(cat) {
    this.setState({
      currentCat: cat
    });
  }

  render() {
    return (
      <div className="App">
        <h1>current category is {this.state.currentCat}</h1>

        <div>
          <span key="All">
            <Button value="All" classes={this.buttonClasses("All")} onClick={c => this.changeCategory(c)} />
          </span>
          {this.getCategories()}
        </div>

        <div>{this.getInventory()}</div>
      </div>
    );
  }
}

export default App;
