import db from '../config/db';
import Product from '../Dto/productDto';

export class ProductoRepository{

    static async getAllProducts(): Promise<Product[]>{
        try{
            const [ rows ] = await db.query('SELECT * FROM product')
            return rows as Product[];
        }catch(error){
            console.error('Error fetching products:', error);
            throw new Error('Could not fetch products from the database');
        }
        
    }

    static async getProductsByName(name: string): Promise<Product[]>{
        try{
            const [ rows ] =  await db.query('SELECT * FROM product WHERE nameP like ?', [`%${name}%`])
            return rows as Product[];
        }catch(error){
            console.error('Error fetching products:', error);
            throw new Error('Could not fetch products from the database');
        }
    }

    static async createProduct(product: Product): Promise<void>{
        try{
            const { description,name, price } = product;
            await db.query('INSERT INTO product(nameP, descriptionP, price) VALUES(?,?,?)',
            [name, description, price]);
        }catch(error){
            console.error('Error create the product:', error);
            throw new Error('Could not create product in database');
        }
        
    }

    static async deleteProduct(id: number): Promise<void>{
        try{
            await db.query('DELETE FROM product WHERE id = ?', [id])
        }catch(error){
            console.error('Error delete the product:', error);
            throw new Error('Could not delete product in database');
        }
    }
}
