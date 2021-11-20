const express = require('express');
const morgan = require('morgan');
const app = express();
const config = require('./config');
const policyRouter = require('./routes/policyRouter');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', policyRouter);

app.listen(config.port, () => {
  console.log(`Server is listening on ${config.url}`);
});
