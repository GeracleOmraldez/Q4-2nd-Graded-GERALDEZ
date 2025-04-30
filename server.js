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


// Read from the JSON file
app.get('/', (req, res) => {
 
  res.render("index.hbs")
});



const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});