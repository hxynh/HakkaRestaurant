import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartOrders from "../../assets/cart.json";

interface Order {
    id: string,
    category: string,
    name: string,
    price: number,
    qty: number
}

interface Total {
    subtotal: number,
    promo: number,
}

interface CartState {
    orders: Order[],
    total: Total
}


const initialState: CartState = {
    orders: [...cartOrders],
    total: {
        subtotal: cartOrders.map(item => item.qty * item.price).reduce((prev, cur) => prev + cur),
        promo: 0
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            const order = state.orders.find(order => order.id === action.payload);
            if (order) {
                console.log(order.id, order.qty)
                order.qty++;
                state.total.subtotal += order.price
            }
        },
        decrement: (state, action: PayloadAction<string>) => {
            const order = state.orders.find(order => order.id === action.payload);
            if (order) {
                state.total.subtotal -= order.price
                if(order.qty > 1) {
                    console.log(order.id, order.qty)
                    order.qty--;
                }
                else{
                    state.orders = state.orders.filter(order => order.id !== action.payload)
                }
            } 

        },
        enterQuantity: (state, action: PayloadAction<{orderId: string, qty: number}>) => {
            const {orderId, qty} = action.payload;
            const order = state.orders.find(order => order.id === orderId);
            if(order) {
                if(qty <= 0) {
                    state.orders = state.orders.filter(order => {order.id !== orderId})
                    //subtotal calculation pending
                }
                else {
                    state.total.subtotal += order.price * qty
                    order.qty = qty 
                }
            } 
            
        },
        addNewItem: (state, action: PayloadAction<Order>) => {
            console.log(action.payload.qty);
            state.orders.push(action.payload)
        }
    }
})

console.log("Initial state ", initialState)
export const { increment, decrement, enterQuantity, addNewItem} = cartSlice.actions;
export default cartSlice.reducer