var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var menuCliente = require('./routes/menu');
var registrarCliente = require('./routes/registrarCliente');
var verClientes = require('./routes/verClientes');
var mensajes = require('./routes/mensajes');
var registro = require('./routes/registro');
var eliminarClientes = require('./routes/eliminarClientes');
var eliminacion=require('./routes/eliminacion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuCliente);
app.use('/menu', menuCliente);
app.use('/registrar',registrarCliente);
app.use('/ver',verClientes);
app.use('/mensaje',mensajes);
app.use('/registro',registro);
app.use('/eliminar',eliminarClientes);
app.use('/eliminacion',eliminacion);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
