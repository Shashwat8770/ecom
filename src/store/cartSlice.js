import { createSlice , current } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add : (state , action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )
            if(itemIndex >= 0){
                // state[itemIndex].cartQuantity += 1
                // const person = prompt("This Product Already In Cart");
                // console.log(person)
                alert("This Product Already In Cart !!! If you want same more Product Then visit to Cart & Increase Product Quantity");
                const button = document.querySelector(".add_cart")
                button.setAttribute("disabled")
                // button.innerText = "abc"
                
            }else{
                const tempProduct = { ...action.payload , cartQuantity : 1 }
                state.push(tempProduct)
            }
           
        },
        remove : (state , action) => {            
            return state.filter(item => item.id !== action.payload)
        },
        increment : (state , action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload
            )
            state[itemIndex].cartQuantity += 1
        },
        decrement : (state , action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload
            )
           if(state[itemIndex].cartQuantity > 0){
                state[itemIndex].cartQuantity -= 1
           }
        },
        discount : (state , action) => {
            const indexItem = state.findIndex(
                (item) => item.id === action.payload
            )
            const newPrice = state[indexItem].price*0.5
                 console.log(indexItem)
            return state.map((item )=> (item.id = action.payload) ? { ...item , price : newPrice } : item)             

           
        }

    }
    
})

export const {add , remove , increment , decrement , discount } = cartSlice.actions

export default cartSlice.reducer