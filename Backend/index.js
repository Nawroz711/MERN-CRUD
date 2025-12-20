import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// import routes
import authRouter from './routers/authRouter.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// api routes
app.use('/api/auth' , authRouter)


// CONNECT TO MONGODB 
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB CONNECTED');
}).catch(err =>  {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Hi')
})

app.listen(process.env.PORT, async () => {
})

export default app;