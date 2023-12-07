import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        }, 
        result: {
            type: Array,
            default: [] ,
            required: true,
        },
        attenpts: {
            type: Number,
            default: 0
        },
        points: {
            type: Number,
            default: 0
        },
        achived: {
            type: String,
            default: ''
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false,
    }
)

export default  mongoose.model('Results', answerSchema)