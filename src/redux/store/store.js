

import {configureStore} from "@reduxjs/toolkit"
import { authSlide } from "../features/authSlide"





export const store = configureStore({
    reducer: {
        auth: authSlide.reducer
    }
})