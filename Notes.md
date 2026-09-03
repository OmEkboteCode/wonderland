# WonderLand

## Getting Started

- Database Set Up

- REST Apis for CRUD

## Model: Listing

Places(apartment, flat, house, villa, hotel)

- title String

- description String

- image(url) String

- price Number

- location String

- country String


## Initialize Database

- init

- data.js and index.js


## Index Route

- GET /listings  all listings

## Show Route

- GET /listings/:id

- toLocalString: converts any number into string format with commas

ex: num.toLocalString("en-US")

## Create: New & Create Route

- GET /listings/new  Form submit

- POST /listings

## Update: Edit & Update Route

- GET /listings/:id/edit  edit form submit

- PUT /listings/:id


## Delete: Delete Route

- DELETE /listing/:id


## Creating Boilerplate

- What is EJS Mate

- npm i ejs-mate
- const ejsMate = require("ejs-mate");
- app.engine('ejs', ejsMate);

- Create a single boilerplate for all page

- <% layout("/layouts/boilerplate") %>
- <div class="container" <%- body %>>

## Creating NavBar

- Use bootstrap navbars


## Add-on Concepts

- The JavaScript ternary operator (also called the conditional operator) is a concise, three-part shorthand used to write simple if...else statements. It evaluates a condition and returns one value if that condition is true, and another if it is false.
```js
condition ? expressionIfTrue : expressionIfFalse;
```

- 🛠️ Setters (set)Setters intercept data when you assign a value to a field. Use them to enforce formatting, normalize data, or hash values.

```js
const userSchema = new mongoose.Schema({
  // Automatically convert email to lowercase before saving
  email: {
    type: String,
    set: v => v.toLowerCase()
  }
});
```
- How it works: If you run user.email = 'JOHN@Example.com', Mongoose runs the setter function and actually saves 'john@example.com' to the database.

- 🔍 Getters (get)Getters intercept data when you access a field. Use them to format raw database data for user display without changing the stored data.

```js
productSchema = new mongoose.Schema({
  // Store prices as integers (cents) to avoid floating-point errors
  priceInCents: {
    type: Number,
    get: v => (v / 100).toFixed(2) // Convert to dollar string on read
  }
});
```
- How it works: If the database stores 1999, accessing product.priceInCents will return "19.99".