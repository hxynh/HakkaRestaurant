import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String
})

export const OrderModel = mongoose.model('orders', orderSchema)