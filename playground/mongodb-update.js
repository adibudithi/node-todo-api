// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b33233e613a13f54d6cb2be")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndUpdate({name: 'Ashwin'}, {
    $set: {name: 'Adi'},
    $inc: {age: 1}
  }, {returnOriginal: false})
  .then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

  // client.close();
});
