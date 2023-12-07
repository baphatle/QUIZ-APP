import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
    {
        questions: {
            type: Array,
            require: true,
            default: []
        }, 
        answers: {
            type: Array,
            default: [] ,
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

export default  mongoose.model('Questions', questionSchema)