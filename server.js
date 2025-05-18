// Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Create Express application
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from 'public' directory

// Set up handlebars as the template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Updated path for views

// Initialize leaderboard.json if it doesn't exist
const usersFilePath = path.join(__dirname, 'data', 'todolist.json');
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  console.log('Creating data directory...');
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(usersFilePath)) {
  console.log('Creating users.json file...');
  fs.writeFileSync(usersFilePath, '{}');
}


// Routes to show the different CRUD processes
app.post('/save', (req, res) => {
  const { taskNumber, taskDescription, taskDate, taskStatus } = req.body;
  
  const filePath = path.join(__dirname, 'data', 'todolist.json');
  const todoList = JSON.parse(fs.readFileSync(filePath));

  todoList[taskNumber] = {
    taskDescription: taskDescription,
    taskDate: taskDate,
    taskStatus: taskStatus
  };

  fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2));
  
  res.redirect('/');
})

// Read from the JSON file
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'todolist.json');
  let todoList = {};
  
  if (fs.existsSync(filePath)) {
    todoList = JSON.parse(fs.readFileSync(filePath))
  }
  
  res.render("index", {todoList});
});

app.get('/delete', (req, res) => {
  const {taskNumber} = req.query;
  
  const filePath = path.join(__dirname, 'data', 'todolist.json')
  const todoList = JSON.parse(fs.readFileSync(filePath))

  delete todoList[taskNumber];
  
  fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2))
  
  res.redirect('/');
})



const PORT = 3000;
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
