import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  {menuService} from "./menuService";

export interface Item {
    id: string,
    name: string,
    price: number
}
interface MenuList {
    [key: string]: Item[]
}

interface MenuState {
    menuList: MenuList[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    message: any
}

const initialState: MenuState = {
    menuList: [],
    loading: 'idle',
    message: ''
}

export const getMenu = createAsyncThunk('menu/getAll', async(_, thunkAPI) => {
    try {
        return await menuService.showMenu()       
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message ) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)        
    }
})

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getMenu.pending, (state) => {
            state.loading = 'pending'
        })
        .addCase(getMenu.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.menuList = action.payload
        })
        .addCase(getMenu.rejected, (state, action) => {
            state.loading = 'failed'
            state.message = action.payload
        })
    }
})

export default menuSlice.reducer;
/*
const showMenu = createAsyncThunk('menu/showAll', async(_, thunkAPI) => {
    try {
        return await menuService.showMenu();
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.message ) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const menuSlice = createSlice ({
    name: 'menu',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(showMenu.pending, (state) => {
                state.isLoading = true
            })
            .addCase(showMenu.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(showMenu.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.menuItems = action.payload
            })
    }
})

export default menuSlice.reducer;
*/