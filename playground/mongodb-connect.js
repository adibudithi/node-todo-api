// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Adi',
  //   age: 19,
  //   location: 'Chicago'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  client.close();
});
