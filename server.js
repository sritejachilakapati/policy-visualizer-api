const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
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

app.get('/', (req, res) => {
  res.send('Server is running successfully!');
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening...`);
})
