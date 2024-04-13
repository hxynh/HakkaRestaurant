import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    category: String,
    name: String,
    price: Number
})

export const MenuModel = mongoose.model('menus', menuSchema)