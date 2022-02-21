const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");
console.log(content);

module.exports.content = content;
