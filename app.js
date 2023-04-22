const express = require("express");
const app = express(); // app could be pizza, it's just an instance of express

app.use(express.static("public"));

// routes:
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (request, response) => {
  response.sendFile(__dirname + "/views/work.html");
});

app.get("/photo-gallery", (request, response) => {
  response.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
