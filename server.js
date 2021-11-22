const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const config = require('./config');
const policyRouter = require('./routes/policyRouter');

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.setTimeout(120000, () => {
      console.log('Request has timed out.');
          res.send(408);
      });

  next();
});

app.use('/api', policyRouter);

app.listen(config.port, () => {
  console.log(`Server is listening on ${config.url}`);
});
