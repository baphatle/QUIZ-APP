import { signinValidator, userValidator } from "../validation/user.js"
import User from "../models/Users.js"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()
const SECRET_CODE = process.env.SECRET_CODE

//register
export const signUp = async (req, res) => {
    try {
        // Validate input data
        const {error} = userValidator.validate(req.body, {abortEarly: false})
        if(error){
            const errors = error.details.map(err => err.message)  
            return res.status(400).json({
                message: errors
            })
        }

        // Check available email
        const userExists = await User.findOne({emaul: req.body.email})
        if(userExists){
            return res.status(400).json({
                message: "Email da duoc su dung"
            })
        }
        // Encode passwword
        const hashedPassword = await bcryptjs.hash(req.body.password, 10)
    
        // Create a new user in database
        const user = await User.create({
            ...req.body,
            password: hashedPassword
        })

        // Send success notification 
        // delete pass
        user.password = undefined 
        return res.status(200).json({
            message: "Dang ky thanh cong",
            user,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        })
    }
}

//sign in
export const singIn = async(req, res) => {
    try {
        //validate input data
        const {error} = signinValidator.validate(req.body, {abortEarly: false})
        if(error){
            const errors = error.details.map(err => err.message)  
            return res.status(400).json({
                message: errors
            })
        }

        //check available email
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(404).json({
                message: "Email khong ton tai"
            })
        }
        //compare password
        const isMatch = await bcryptjs.compare(req.body.password, user.password)
        if(!isMatch){
            return res.status(400).json({
                message: "Mat khau khong dung"
            })
        }

        //create JWWT
        const accessToken = jwt.sign({_id: user._id}, SECRET_CODE, {expiresIn:"1d"}) 
        
        //send notification
        user.password = undefined
        return res.status(200).json({
            message: "Dang nhap thanh cong",
            user,
            accessToken
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}