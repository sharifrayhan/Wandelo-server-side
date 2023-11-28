const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const globalErrorHandler = require('./src/middlewares/globalErrorHandler');
const crudErrorHandler = require('./src/middlewares/crudErrorHandler');
const packageController = require('./src/controllers/packageController'); 
const guidesController = require('./src/controllers/guidesController'); 
const userController = require('./src/controllers/userController'); 
const authController = require('./src/controllers/authController');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors({
    origin: [
      "http://localhost:5173"
    ],
    credentials: true
  }))
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
const connectDB = require('./src/config/mongoose');
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.get('/', (req, res) => {
    res.send('Welcome to Wandelo Server!')
  })

// For Packages

app.get('/packages', packageController.allPackages);
app.get('/packages/:id', packageController.singlePackage);
app.post('/packages', packageController.createPackage);
app.put('/packages/:id', packageController.updatePackage);
app.delete('/packages/:id', packageController.deletePackage);

// For Guides

app.get('/guides', guidesController.allGuides);
app.get('/guides/:id', guidesController.singleGuide);



// Users
app.post('/users', userController.createUser);
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getSingleUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// For Tokens
app.post('/jwt', authController.login);
app.post('/logout', authController.logout);

// Global Error Handler
app.use(globalErrorHandler);

// Crud Error Handler
app.all('*', crudErrorHandler);


