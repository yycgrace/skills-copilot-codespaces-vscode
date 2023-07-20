// Create web server application with express
// and use it to display comments from a json file

// Import express module
const express = require("express");

// Import file system module
const fs = require("fs");

// Create express application
const app = express();

// Set port to listen to
const port = 3000;

// Set static files folder
app.use(express.static("public"));

// Set view engine to ejs
app.set("view engine", "ejs");

// Set views folder
app.set("views", "./views");

// Set route to display comments
app.get("/", (req, res) => {
  // Read comments from json file
  fs.readFile("./data/comments.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // Parse comments to js object
      const comments = JSON.parse(data);

      // Render index page with comments
      res.render("index", { comments: comments });
    }
  });
});

// Listen to port
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});