"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create HTML
// Styles
const fillScreen = [
    "min-width:100vw;",
    "min-height:100vh;",
    "margin:0px;",
].join("");
const centerContentFlex = [
    "display:flex;",
    "flex-direction:column;",
    "align-content:space-around;",
    "justify-content:space-around;",
    "place-items:center;",
].join("");
const style = [
    ...fillScreen,
    ...centerContentFlex,
    "background-color:var(--color-primary);",
].join("");
// Style Globals
const styleGlobals = [
    `* {--color-primary: #60416e;}`,
].join("\\\\n");
// HTML Document
const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Document</title>
  <style>
    ${styleGlobals}
  </style>
</head>
<body
  style=${style}
>
  <h1>Hello World</h1>
  <p>Testing, Testing</p>
</body>
</html>
`;
// Setup server
const http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(page);
}).listen(8080);
