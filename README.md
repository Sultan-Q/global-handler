# handle-this

(handle-this) is a ⚡️ lightweight tiny package with ZERO-Dependencies that simplifies error handling in Express.js by eliminating the need for manual try-catch blocks in every API request. 🚀

## Installation

You can install HandleThis using npm:
`npm install handle-this`

## Usage

To use HandleThis in your Express.js application, import it and wrap your route handlers with the provided middleware. Here's an example:

To import the `handle-this` package, you have two options depending on your environment:

- ES6-style import:

  ```javascript
  import handleThis from "handle-this";
  ```

- CommonJS-style require:

```javascript
const handleThis = require("handle-this");
```

## Example

```javascript
const express = require("express");
const handleThis = require("handle-this");

const app = express();

// Wrap your route handlers with handleThis middleware
app.get(
  "/api/users",
  handleThis(async (req, res) => {
    // Your route logic here
  })
);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```
