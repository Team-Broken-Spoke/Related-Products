const express = require('express');
const app = express();
const port = 1337;


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});