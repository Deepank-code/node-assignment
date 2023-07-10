const fs = require("fs");

fs.readFile("./ass3/nodejs_architecture.txt", (err, data) => {
  if (err) {
    return console.log("error...", err);
  }
  console.log(data.toString());

  console.log("sucessfully wrote in this file");
});
