import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});























// import express, { Application } from 'express';

// import productRoutes from '../Routes/productRoute'
// import dotenv from 'dotenv';
// import cors from 'cors'
// dotenv.config();

// class Server {
//     private app: Application;
//     private port: string;
//     private apiPaths = '/api'

//     constructor(){
//         this.app = express();
//         this.port = process.env.PORT || '5000';

//         this.middleware();
//     }


//     routes(){
//         this.app.use(this.apiPaths, productRoutes)
//     }

//     middleware(){
//         this.app.use(cors());
//         this.app.use(express.json())
//     }

//     listen(){
//         this.app.listen(this.port, ()=>{
//             console.log('Sevidor corriendo en puerto', this.port)
//         })
//     }
// }

// export default Server;