import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postsApi } from "./services/postApi";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import postSlice from "./features/postSlice";
export const store=configureStore({
    reducer:{
        post:postSlice.reducer,
        [postsApi.reducerPath]:postsApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat([postsApi.middleware,userApi.middleware]),

    
});
//setupListeners(store.dispatch)
// export type RootState=ReturnType<typeof store.getState>;
// export type AppDispatch=typeof store.dispatch;
