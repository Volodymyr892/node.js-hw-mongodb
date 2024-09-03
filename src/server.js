import express from "express"
import  pino  from "pino-http";
import cors from "cors";



import { env } from './utils/env.js';

const PORT = Number(env('PORT', '4000'));

export const setupServer = ()=> {
    const app = express();

    app.use(cors());
        app.use(express.json());
        app.use(
            pino ({
                transport:{
                    target: 'pino-pretty',
                }
            })
        );
    
    app.get("/", (reg, res)=>{
        res.json({
            message: 'Hello world!',
        }); 
    });
    app.use('*', (reg,res,next)=> {
        res.status(404).json({
            message: 'Not found'
        });
    });
    app.use((err,reg,res, next)=>{
        res.status(500).json({
            message: 'Something went wrong',
            error: err.message,
        });
    });
    

    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
};