var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'), 
    controller = require('./controller');
const hbs = require('hbs');

const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var routes = require('./routes');
routes(app);

//route untuk manampilkan form
app.get('/postblog',(req, res) => {
    //render file form.hbs
    res.render('form');
  });

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
