import mysql from 'mysql2/promise';
import dotenv from 'dotenv'

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

async function checkConnection() {
    try {
        const connetion = await db.getConnection();
        console.log('Conectado a la base de datos');
        connetion.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}
checkConnection();
export default db;