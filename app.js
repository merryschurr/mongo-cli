var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  // if(allChoice == "all"){
  //   collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   });
  // } else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }

  var singleChoice = prompt("Type restaurants name to display a specific restaurant.");
  if(singleChoice === "name"){
  	db.collection.find(query).forEach(function(err, doc) {
  { console.log("No known restaurant.")}
});
  }

  var addChoice = prompt("Would you like to create a new restaurant?");
  if(addChoice == "all"){
    collection.insert().toArray(function(err, doc){
      console.log(doc);
    });
};

