const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
