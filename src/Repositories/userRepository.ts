import { RowDataPacket } from "mysql2";
import db from "../config/db";
import User from "../Dto/userDto";

export class UserRepository{
    static async registerUser(user:User): Promise<void>{
        try{
            const { email, userName, pass} = user;
            await db.query('INSERT INTO users(email, username, pass) VALUES(?,?,?)',
                [email, userName, pass]);
        }catch(error){
            console.error('Error register user:', error);
            throw new Error('Could not register user in database');
        }
    }

    static async loginUser(email: string, pass:string): Promise<User | null>{
        const [ rows ] = await db.query<RowDataPacket[]>('SELECT * FROM users WHERE email = ? and pass = ?', 
            [email, pass ])
        return rows.length > 0 ? (rows[0] as User) : null
    }

    static async findByEmail(email: string): Promise<User | null> {
        const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0] ? (rows[0] as User) : null;
    }

    static async findByUsername(username: string): Promise<User | null> {
        const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0] ? (rows[0] as User) : null;
    }
}