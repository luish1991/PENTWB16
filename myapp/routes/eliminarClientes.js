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

router.get('/', function(req, res, next) {
  db.collection("cliente").find({}).toArray((error,docs)=>{
      if(error){
         res.render('verClientesEliminar', { title: 'Lista de Clientes Registrados',clientes:{}});
      }
      else{
         res.render('verClientesEliminar', { title: 'Lista de Clientes Registrados',clientes:docs});
      }
  });
});

module.exports = router;