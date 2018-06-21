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
  console.log(req.body);
  var campo1=req.body.campo1;
  var campo2=req.body.campo2;
  var campo3=req.body.campo3;
  var campo4=req.body.campo4;

  db.collection("cliente").insertOne({nombre:campo1,apellidos:campo2,correo:campo3,membresia:campo4},function(err, r){

    if(err){
      console.log("Ocurrio un error al guardar");
      res.redirect('/mensaje/registroFallido');
    }
    else{
      res.redirect('/mensaje/registroCompletado');
    }
  });
});

module.exports = router;
