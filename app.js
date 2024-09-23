const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static('public'));



app.listen(5000, ()=>{
    console.log('server running on http://localhost:5000');
});