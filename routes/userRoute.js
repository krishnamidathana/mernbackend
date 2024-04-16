import express  from 'express';
import {create ,getAll ,getOne ,update ,deleteUser} from '../controller/userController.js' ;


// Create an instance of the Express router
const route = express.Router()

// Define routes for CRUD operations on user data
route.post("/create" , create ); // Route for creating a new user
route.get("/getall" , getAll ); // Route for getting all users
route.get("/getone/:id" , getOne ); // Route for getting a single user by ID
route.put("/update/:id" , update ); // Route for updating a user by ID
route.delete("/delete/:id" , deleteUser );  // Route for deleting a user by ID


// Export the router to be used in other parts of the application
export default route;
