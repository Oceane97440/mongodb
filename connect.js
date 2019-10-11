
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://oceane:password974@cluster0-0qsjo.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("calc").collection("calcul");
  // perform actions on the collection object
  client.close();
});

