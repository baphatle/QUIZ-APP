import Questions from "../models/Questions.js"
import questions, { answers } from '../databasse/data.js'

export const getAll = async (req, res) => {
    try {
        const q = await Questions.find()
        res.json(q) 
    } catch (error) {
        res.json({ error })
    }
}

export async function insert(req, res){
    Questions.insertMany({ questions, answers})
        .then(function(err, data){
            res.json({
                message: "data saved successfully"
            })
            .catch(function(er){
                console.log(err)
            })
        })
}

export const remove = async (req, res) => {
    try {
        await Questions.deleteMany()
        res.json({
            message: "Questions Deleted successfully"
        })
    } catch (error) {
        res.json({ error })
    }
}

export const update = async (req, res) => {
    try {
        const question = Questions.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!question){
            res.json({
                message: "question updated fail"
            })
        }
        return res.json({
            message: "question updated successfully"
        })
    } catch (error) {
        res.json({error})
    }
}

