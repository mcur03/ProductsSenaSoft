import { Request, Response } from "express";
import { UserRepository } from '../Repositories/userRepository';
import jwt from 'jsonwebtoken';


export class UserController{
    static async register(req:Request, res:Response){
        try{
            const user = req.body
            await UserRepository.registerUser(user);
            res.json({message: 'Successfully registered'})
        }catch(error){
            console.error('Error registering:', error);
            res.status(500).json({ message: 'Could not register', error });
        }
    }

    static async login(req:Request, res:Response){
        const { email, pass } = req.body

        const user = await UserRepository.loginUser(email, pass);
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }
        const token =  jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES });
        return res.status(200).json({
            message: 'Usuario autenticado',
            token: token
        });
    }

}