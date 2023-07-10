const fs = require("fs");
fs.unlink("node_file.txt", (err) => {
  err
    ? console.log("contains error", err)
    : console.log("successfully deleted");
});
