import mongoose from 'mongoose'


// Define the schema for the user data
const userSchema = new mongoose.Schema({
    fname:{
        type:String ,
        required: true
    },
    lname:{
        type:String ,
        required: true
    },
    countryCode1:{
        type:String ,
    },
    mobileNumber:{
        type:Number ,
        required: true
    },
    countryCode2:{
        type:String ,
    },
    altMobileNumber:{
        type:Number ,
        required: true
    },
    email:{
        type:String ,
        required: true
    },
   

},{timestamps:true},
)
// Export the mongoose model for the user data
export default mongoose.model('user' , userSchema)