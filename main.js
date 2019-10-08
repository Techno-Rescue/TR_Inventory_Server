//Settings
const config = require('./configs/config.js');

//App Requires
const Sequelize = require('sequelize');
const morgan = require('morgan');
const pug = require('pug');
const path = require('path');
var express = require('express');
var session = require('express-session');
const fileUpload = require('express-fileupload');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const passport = require('passport');
var ActiveDirectoryStrategy = require('passport-activedirectory');
const app = express();

//Route Requirements
const indexRoutes = require('./routes/index');
const clientRoutes = require('./routes/client');
const contactRoutes = require('./routes/contact');
const jobRoutes = require('./routes/job');

//Render
app.set('view engine', 'pug');

//Error Handling
app.use(morgan('dev'));

//Models
var models = require("./models");
models.client.hasMany(models.contact, {foreignKey: 'client_id'});
models.client.hasMany(models.job, {foreignKey: 'client_id'});
models.job.belongsTo(models.client, {foreignKey: 'client_id'});
models.inventory.belongsTo(models.job, {foeignKey: 'invoice'});
models.contact.belongsTo(models.client, {foreignKey: 'client_id'});
models.sequelize.sync({force: false}).then(function() {console.log('Nice! Database looks fine')}).catch(function(err) {console.log(err, "Something went wrong with the Database Update!")});

//Session
app.use(session({ secret: config.SESSION_SECRET, resave: true, saveUninitialized: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', indexRoutes);
app.use('/client', clientRoutes);
app.use('/contact', contactRoutes);
app.use('/job', jobRoutes);

//404 Handler
app.use((req, res, next) => {const error = new Error('Page Not Found');error.status = 404;next(error);})

//Other Error Handler
app.use((error, req, res, next) => {res.status(error.status || 500);res.render('404', {errormsg: error.message})})

module.exports = app;

//Server
const server = app.listen(7000, () => {console.log(`Express running → PORT ${server.address().port}`);});