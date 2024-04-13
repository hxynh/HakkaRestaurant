import asyncHandler from "express-async-handler";
import { MenuModel as Menu } from "../model/menuModel.js";

const getMenu = asyncHandler (async (req, res) => {
    const menu = await Menu.find();
    res.json(menu)
})

export {getMenu}