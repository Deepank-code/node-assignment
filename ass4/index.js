const fs = require("fs");

fs.appendFile(
  "./ass3/nodejs_architecture.txt",
  "It provides fast delivery. Node. js is a proven way to make the time-to-market cycle shorter It offers easy scalability. Node more scalable than PHP or Ruby, but it is way easier to scale than other backend technologies It targets all major platforms. Among the advantages of using Node",
  (err) => {
    if (err) {
      return console.log("error...", err);
    }
    console.log("successfully appended");
  }
);
