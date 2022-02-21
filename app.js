const fs = require("fs");
const http = require("http");
const path = require("path");

http
  .createServer((req, res) => {
    const dir = __dirname + "/database/img/es-jeruk.png";
    fs.readFile(dir, (err, data) => {
      console.log(data);
      res.writeHead(200, { "content-type": "image/png" });
      res.end(data);
    });
  })
  .listen(8080);

// const express = require("express");

// myServer.use("/css", express.static(__dirname + "/css"));
// myServer.use("/js", express.static(__dirname + "/js"));
// myServer.use("/database", express.static(__dirname + "/database"));

// myServer.get("/", (req, res) => {
//   res.sendFile(__dirname + "/html/menu_index.html");
// });

// myServer.listen(8080, () => {
//   console.log("server is listening to port 8080 ...");
// });
