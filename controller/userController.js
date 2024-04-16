import user from '../model/userModel.js'; // Import user model

import transporter from '../email.js'; // Import email transporter


// Function to send confirmation email
const sendConfirmationEmail = async (userData) => {
    try {
      await transporter.sendMail({
        from: 'krishnamidathana456@gmail.com',
        to: userData.email,
        subject: 'confirmation Email',
        text: `Hello ${userData.fname} ${userData.lname},\n\nWelcome  \n\nYou are successfully registered, \n\nRegards,\nKrishna mohan`
      });
      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };



// Controller function to create a new user
export const create = async(req,res)=>{
    try{
const userData = new user(req.body);

if (!userData){
  return res.status(404).json( {msg:"User data not found"})
}

const savedData = await userData.save();
await sendConfirmationEmail(userData);
res.status(200).json({savedData})

    } catch(error) {
        res.status(500).json({error:error})
    }
} 
// Controller function to get all users
export  const getAll = async(req,res)=>{
    try{

        const userData =  await user.find()
        if(!userData){
            return res.status(404).json( {msg:"Users data not found"})
        }
res.status(200).json({userData})
    } catch(error){
        res.status(500).json({error:error})

    }
}

// Controller function to get a single user by ID
export const getOne =async(req,res)=>{
    try{
const id = req.params.id;
const userExist =await user.findById(id);
if(!userExist){
    return res.status(404).json({msg:'User not found'})
}
res.status(200).json(userExist);

    } catch(error){
        res.status(500).json({error:error})

    }
}

// Controller function to update a user
export const update =async(req,res)=>{
    try{
const id = req.params.id;
const userExist =await user.findById(id);
if(!userExist){
    return res.status(401).json({msg:'User not found'})
}
const updatedData = await user.findByIdAndUpdate(id ,req.body ,{new:true})
res.status(200).json(updatedData)
    } catch(error){
        res.status(500).json({error:error})

    }
}

// Controller function to delete a user
export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist =await user.findById(id);
        if(!userExist){
            return res.status(404).json({msg:'User not found'})
        }

        await user.findByIdAndDelete(id)
        res.status(200).json({msg:'user deleted successfully'})
    } catch(error){
        res.status(500).json({error:error})

    }
}




