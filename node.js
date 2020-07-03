const express = require("express");
const app = express()

const port = +process.env.PORT || 3000;
if (isNaN(port) || typeof port !== "number") {
  throw Error(`${port} is not a number.`);
}

app.get("/", (req, res) => res.send(`It is ${new Date()}`));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
