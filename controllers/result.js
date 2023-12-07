import Questions from "../models/Questions.js"
import Results from "../models/Results.js"
import questions, { answers } from '../databasse/data.js'

export async function getResult(req, res){
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
} 

export const storeResult = async (req, res) => {
    try {
        const result = await Results.create(req.body)
    if(!result){
        return res.json({
            mesage: "Data not provided"
        })
    }
    return res.json({
        message: "Result saved successfully",
        datas: result
    })
    } catch (error) {
        res.json({
            message: error,
        })
    }
}

export async function deleteResult(req, res){
    try {
        await Results.deleteMany()
        res.json({
            message: 'Result deleted successfully'
        })
    } catch (error) {
        res.jsom({ error })
    }
}
