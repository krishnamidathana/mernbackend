import express  from 'express' ;
import mongoose from 'mongoose' ;
import bodyParser from 'body-parser' ;                              
import dotenv from 'dotenv';
import cors from 'cors' ;
import route from './routes/userRoute.js';

// Create an Express application
const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors()) ;

// Load environment variables from .env file
dotenv.config() ;


// Define the port for the server to listen on
const PORT = process.env.PORT || 7000 ;
// Get the MongoDB URL from environment variables
const URL = process.env.MONGOURL ;


// Connect to MongoDB
mongoose.connect(URL).then(()=>{
console.log('db connected successfully')
  // Start the server once MongoDB is connected
app.listen(PORT ,()=>{console.log(`server is running on port ${PORT}`)})
}).catch(error => console.log(error));

app.use('/api' , route)
