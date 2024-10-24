import { Router } from "express";
import {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/items.contollers.js";

const router = Router();

//create an item - /items
router.post("", createItem);

//getting items- /items
router.get("", getAllItems);

//get a single item- /items/:title
router.get("/:title", getItem);

//update an item- /items/:title
router.patch("/:title", updateItem);

//delete an item- /items/:title
router.delete("/:title", deleteItem);

export default router;
