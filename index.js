const express = require("express");
const port = 8002;
const app = express();
const db = require("./config/mongoose");


app.use(express.urlencoded());

app.use("/", require("./routes"));

//port
app.listen(port, function (error) {
  if (error) {
    console.log("Error while starting the app");
    return;
  }
  console.log("Server is up and runnning on port:" + port);
});