import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/Users.js"

dotenv.config()
const SECRET_CODE = process.env.SECRET_CODE

export const checkPermission = async (req, res, next) => {
    try {
        // check login status
        const token = req.headers.authorization?.split(" ")[1]
        
        //check token
        if(!token){
            return res.status(403).json({
                message: "you have to sign in"
            })
        }
        // check user role
        const decoded = jwt.verify(token, SECRET_CODE)
        const user = await User.findById(decoded._id)
        if(!user){
            return res.status(403).json({
                message: "Token error"
            })
        }
        if(user.role !== "admin"){
            return res.status(400).json({
                message: "Yoy are not alloư to do that"
            })
        }
        //next
        next()
    } catch (error) {
        return res.json({
            name: error.name,
            message: error.message
        })
    }
}