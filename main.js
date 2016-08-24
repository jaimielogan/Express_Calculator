var express = require("express");
var app = express();
var port = 5000;

var add = function(a,b){
  return (a+b).toString();
};

var sub = function(a,b){
  return (a-b).toString();
};

var mult = function(a,b){
  return (a*b).toString();
};

var div = function(a,b){
  return (a/b).toString();
};

app.get('/:operator/:num1/:num2', function(req, res){
  var number1 = req.params.num1;
  var number2 = req.params.num2;
  number1 = Number(number1);
  number2 = Number(number2);

  if(req.params.operator === "add"){
    res.send(add(number1,number2));
  }
  if(req.params.operator === "sub"){
      res.send(sub(number1,number2));
  }
  if(req.params.operator === "mult"){
    res.send(mult(number1,number2));
  }
  if(req.params.operator === "div"){
    res.send(div(number1,number2));
  }

});


app.listen(port, function(){
  console.log("Listening on port", port);
});
