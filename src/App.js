import React, { Component } from 'react';
import inventory, { categories } from './inventory';

import Button from './components/button';
import Item from './components/item';

import './App.css';

class App extends Component {
  state = {
    currentCat: []
  };

  buttonClasses(cat) {
    let active = false;

    this.state.currentCat.forEach(c => {
      if (c === cat) {
        active = true;
      }
    });

    return active ? 'button active' : 'button';
  }

  allButtonClasses() {
    return this.state.currentCat.length === 0 ? 'button active' : 'button';
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
      .filter(item => {
        let selected = false;
        if (this.state.currentCat.length === 0) {
          selected = true;
        } else {
          this.state.currentCat.forEach(cat => {
            if (cat === item.category) {
              selected = true;
            }
          });
        }
        return selected;
      })
      .map(({ id, name, price, description }) => (
        <Item key={id} name={name} price={price} desc={description} />
      ));
  }

  changeCategory(cat) {
    let current = this.state.currentCat;
    let found = false;

    if (cat !== 'All') {
      for (let i = 0; i < current.length; i++) {
        if (current[i] === cat) {
          found = true;
          current.splice(i, 1);
        }
      }

      if (!found) {
        current.push(cat);
      }
    } else {
      current = [];
    }

    this.setState({
      currentCat: current
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Select Categories</h1>

        <div>
          <span key="All">
            <Button
              value="All"
              classes={this.allButtonClasses()}
              onClick={c => this.changeCategory(c)}
            />
          </span>
          {this.getCategories()}
        </div>

        <div>{this.getInventory()}</div>
      </div>
    );
  }
}

export default App;
