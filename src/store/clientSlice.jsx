// store/clientSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
    name: 'client',
    initialState: {
        user: JSON.parse(sessionStorage.getItem('user')) || null // Lấy thông tin người dùng từ sessionStorage
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(action.payload)); // Lưu thông tin người dùng vào sessionStorage
        },
        logout: (state) => {
            state.user = null;
            sessionStorage.removeItem('user'); // Xóa thông tin người dùng khỏi sessionStorage
        }
    }
});

export const { setUser, logout, setBooking, updateBookingQuantity } = clientSlice.actions;
export default clientSlice.reducer;
