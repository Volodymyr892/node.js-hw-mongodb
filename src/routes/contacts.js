import { Router } from "express";

import { getAllContactsController,getContactByIdController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/contacts", ctrlWrapper(getAllContactsController));
router.get("/contacts/:Id", ctrlWrapper(getContactByIdController));


export default router;