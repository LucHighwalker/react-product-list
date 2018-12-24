# React Product List Challenge

This is a starter project for a React challenge. The goal is to create a page that displays a list of **products** and a list of **categories** for those products. Clicking one of the category buttons should filter the list of products display to only display products in that category. 

Use components to your advantage for this assignment. Whenever possible make a component to simplify your work. 

The starter project provides a `categories` array and an `inventory` array in `inventory.js`. You can import these into any module with: 

`import inventory, { categories } from './inventory'`

- `categories`: `[String]` an Array of category name Strings
- `inventory`: `[Object]` an Array of Objects with the following properties
  - `id`: `Number` a unique number id
  - `name`: `String` a String name of product
  - `description`: `String` a String description of product
  - `price`: `String` a _String_ price with two decimal places
  - `category`: `String` a String category name

For example, the first product in the Array looks like this: 

```JS
{
  'id':1,
  'name':'Duobam',
  'description':'Implemented even-keeled info-mediaries',
  'price':'7.77',
  'category':'Outdoors'
}
```

## Getting functional

Besides using React you will also explore and practice functional programming concepts with `Array.map()`, `Array.filter()`, and `Array.reduce`. 

You will use [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to transform the inventory Objects into a JSX/Components to be displayed by React. 

You will use [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to filter the list of products displayed by category.

The stretch challenges use [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

## Challenges 

Your goal is to follow the steps below and solve the challenges. 

You will fork this repo and start working on your fork. 

**You must commit each time you sit down to work on this project!**

This challenge should take about 3 hours. Be sure to plan that amount of time to spend on the challenges here. 

**Getting Started**

1. Fork this Repo.
1. Post a link to the progress tracker for class.
1. `npm install` to install dependencies
1. `npm start` to run the project at [http://localhost:3000](http://localhost:3000)

From here as you work you should see changes refresh in the browser as you save files. If there is an error you will see this in the browser.

This project was bootstrapped with Create React App see the notes [here](notes/create-react-app-notes.md) for more information. 

## Coding Challenges

**Level 1 challenge** 

Display the categories and products.

1. Challenge: List all of the categories at the top of the page. 
  - Display the categories as buttons. 
  - Use `Array.map()` to transform the `category` array into an array of JSX/Components
  - You can import categories into any module with `import { categories } from './inventory'`
1. Challenge: List all of products below the categories. 
  - Each Product should display with it's name, category, and price. How these are displayed is up to you. 
    - If you add a class name to a JSX element use `className` in place of `class` for example `<div className="product">`. See the documentation for [`className`](https://reactjs.org/docs/faq-styling.html) for more information.
  - You can import the inventory Array into any module with `import inventory from './inventory'`.
  - `inventory` is an Array of Objects with properties: id, name, description, price, and category. See the notes above for more details. 



**Level 2 Challenge**

Add some interaction and functionality. The goal here is to click on a category button to filter the list of products so only products in the chosen category are displayed. 

1. Challenge: Clicking a category should display only products in that category.
  - The parent component, that is the component that is parent to both the product list and the category list, should define the current category on `this.state`.
    - Define state as an object in the constructor
    - Set a property on the state object, something like: `currentCategory`
    - Give it a sensible default value: `this.state = { currentCategory: null }`
  - Add an `onClick` handler for each category button. This should: 
    - Pass the category String/name of the button to the handler.
    - Set `currentCategory` on state with `this.setState({ currentCategory: newCategory })` or something similar. 
  - Use `Array.filter()` to display only products in `inventory` where the category matches. Something like: 
  ```js
  inventory.filter((item) => {
    return item.category === this.state.currentCategory || this.state.currentCategory === null
  })
  ```

**Level 3 Challenges** 

Use components! Whenever possible you should use a component. React uses a component architecture. The component architectrure is a really good thing it makes your projects easier to manage, keeps your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and makes your code more portable. 

1. Make a component that is a category button. 
  - Define this in a module/JS file. Something like: `category-button.js`
  - Be sure to export this. Something like: `export default CategoryButton`
  - Set the label and click function as props, something like: `<CategoryButton label={cat} onClick={() => clickCategory(name) } />`
1. Define a component that is a product.
  - The product component should take in it's id, name, description, and price as props. Alternately it could take an object with these properties. 
  - The product component should display these bits of information in a reasonable way. 

The category button component might look like this. These are inclomplete! You'll need to retool these to fit your project. 

```JS
import { Component } from 'react'

class CategoryButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>
  }
}
```

The product component might look like this:

```JS
import { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.name}</p>
        <p>${this.props.price}</p>
      </div>
    )
  }
}
```


**Level 4 Challenges**

Unless you went rogue, the page is probably looking pretty bland. Better add some styles! 

1. Style the category buttons. Make them look like something people will want to click on. 
  - Use Flex box to put them all in a row. It's okay if they wrap, there are many categories. 
1. Style the products in the list. 
  - Use CSS Grid. You can just set the number of columns with: `grid-template-columns` this should be enough to get all your pro**ducks** in a row so to speak. 

**Level 5 Challenges**

Handling the details. If you've got the items above worked out you'll realize the interface is not very satisfying. You can make it better! 

1. Display All category
  - Add one more button to the list of category buttons. It's label should "All".
  - Clicking this button should display all products.
2. We need to know which category is currently selected. The buttons should reflect. 
  - Define a style to make the currently selected category stand apart from the other buttons.
  - When generating the category elements check the category name against `this.currentCategory` if the names match assign a class to that element, something like `selected-category` remember to use `className` not `class`!
  - You'll need to take into account that the "All" button is it's own category and this category should display all the products! 

Level 6 Challenges 

Okay so you did all of the other challenges and you need something more to do, good for you! 

1. Use `Array.reduce()` to get the sum of all of the prices for all Products. 
  - Remember the prices are stored as Strings you'll need to convert these to numbers. Something like: `Number(item.price)` should work.  
  - Display this somewhere on the page. If you got this far I don't need to add too much explaination here. 
2. Using `Array.reduce()` again, sum the total for currently selected products. In other the sum of all the prices for the products in the currently selected category. 
3. Use `Array.reduce()` to count the number of products in each category. 
  - Display count for each category as "badge" next to the category label in each category button. 

## Some Visuals

Some people like pictures. Here are a few images showing what the project might look like when you are finished, with some notes. 

![picture-1](notes/picture-1.png)

![picture-2](notes/picture-2.png)

![picture-3](notes/picture-3.png)