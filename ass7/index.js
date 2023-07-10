const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/pw_skill") {
      res.write(
        "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
      );
      res.end();
    }
  })
  .listen(3000);
