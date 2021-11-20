var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {  
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
  next();  
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
