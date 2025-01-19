const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", ( req, res ) => {
  res.send("Anong kailangang kong gawin.")
})

app.listen(PORT, () => {
  console.log("Running on port: " + PORT)
})