var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registrarCliente', { title: 'Registro de Clientes' });
});

module.exports = router;
