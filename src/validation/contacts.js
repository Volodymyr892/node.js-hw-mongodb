import Joi from "joi";
import { generList } from "../constans/contacts.js";

export const createStudentSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().min(3).max(20).required(),
    isFavourite: Joi.boolean().required(),
    contactType: Joi.string().valid(...generList).min(3).max(20).required(),
});

export const updateStudentSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.string().min(3).max(20),
    email: Joi.string().email().min(3).max(20),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid(...generList).min(3).max(20)
});