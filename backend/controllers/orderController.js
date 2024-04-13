import asyncHandler from "express-async-handler";
import {OrderModel as Order} from "../model/orderModel.js";

const getOrder = asyncHandler(async(req, res) => {
    const order = await Order.find();
    res.json(order)
})


const addOrder = asyncHandler(async (req, res) =>  {
    const {name, phoneNumber, email} = req.body
    
    if (!name) {
        res.status(400)
        throw new Error('Please add a text')
    }
    const order = await Order.create({
        name,
        phoneNumber,
        email
    })
    res.status(200).json(order)
})

export { getOrder, addOrder }