import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProducts } from '../../api/productsAPI';


export const getAllProducts = createAsyncThunk(
    "products/getAll",
    async () => await getProducts()
)

export const getSingleProduct = createAsyncThunk(
    "products/getSingle",
    async (id) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return await res.json()
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null,


        //single product state
        singleProduct: null,
        singleStatus: "idle"

    },

    reducers: {},
    extraReducers: (builder) => {
        // getAllProducts
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message
            });

        // getSingleProduct 
        builder
            .addCase(getSingleProduct.pending, (state) => {
                state.singleStatus = "loading"
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.singleStatus = "succeeded";
                state.singleProduct = action.payload
            })
            .addCase(getSingleProduct.rejected, () => {
                state.singleStatus = "failed";
                state.error = action.error.message
            })

    }
})

export default productsSlice.reducer;