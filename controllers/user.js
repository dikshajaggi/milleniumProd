import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import userModel from "../models/user.js"

export const login = async (req, res) => {
    const {password, email} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success: false, message: "user doesn't exists"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({success: false, message: "invalid credentials"})
        }
        const token = createToken(user._id)
        return res.json({success: true, token})
    } catch (error) {
        console.log(error, "error check")
        return res.json({success: false, message: "error"})
    }
}

const createToken = (id) => {
   return jwt.sign({id}, process.env.JWT_SECRET)
}

export const signup = async (req, res) => {
    const {name, password, email} = req.body
    try {
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message:"user already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"please enter valid email"})
        }
        if(password.length < 8){
            return res.json({success: false, message:"please enter a strong password"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass =  await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPass
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        return res.json({success: true, token})
    } catch(error) {
        console.log(error, "error check")
        return res.json({success: false, message: "error"})
    }
}