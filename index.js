/*********************************************************************/
/****                      DEPENDENCIAS                            ***/
/*********************************************************************/
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

const tasksRoute = require('./routes/tasks_routes');
const registrationsRoute = require('./routes/registrations_routes');
const categoriesRoute = require('./routes/categories_routes');
const sessionsRoute = require('./routes/sessions_routes');

const finUserMiddleware = require('./middleware/find_user');
const authUser = require('./middleware/auth_user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(session({
    secret: ['ehbhhfdfjnfnhfhfnjgd', 'bsdhbbdhhdsjffhjnfd'],
    saveUninitialized: false,
    resave: false
}));

app.use(finUserMiddleware);
app.use(authUser);

app.use(tasksRoute);
app.use(registrationsRoute);
app.use(categoriesRoute);
app.use(sessionsRoute);

app.get('/', function(req, res) {
    res.render('home', { user: req.user });
});

app.listen(3000);