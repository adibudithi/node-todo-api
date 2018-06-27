// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  // db.collection('Users').deleteMany({name: 'Adi'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b331aa767372da095cc811d")}).then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

// client.close();
});
