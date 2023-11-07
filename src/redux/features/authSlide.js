

import {createSlice} from "@reduxjs/toolkit"
 
const initialState = {
    user: null
}

export const authSlide = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, payload)=> { 

            let user = JSON.parse(payload.payload);
            state.user = user;
            
        },
        logout: (state, payload)=> { 
            
             state.user = null;
        }
    }
})

export const authAction = authSlide.actions; 
