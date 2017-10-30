// const express = require('express');
// const logger = require('morgan');
// const path = require('path');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const passport = require('passport');

// const app = express();
// require('dotenv').config();

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`ALL GOOD on port ${PORT}`)
// });

const express = require('express');
const logger = require('morgan');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('index', {
    auth: (req.user) ? true : false,
  });
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);
const todoRoutes = require('./routes/todo-routes');
app.use('/todos', todoRoutes);

app.use('*', (req, res) => {
  res.status(400).send('Not Found');
});
