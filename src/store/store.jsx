// store/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientSlice';

const store = configureStore({
    reducer: {
        client: clientReducer // Reducer quản lý thông tin người dùng
    }
});

export default store;
