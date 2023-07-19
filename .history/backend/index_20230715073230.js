const express = require('express');

const app = express();

app.get("/", (req, res) => {

    res.json({online :"compiler"});
  
});
