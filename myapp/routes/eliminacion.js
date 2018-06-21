var express = require('express');
var router = express.Router();

var mongo = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017';
const dbName='clientes';
var db = null;

mongo.connect(url,function(err,client){
        console.log("Conectado a Mongo");
        db = client.db(dbName);
}); 

router.post('/', function(req, res, next) {
  var campo1=req.body.campo1;
  db.collection("cliente").deleteOne({correo:campo1},function(err, obj){

    if(err){
      console.log("Ocurrio un error al eliminar");
      res.redirect('/mensaje/eliminacionFallido');
    }
    else{
      console.log(obj.result);
      if(obj.result.n>0){
        res.redirect('/mensaje/eliminacionCompletado');
      }
      else{
        res.redirect('/mensaje/eliminacionFallido');
      }
    }
  });
});

module.exports = router;