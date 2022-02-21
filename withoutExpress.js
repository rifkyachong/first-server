const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile(__dirname + "/html/menu_index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }

        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      });
    }

    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200, {
        "content-type": mime.getType(path.extname(req.url)),
      });
      res.end(data);
      return;
    });
  })
  .listen(8080);
