import express from 'express'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import router from './routers/index.js'
const app = express()

dotenv.config()
const PORT = process.env.PORT || 9000

app.use(morgan('tiny'))
app.use(cors())

connect(process.env.MONGO_URL);
app.use(express.json()) 

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})