// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to retrieve collection', err);
  // });

  db.collection('Users').find({name: 'Adi'}).toArray().then((docs) => {
    console.log('Users: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('user not found', err);
  });

  client.close();
});
