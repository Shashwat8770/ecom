import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 export  const STATUSES = Object.freeze({
       IDLE : "idle",
       ERROR : "error",
       LOADING : "loading"
   })

const productSlice= createSlice({

    name:"product",
    initialState : {
        data : [],
        status : STATUSES.IDLE
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchData.pending , (state , action) => {
               state.status = STATUSES.LOADING
        })
        .addCase(fetchData.fulfilled , (state , action) => {
            state.data  = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchData.rejected , (state , action) => {           
            state.status = STATUSES.ERROR
        })
    }

})

export default productSlice.reducer

// Thunks

export const fetchData = createAsyncThunk('products/fetch' , async(api) => {
      const res = await fetch(`${api}`)
      const data = await res.json()
      return data
})