const express = require('express');
const app = express();
const config = require('./config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(config.port, () => {
  console.log(`Server is listening on ${config.url}`);
});
