import createHttpError from "http-errors";
import { createContact, deleteContact, getAllContacts, getContactById, updateContact } from "../services/contacts.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";

export const getAllContactsController = async( req, res, next)=>{
        const {page, perPage} = parsePaginationParams(req.query);
        const { sortBy, sortOrder} =  parseSortParams(req.query);
        const filter = parseSortParams(req.query);

        const contacts = await getAllContacts({
            page,
            perPage,
            sortBy,
            sortOrder,
            filter: {...filter},
        });

        res.json({
            status: 200,
            message: "Successfully found contacts!",
            data:contacts,
        });
};

export const getContactByIdController = async(req, res, next)=>{
    const {Id} = req.params;
    const contact = await getContactById(Id);
    if (!contact) {
        throw createHttpError(404,'Contact not found');
       
    }   
    res.json({
        status: 200,
        message: `Successfully found contact with id ${Id}!`,
        data:contact,
    });
    next();
};

export const createContactController = async(req, res)=>{
    const contact = await createContact(req.body);

    res.status(201).json({
        status: 201,
        message: "Successfully created a contact!",
        data: contact,
    });
}; 

 export const deleteContactController= async(req,res, next)=>{
    const {Id} = req.params;
    const contact = await deleteContact(Id);

    if(!contact){
        next(createHttpError(404, 'Contact not found'));
        return;
    }
    
    res.status(204).send();
};

export const upsertContactController = async(req,res, next)=>{
    const {Id} = req.params;

    const result = await updateContact(Id,req.body, {
        upsert: true,
        });
    
    if(!result){
        next(createHttpError(404, 'Contact not found'));
        return;
    }
    const status = result.isNew ? 201 : 200;

    res.status(status).json({
        status,
        message: `Successfully upserted a student!`,
        data: result.contact,
    });
};

export const patchContactController = async(req,res,next)=>{
    const {Id} = req.params;
    const result = await updateContact(Id,req.body,);

    if(!result){
        next(createHttpError(404, 'Contact not found'));
        return;
    }

    res.json({
    status:200,
    message: `Successfully upserted a student!`,
    data: result.contact,
    });
};