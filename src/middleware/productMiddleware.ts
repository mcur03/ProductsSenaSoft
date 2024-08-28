import { Request, Response, NextFunction } from "express";
import db from "../config/db";

export const validateProduct = (req:Request, res:Response, next:NextFunction) => {
    const { name, price } = req.body;

    if(!name || typeof name !== 'string'){
        return res.status(400).json({message: 'Invalid product name'})
    }

    if (!price || typeof price !== 'number') {
        return res.status(400).json({ message: 'Invalid product price' });
    }
    next();
};

export const validateProductExists = async(req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    try{
        const [ rows ] = await db.query('SELECT id FROM product WHERE id = ?', [id]);
        if((rows as any[]).length === 0){
            return res.status(404).json({message: 'Product not found'})
        }
        next();
    }catch(error){
        res.status(500).json({message: 'Database error', error})
    }
}