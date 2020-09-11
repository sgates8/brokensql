//THIS FILE NEEDS TO BE FINISHED Y'ALL

var express = require('express');
var mysql = require('mysql');
var app = express();
var path= require("path");

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res)=> {
  res.sendFile(path.join(__dirname, "/index.html"));
})

app.post("/", (req,res)=> {
  console.log(req.body);

  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;

  var regexUN = /([A-Za-z0-9]){2,15}/;
  var regexName = /^([A-Za-z]{2,25})(\s)*([A-Za-z]{2,25})?$/;
  var regexEmail = /([[a-zA-Z_.0-9]+@[a-zA-Z_.0-9]+\.[a-zA-Z]{2,3}$)/;

  if(regexUN.test(username)){
    res.send(username);
  } else {
    res.send('invalid username');
  }

   if(regexName.test(name)){
     res.send(name);
   } else {
     res.send('invalid name');
   }

   if(regexEmail.test(email)){
     res.send(email);
   } else {
     res.send('invalid email');
   }
  });

var connection = mysql.createConnection({
    host     : 'localhost3306',
    user     : 'root',
    database : 'brokensql',
    password : ''
  });

  connection.connect();

//connection.query('select * from customers where idusers = ? AND name = ? AND username = ? AND email = ?', [
  //req.body.idusers,
 // req.body.name,
 // req.body.username,
 // req.body.email
 // ],function (error, results, fields) {
  //if (error) throw error;
 // console.log('The solution is: ', results);
//});

connection.end();

module.exports = app;

app.listen(8080);
