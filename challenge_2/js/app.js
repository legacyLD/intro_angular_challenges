console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("WdiClass", WdiClass);

function WelcomeController(){
  this.full_name = "LD Dean";
  this.age = "33";
  this.city = "Marietta";
  this.state = "Georgia";
  this.shout =  function(loud) {
    return loud.toUpperCase() + "!";
  }
}

function WdiClass(){
  this.name = "WDI-34";
  this.students = "11";
  this.start = new Date(2016, 11 , 28);
  this.end = new Date(2017, 03 , 03);
  this.daysRem =  function() {
    var today = Date.now();
    var mSec = Math.abs((this.end - today)/60000);
    var result = Math.floor(49.5);
    return result;
  }
}
