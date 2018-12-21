# React Product List

This is a starter project for a react challenge. The goal is to create a page that displays a list of products and a list of categories for those products. Clicking one of the category buttons should filter the list of products display to only those products in that category. 

Use components to your advantage for this assignment. Whenever possible make a component to simplify your work. 

The starter project provides a `categories` array and an `inventory` array in `inventory.js`. You can import these into any module with: 

`import inventory, { categories } from './inventory'`

- `categories` is an Array of category name Strings
- `inventory` is an Array of Objects with the following properties
  - `id` a unique number id
  - `name` a String name of product
  - `description` a String description of product
  - `price` a _String_ price with two decimal places
  - `category` a String category name

For example: 

```JS
{
  'id':1,
  'name':'Duobam',
  'description':'Implemented even-keeled info-mediaries',
  'price':'7.77',
  'category':'Outdoors'
}
```

## How it should work

Besides just listing categories and products you also need to add some functionality. 

Clicking a category should display only products in that category in the list of products. 

## Getting functional

Besides using React you will also explore and practice functional programming concepts with `Array.map()`, `Array.filter()`, and `Array.reduce`. 

You will use [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to transform these Objects into a JSX/Components to be displayed by React. 

You will use `Array.filter()` to filter ther list of products display 

This project was bootstrapped with Create React App see the notes [here](create-react-app-notes.md). 

## Challenges 

**Getting Started**

1. Fork this Repo
1. `npm install` to install dependencies
1. `npm start` to run the project at [http://localhost:3000](http://localhost:3000)

**Coding Challenges**

Level 1 challenge 

Display the categories and products. 

1. List all of the categories at the top of the page. 
  - Display the categories as buttons. 
  - Use `Array.map()` to transform the `category` array into an array of JSX/Components
  - You can import categories into any module with `import { categories } from './inventory'`
1. List all of products at the bottom of the page. 
  - Each project should display with it's name, category, and price. How these are displayed is up to you. 
    - If you add a class name to a JSX element use `className` in place of `class` for example `<div className="product">`
  - You can import the inventory Array into a module with `import inventory from './inventory'`
  - `inventory` is an Array of Objects with properties: id, name, description, price, and category. See the notes above for more detail. 

Level 2 Challenge 

Add some interaction and functionality.

1. Clicking a category should display only products in that category. Do this by:
  - The parent component, that is the component that is parent to both the product list and the category list, should define the current category on it's state
    - Define state as an object in the constructor
    - Set a property on the state object, something like: `currentCategory`
  - Add an `onClick` handler for each category button. This should: 
    - Pass it's category String/name to the handler.
    - Set `currentCategory` on state with `this.setState({ currentCategory: newCategory })` or something similar. 
  - Use `Array.filter()` to display only products in `inventory` where the category matches. 

Level 3 Challenges 

Use components! Whenever possible you should use a component. React uses a component architecture. The component architectrure is a really good thing it makes your projects easier to manage, keeps your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and makes your code more portable. 

1. Make a component that is a category button. 
  - Define this in a module/JS file. Something like: `category-button.js`
  - Be sure to export this. Something like: `export default CategoryButton`
  - Set the label and click function as props, something like: `<CategoryButton label={cat} onClick={() => clickCategory(name) } />`
1. Define a component that is a product. This will display a 

Level 4 Challenges 

Unless you went rogue, the page is probably looking pretty bland. Better add some styles. 

1. Style the category buttons. Make these look like buttons. Make them look like something people will want to click on. 
  - Use Flex box to put them all in a row. It's okay if they wrap, there are many categories. 
1. Style the products in the list. 
  - Use CSS Grid. You can just set the number of columns with: `grid-template-columns` this should be enough to get all your pro**ducks** in a row so to speak. 

Level 5 Challenges 

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
