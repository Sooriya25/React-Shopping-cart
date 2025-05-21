import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../api/products'
export const fetchProducts = createAsyncThunk('products/fetchProducts', async ()=> {
    const response = await api.get('/products');
    return response.data;
})

const productSlice = createSlice({
    name: 'products',
    initialState:{
        items:[],
        status: 'idle'
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state) => {
            state.status="loading"
        })
        builder.addCase(fetchProducts.fulfilled,(state, action) => {
            state.status="succeeded",
            state.items = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state) => {
            state.status="failed" 
        })
    }
})


export const selectProductById = (state, productId) => 
    state.products.items.find(item => item.id === productId)

export default productSlice.reducer;