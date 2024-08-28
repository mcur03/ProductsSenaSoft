import { Request, Response } from "express";
import { ProductoRepository } from '../Repositories/productoRepository';

export class ProductController {
    static async getAll(_req: Request, res: Response){
        try{
            const products = await ProductoRepository.getAllProducts();
            res.json(products);
        }catch(error){
            console.error('Error fetching the products:', error);
            res.status(500).json({ message: 'Failed to retrieve products', error});
        }

        
    }

    static async getByName(req: Request, res:Response){
        try{
            const { name } = req.query;
            if (typeof name !== 'string') {
                return res.status(400).json({ message: 'Invalid name parameter' });
            }
            if (!name) {
                return res.status(404).json({ message: 'Product not found' });
            }
                const product = await ProductoRepository.getProductsByName(name as string);
                res.json(product);
        }catch(error){
            console.error('Error fetching product by name:', error);
            res.status(500).json({ message: 'Failed to retrieve products', error });
        }
    }

    static async create(req:Request, res:Response){
        try{
            const product = req.body;
            await ProductoRepository.createProduct(product);
            res.status(201).json({message: 'Product created'});
        }catch(error){
            console.error('Error creat the product:', error);
            res.status(500).json({ message: 'Product could not be created', error });
        }

        
    }

    static async delete(req:Request, res:Response){
        try{
            const { id } = req.params;
            await ProductoRepository.deleteProduct(Number(id))
            res.json({message: 'Product deleted '})
        }catch(error){
            console.error('Error delete the product:', error);
            res.status(500).json({ message: 'Could not delete product', error });
        }
    }
}