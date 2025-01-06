import axiosClient from './axiosClient';
// Tạo các hàm gọi API
const userApi = {
    register: (data) => {
        return axiosClient.post('/auth/register', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }); // Gọi API register
    },
    login: (data) => {
        return axiosClient.post('/auth/login', data); // Gọi API login
    },
    getToursByCategory: (categoryName) => {
        return axiosClient.get(`/tours/category`, {
            params: {
                categoryName: categoryName
            }
        });
    },
    getAllTours: () => {
        return axiosClient.get('/tours/all'); // Gọi API lấy tất cả các tour
    },
    getTourById: (id) => {
        return axiosClient.get(`/tours/${id}`); // Gọi API lấy thông tin tour theo id
    },
    getCartByUserId: (userId) => {
        return axiosClient.get(`/cart/user/${userId}`);
    },
    createBooking: (data) => {
        return axiosClient
            .post('/bookings/add', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log('Booking created successfully', response.data);
                return response.data;
            })
            .catch((error) => {
                console.error('Error creating booking', error);
                throw error;
            });
    },

    getBookingsByUserId: (userId) => {
        return axiosClient
            .get(`/bookings/users/${userId}/bookings`)
            .then((response) => {
                console.log('Fetched bookings successfully', response.data);
                return response.data;
            })
            .catch((error) => {
                console.error('Error fetching bookings', error);
                throw error;
            });
    },
    getBookingsById: (bookingId) => {
        return axiosClient.get(`/bookings/${bookingId}`);
    },
    deleteBooking: (bookingId) => {
        return axiosClient.delete(`/bookings/delete/${bookingId}`);
    }
};
export default userApi;
