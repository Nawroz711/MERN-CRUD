import mongoose from "mongoose"
import User from '../models/usersModel.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

// signup user
export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession()
    session.startTransaction();

    try {
        const { email, password, name } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            res.status(401).json({
                'message': 'User already exist!'
            })
        }
        else {

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt)

            const newUser = await User.create([{ name, email, password: hashedPassword }]);

            const JWT_SECRET = 'jcjaJS9W23SLKJACCAKL39kss'
            const JWT_EXPIRE = 3600
            const token = jwt.sign({ userId: newUser[0]._id } , JWT_SECRET , {expiresIn: JWT_EXPIRE})

            await session.commitTransaction()
            session.endSession()

            res.status(201).json({
                'token': token,
                'user': newUser
            })
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            'error': error,
        })
    }
}



