import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './productSlice';
import authReducer from './userSlice';



export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: ProductSlice

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

