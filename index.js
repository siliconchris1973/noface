var express   = require('express')
    , http    = require('http')
    , async   = require('async')
    , multer  = require('multer')
    , upload  = multer({ dest: 'uploads/' })
    , exphbs  = require('express-handlebars')
    , easyimg = require('easyimage')
    , _       = require('lodash')
    , cv      = require('opencv');

// MIME types for image uploads
var exts = {
  'image/jpeg': '.jpg',
  'image/png' : '.png',
  'image/gif' : '.gif'
};

var port = 8080;
var app = express();
app.use(express.static(__dirname + '/public'))

// Configure Handlebars
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'default' }));
app.set('view engine', '.hbs');

/**
 * This is a placeholder for the application code
 */

http.createServer(app)
  .listen(port, function(server) {
    console.log('Listening on port %d', port);
  });
