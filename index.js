const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const port = process.env.PORT || 3000;
require("dotenv").config();
const { trainer } = require("./brain/trainer");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

if (!fs.existsSync("./brain/model.json")) {
  console.log("No AI model found.");
  trainer();
}

app.use(
  "/",
  fs.readdirSync("./routes").map((file) => require(`./routes/${file}`))
);

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

