/*********************************************************************/
/****                      DEPENDENCIAS                            ***/
/*********************************************************************/
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');

const app = express();

const tasksRoute = require('./routes/tasks_routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

app.use(tasksRoute);

app.listen(3000);