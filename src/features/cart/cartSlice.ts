import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartOrders from "../../assets/cart.json";

interface Customer {
    name: string,
    phoneNumber: string,
    email?: string
}

interface Order {
    id: string,
    name: string,
    price: number,
    qty: number
}

interface Total {
    subtotal: number,
    promo: number,
}

interface CartState {
    customer: Customer,
    orders: Order[],
    total: Total
}

const initialState: CartState = {
    customer: {
        name: "",
        phoneNumber: ""
    },
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
                if(qty > 0) {
                    state.total.subtotal += order.price * qty
                    order.qty = qty 
                }
                else {
                    state.total.subtotal -= order.qty * order.price;
                    state.orders = state.orders.filter(order => order.id !== orderId)
                }
            } 
        },
        addNewItem: (state, action: PayloadAction<Order>) => {
            state.total.subtotal += action.payload.price
            state.orders.push(action.payload)
        },
        addCustomerInfo: (state, action: PayloadAction<string>) => {      
            const {name, phoneNumber, email} = (JSON.parse(action.payload))
            state.customer.name = name;
            state.customer.phoneNumber = phoneNumber;
            if(email) {
                state.customer.email = email
            }
            console.log(state.customer.name)
        },
        emptyCart: (state) => {
            state.customer.name = state.customer.phoneNumber = state.customer.email = "";
            state.orders = [];
            state.total.subtotal = state.total.promo = 0;
            
        }
    }
})

console.log("Initial state ", initialState)
export const { increment, decrement, enterQuantity, addNewItem, addCustomerInfo, emptyCart} = cartSlice.actions;
export default cartSlice.reducer