import { isValidObjectId } from "mongoose";
import createHttpError from "http-errors";

export const isValidId = (req,res,next )=> {
    const {Id}= req.params;
    if(!isValidObjectId(Id)){
       throw createHttpError(400, 'Bad Request');
    };

    next();
};