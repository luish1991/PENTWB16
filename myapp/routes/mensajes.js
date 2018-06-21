var express = require('express');
var router = express.Router();


router.get('/registroCompletado', function(req, res, next) {
  res.render('registroCompletado',{ title: 'Registro de Cliente Completado'});
});

router.get('/registroFallido', function(req, res, next) {
  res.render('registroFallido',{ title: 'Ocurrio un error al registrar al cliente'});
});

router.get('/eliminacionCompletado', function(req, res, next) {
  res.render('registroCompletado',{ title: 'Se ha eliminado el cliente'});
});

router.get('/eliminacionFallido', function(req, res, next) {
  res.render('registroFallido',{ title: 'Ocurrio un error al eliminar al cliente'});
});



module.exports = router;
