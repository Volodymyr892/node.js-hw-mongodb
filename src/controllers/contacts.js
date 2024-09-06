import { getAllContacts, getContactById } from "../services/contacts.js";

export const getAllContactsController = async( reg, res, next)=>{
        const contacts = await getAllContacts();
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
        next(new Error ('Contact not found'));
        return;
    }   
    res.json({
        status: 200,
        message: `Successfully found contact with id ${Id}!`,
        data:contact,
    });
};