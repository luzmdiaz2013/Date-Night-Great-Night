
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//For authentication
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//start the app
const app = express();
require('dotenv').config();

//bodyParser set up
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


//method override
app.use(methodOverride('_method'));

//config
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//static files
app.use(express.static('public'));

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config port environmental variable or manually
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ALL GOOD on port ${PORT}`)
});


//Index route
app.get('/', (req, res) => {
  res.render('index')
  });

//route requires
const dateNightRoutes = require('./routes/routes.js');
app.use('/dateNights', dateNightRoutes);


const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);



//Error handler
app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});


