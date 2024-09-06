import express from "express";
import cors from "cors";
import contactsRouter from "./routes/contacts.js";
import logger from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notEoundHandler } from "./middlewares/notFoundHandler.js";
import { env } from './utils/env.js';

const PORT = Number(env('PORT', '4000'));

export const setupServer = ()=> {
    const app = express();

    app.use(logger);
    app.use(cors());
    app.use(express.json());

    app.use(contactsRouter);

    app.use('*', notEoundHandler);
    app.use(errorHandler);
    
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
};