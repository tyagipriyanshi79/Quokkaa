import UserModel from "../Models/userModel.js";
import bcrypt from  'bcrypt';

//Registering a new User
export const registerUser = async(req, res) => {
    const {username, password, firstname, lastname} = req.body;

    const salt = await bcrypt.genSalt(10) 

    const newUser = new UserModel({username, password, firstname,lastname})


 //interact with server and save new user  we use try n catch block
    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}