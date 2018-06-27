var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'study for test'
// });
//
// newTodo.save().then((doc) => {
//   console.log('todo saved', doc);
// }, (err) => {
//   console.log('unable to save todo', err);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'adibudithi@gmail.com',
});

newUser.save().then((doc) => {
  console.log('user saved', doc);
}, (err) => {
  console.log('unable to save user', err);
});
