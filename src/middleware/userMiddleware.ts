import { Request, Response, NextFunction } from "express";
import { body, validationResult } from 'express-validator';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { UserRepository } from "../Repositories/userRepository";
dotenv.config();

export function validarToken(req:Request, res:Response, netx:NextFunction){
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try{
        jwt.verify(token as string, process.env.JWT_SECRET as string, (err) => {
            if(err){
                console.error('Access denied, token expired or incorrect', err.message);
                return res.status(401).json({ message: 'Access denied, token expired or incorrect' })
            }else{
                console.log('Autenticado');
                netx();
            }
        });
    }catch(error){
        res.status(401).json({ message: 'Token inválido ' });
    }
    
}

export const validateUserRegistration = [
    body('email')
        .isEmail().withMessage('El correo electrónico debe ser válido')
        .custom(async (email) => {
            const existingUser = await UserRepository.findByEmail(email);
            if (existingUser) {
                throw new Error('El correo electrónico ya está en uso');
            }
        }),
    body('userName')
        .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres')
        .custom(async (username) => {
            const existingUser = await UserRepository.findByUsername(username);
            if (existingUser) {
                throw new Error('El nombre de usuario ya está en uso');
            }
        }),
    body('pass')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

