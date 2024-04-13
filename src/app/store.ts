import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartReducer from "../features/cart/cartSlice";
import menuReducer from "../features/menu/menuSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        menu: menuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;