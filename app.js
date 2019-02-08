const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

require('./config/routes')(app);

app.listen(port, () => `Server running on ${port}`);